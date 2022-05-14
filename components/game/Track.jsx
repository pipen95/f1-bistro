import SlotItem from './SlotItem';
import Context from '../Context';
import { useContext } from 'react';
import actionsTypes from '../../gameTypes/actions';

const Track = () => {
  const { dispatch } = useContext(Context);
  const n = 20; // Or something else

  const items = [...Array(n)].map((e, i) => <SlotItem pos={i + 1} />);

  const reset = () => {
    dispatch({
      type: actionsTypes.RESET,
    });
  };

  return (
    <div className="Track">
      <div className="Title">
        <div>
          <a onClick={reset} className="btn btn--white">
            Reset
          </a>
        </div>
        <div className="box">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
        <div>
          <a href="#" className="btn btn--white">
            Save
          </a>
        </div>
      </div>
      <div className="Finish"></div>
      <div className="Slots">{items}</div>
    </div>
  );
};

export default Track;
