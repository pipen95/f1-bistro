import { useDrag } from 'react-dnd';
import itemTypes from '../../gameTypes/items';
const Driver = ({ id, location, idx }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.DRIVER,
    item: { location, idx },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
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
