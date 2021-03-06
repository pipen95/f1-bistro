import Track from './Track';
import Side from './Side';
import { f1ApiContext } from 'context/Context';
import { gameContext } from './context/Context';
import { useReducer, useContext } from 'react';
import actionsTypes from './types/actions';
import bonusList from 'data/bonus.json';

// REDUCER
const gameReducer = (state, action) => {
  const { drivers, bonus } = state;

  switch (action.type) {
    case actionsTypes.DRIVER_SET:
      const driverIdx = drivers.findIndex(
        (el) => el.id === `${action.payload.id}`
      );

      const driverLocationTaken = drivers.filter(
        (el) =>
          el.location !== 'side' && el.location === `${action.payload.location}`
      );

      if (driverLocationTaken.length == 0) {
        return {
          ...state,
          drivers: [
            ...drivers.slice(0, driverIdx), // before the one we are updating
            {
              ...drivers[driverIdx],
              location: action.payload.location,
            },
            ...drivers.slice(driverIdx + 1), // after the one we are updating
          ],
        };
      } else {
        return state;
      }

    case actionsTypes.BONUS_SET:
      const bonusIdx = bonus.findIndex(
        (el) => el.id === `${action.payload.id}`
      );

      const bonusLocationTaken = bonus.filter(
        (el) =>
          el.location !== 'side' && el.location === `${action.payload.location}`
      );

      if (bonusLocationTaken.length == 0) {
        return {
          ...state,
          bonus: [
            ...bonus.slice(0, bonusIdx), // before the one we are updating
            {
              ...bonus[bonusIdx],
              location: action.payload.location,
            },
            ...bonus.slice(bonusIdx + 1), // after the one we are updating
          ],
        };
      } else {
        return state;
      }

    case actionsTypes.RESET:
      return {
        ...state,
        drivers: [
          ...drivers.map(({ location, ...el }) => ({
            ...el,
            location: 'side',
          })),
        ],
        bonus: [
          ...bonus.map(({ location, ...el }) => ({
            ...el,
            location: 'side',
          })),
        ],
      };

    default:
      return state;
  }
};

// COMPONENT
const Game = ({ driversList }) => {
  let initialState = {
    drivers: [],
    bonus: [],
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);
  console.log(state);

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

  const { nextRace } = useContext(f1ApiContext);
  console.log(nextRace);

  // HANDLE SAVE
  const handleSave = async () => {
    let vote = [];

    const constructVoteArr = () => {};

    const payload = {
      circuitId: `${nextRace.data.MRData.RaceTable.Races[0].Cicuit.circuitId}`,
      season: `${nextRace.data.MRData.RaceTable.Races[0].season}`,
      vote,
    };

    try {
    } catch (error) {
      console.log(error);
    }
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
    (el) => el.familyName !== 'H??lkenberg'
  );

  // Pass data to the page via props
  return { props: { driversList } };
}

export default Game;
