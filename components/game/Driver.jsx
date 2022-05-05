import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const Driver = () => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.DRIVER,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="Drivers__item"
      ref={drag}
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
