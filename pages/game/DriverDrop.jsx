import { useContext } from 'react';
import { gameContext } from './context/Context';
import { useDrop } from 'react-dnd';
import itemTypes from './types/items';
import actionsTypes from './types/actions';
import Driver from './Driver';

const DriverDrop = ({ location }) => {
  const { state, dispatch } = useContext(gameContext);
  const [{ isOver }, dropRef] = useDrop({
    accept: itemTypes.DRIVER,
    drop: (item) => addDriverToDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addDriverToDrop = (id) => {
    dispatch({
      type: actionsTypes.DRIVER_SET,
      payload: { location, id },
    });
  };

  const filteredDriver = state.drivers.filter(
    (el) => el.location === `${location}`
  );

  const driverItem = filteredDriver.map((el, i) => {
    return <Driver key={i} id={el.id} name={el.name} location={el.location} />;
  });

  return (
    <div className="Slots__drivers">
      <div
        className={`Slots__drivers__circle ${
          isOver ? 'Slots__drivers__circle--green' : ''
        }`}
        ref={dropRef}
      >
        {driverItem}
      </div>
    </div>
  );
};

export default DriverDrop;
