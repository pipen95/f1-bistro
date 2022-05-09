import Track from './../components/game/Track';
import Side from './../components/game/Side';
import Context from '../components/Context';
import { useReducer } from 'react';
import actionsTypes from './../gameTypes/actions';

const gameReducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.DRIVER_SET:
      const i = action.payload.idx;
      const obj = state.drivers;

      return {
        ...state,
        drivers: [
          ...obj.slice(0, i), // before the one we are updating
          {
            id: action.payload.id,
            location: action.payload.location,
          },
          ...obj.slice(i + 1), // after the one we are updating
        ],
      };

    default:
      return state;
  }
};

const Game = ({ driversList }) => {
  let initialState = {
    drivers: [],
  };

  for (let x of driversList) {
    initialState.drivers.push({
      id: x.familyName.normalize('NFD').replace(/\p{Diacritic}/gu, ''),
      location: 'side',
    });
  }

  const [state, dispatch] = useReducer(gameReducer, initialState);

  console.log(state);

  return (
    <div className="Game">
      <Context.Provider value={{ state, dispatch }}>
        <Track />
        <Side />
      </Context.Provider>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://ergast.com/api/f1/current/drivers.json`);
  const driversJSON = await res.json();
  const driversList = driversJSON.MRData.DriverTable.Drivers.filter(
    (el) => el.familyName !== 'Hülkenberg'
  );

  // Pass data to the page via props
  return { props: { driversList } };
}

export default Game;
