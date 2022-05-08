import { useContext } from 'react';
import Context from '../Context';
import { useDrop } from 'react-dnd';
import itemTypes from '../../gameTypes/items';
import actionsTypes from '../../gameTypes/actions';

const DriverDrop = ({ location }) => {
  const { state, dispatch } = useContext(Context);
  const [{ isOver }, dropRef] = useDrop({
    accept: itemTypes.DRIVER,
    drop: (item) => addDriverToDrop(item.idx),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addDriverToDrop = (idx) => {
    console.log({ location, idx });
    dispatch({
      type: actionsTypes.DRIVER_SET,
      payload: { location, idx },
    });
  };

  const filteredDriver = Array.from(state).filter(
    (el) => el.location === `${location}`
  );

  return (
    <div className="Slots__drivers">
      <div
        className={`Slots__drivers__circle ${
          isOver ? 'Slots__drivers__circle--green' : ''
        }`}
        ref={dropRef}
      >
        {filteredDriver}
      </div>
    </div>
  );
};

export default DriverDrop;
