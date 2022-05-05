import { useDrag } from 'react-dnd';
import itemTypes from './../../utils/items';

const Driver = ({ id }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.DRIVER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="Drivers__item"
      ref={dragRef}
      opacity={isDragging ? '0,5' : '1'}
    >
      <img
        src="https://www.f1fantasytracker.com/Images/Drivers/Verstappen.png"
        alt="Name pic"
        className="Drivers__img"
      />
    </div>
  );
};

export default Driver;
