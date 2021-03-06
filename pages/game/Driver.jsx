import { useContext } from 'react';
import { gameContext } from './context/Context';
import { useDrag } from 'react-dnd';
import itemTypes from '././types/items';
import actionsTypes from '././types/actions';

const Driver = ({ id, name }) => {
  const { dispatch } = useContext(gameContext);
  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.DRIVER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        const location = 'side';
        const addDriverToDrop = (location, id) => {
          dispatch({
            type: actionsTypes.DRIVER_SET,
            payload: { location, id },
          });
        };
        addDriverToDrop(location, item.id);
      }
    },
  });

  return (
    <div className="Drivers__item" opacity={isDragging ? 0.5 : 1} ref={dragRef}>
      <img
        src={`https://www.f1fantasytracker.com/Images/Drivers/${name}.png`}
        alt="Name pic"
        className="Drivers__img"
      />
    </div>
  );
};

export default Driver;
