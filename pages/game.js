import Track from './../components/game/Track';
import Side from './../components/game/Side';
import Context from '../components/Context';
import { useReducer } from 'react';
import actionsTypes from './../gameTypes/actions';

const gameReducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.DRIVER_SET:
      return {
        state,
        // state: [
        //   ...state.slice(0, action.payload.idx),
        //   { location: `${action.payload.location}` },
        //   ...state.slice(action.payload.idx + 1),
        // ],
      };

    default:
      return state;
  }
};

const Game = ({ drivers }) => {
  let initialState = [];

  for (let x of drivers) {
    initialState.push({
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
  const drivers = driversJSON.MRData.DriverTable.Drivers.filter(
    (el) => el.familyName !== 'Hülkenberg'
  );

  // Pass data to the page via props
  return { props: { drivers } };
}

export default Game;
