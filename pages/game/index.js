import Track from './Track';
import Side from './Side';
import { f1ApiContext } from 'context/Context';
import { gameContext } from './context/Context';
import { useReducer, useContext, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bonusList from 'data/bonus.json';
import retiredDrivers from 'data/data_retired';
import { voteDestructure, voteRestructure } from 'utils/voteHandler';
import { toast } from 'react-toastify';
import {
  postVoteData,
  updateVoteData,
  getVoteData,
  resetVote,
} from './../../features/vote/voteSlice';
import gameReducer from './gameReducer';
import actionsTypes from '././types/actions';

const Game = ({ driversList }) => {
  let initialState = {
    drivers: [],
    bonus: [],
  };

  // REDUX
  const { userData } = useSelector((state) => state.user);
  const { voteData, isVoteSuccess, isVoteError, message } = useSelector(
    (state) => state.vote
  );
  const { user } = useSelector((state) => state.auth);
  const dispatchVote = useDispatch();

  // CONTEXT
  const { nextRace } = useContext(f1ApiContext);
  const [state, dispatch] = useReducer(gameReducer, initialState);

  console.log(state);

  // BUILD Drivers List
  for (let x of driversList) {
    initialState.drivers.push({
      name: x.familyName.normalize('NFD').replace(/\p{Diacritic}/gu, ''),
      id: x.driverId,
      location: 'side',
    });
  }

  for (let x of bonusList) {
    initialState.bonus.push({
      id: x.id,
      location: 'side',
      text: x.text,
    });
  }

  // Retrieve Vote function
  const voteRestructureCB = useCallback(() => {
    const data = voteRestructure(voteData);

    if (data) {
      const { drivers, bonus } = data;
      for (const { location, id, name } of drivers) {
        console.log(location, id, name);
        dispatch({
          type: actionsTypes.DRIVER_SET,
          payload: { location, id, name },
        });
      }

      for (const { location, id, text } of bonus) {
        console.log(location, id, text);
        dispatch({
          type: actionsTypes.BONUS_SET,
          payload: { location, id, text },
        });
      }
    }
  }, [voteData]);

  // GET VOTE
  useEffect(() => {
    if (user && userData) {
      dispatchVote(getVoteData(userData._id));
      if (isVoteSuccess) {
        voteRestructureCB();
      }
    } else {
      dispatchVote(resetVote());
    }

    if (isVoteError) {
      toast.error(message);
    }
  }, [user, userData, isVoteSuccess]);

  console.log(voteData);

  // POST REQUEST
  const handleSave = async () => {
    const vote = voteDestructure(state);

    if (vote.pass) {
      const payload = {
        votedBy: userData._id,
        season: Number(nextRace.data.MRData.RaceTable.Races[0].season),
        circuitId: `${nextRace.data.MRData.RaceTable.Races[0].Circuit.circuitId}`,
        raceName: `${nextRace.data.MRData.RaceTable.Races[0].raceName}`,
        vote: vote.data,
      };

      if (voteData !== null) {
        const updateData = { vote: payload, voteId: voteData._id };
        // Redux object for multiple arguments
        dispatchVote(updateVoteData(updateData));
        if (isVoteSuccess) {
          toast.success(`Thank you for updating your vote!`);
        }
      } else {
        dispatchVote(postVoteData(payload));
        toast.success(`Thank you for voting!`);
      }
    }
    return;
  };

  return (
    <div className="Game">
      <gameContext.Provider value={{ state, dispatch, handleSave }}>
        <Track />
        <Side />
      </gameContext.Provider>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://ergast.com/api/f1/current/drivers.json`);
  const driversJSON = await res.json();
  const driversList = driversJSON.MRData.DriverTable.Drivers.filter(
    (el) => !retiredDrivers.includes(el.driverId)
  );

  const date = await fetch(`http://ergast.com/api/f1/current/drivers.json`);
  const dataJSON = await date.json();

  // Pass data to the page via props
  return { props: { driversList } };
}

export default Game;
