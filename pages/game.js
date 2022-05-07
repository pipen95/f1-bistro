import Track from './../components/game/Track';
import Side from './../components/game/Side';
import Context from '../components/Context';
import { useReducer, useMemo } from 'react';
// import actionsTypes from '../../gameTypes/actions.js';

const Game = ({ drivers }) => {
  const initialState = {
    drivers,
  };

  console.log(initialState);

  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      // case actionsTypes.DRIVER:
      //   return {
      //     ...state,
      //     drivers: action,
      //   };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer({ gameReducer, initialState });

  console.log(state);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  console.log(state);
  return (
    <div className="Game">
      <Context.Provider value={{ contextValue }}>
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
  const drivers = driversJSON.MRData.DriverTable.Drivers;

  // Pass data to the page via props
  return { props: { drivers } };
}

export default Game;
