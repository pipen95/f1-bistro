import Track from './Track';
import Side from './Side';
import { f1ApiContext } from 'context/Context';
import { gameContext } from './context/Context';
import { useReducer, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bonusList from 'data/bonus.json';
import retiredDrivers from 'data/data_retired';
import voteRestructure from 'utils/voteRestructure';
import { toast } from 'react-toastify';
import {
  postVoteData,
  updateVoteData,
  getVoteData,
  resetVote,
} from './../../features/vote/voteSlice';
import gameReducer from './gameReducer';

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

  // GET VOTE
  useEffect(() => {
    dispatchVote(resetVote());
    if (user && userData) {
      dispatchVote(getVoteData(userData._id));
    } else {
      dispatchVote(resetVote());
    }

    if (isVoteError) {
      toast.error(message);
    }
  }, [user, userData]);

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

  // POST REQUEST
  const handleSave = async () => {
    const vote = voteRestructure(state);

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

  // Pass data to the page via props
  return { props: { driversList } };
}

export default Game;
