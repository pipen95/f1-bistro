import { useContext } from 'react';
import Context from '../Context';
import { useDrag } from 'react-dnd';
import itemTypes from '../../gameTypes/items';
import actionsTypes from '../../gameTypes/actions';

const Driver = ({ id }) => {
  const { dispatch } = useContext(Context);
  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.DRIVER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        const addDriverToDrop = (id) => {
          // const location = 'side';
          dispatch({
            type: actionsTypes.DRIVER_SET,
            payload: { location, id },
          });
        };
        addDriverToDrop(item.id);
      }
    },
  });

  return (
    <div className="Drivers__item" opacity={isDragging ? 0.5 : 1} ref={dragRef}>
      <img
        src={`https://www.f1fantasytracker.com/Images/Drivers/${id}.png`}
        alt="Name pic"
        className="Drivers__img"
      />
    </div>
  );
};

export default Driver;
