import { useDrop } from 'react-dnd';
import itemTypes from '../../utils/items';

const DriverDrop = () => {
  const [{ isOver }, dropRef] = useDrop({
    accept: itemTypes.DRIVER,
    drop: (item) => {
      item.id;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="Slots__drivers">
      <div
        className={`Slots__drivers__circle ${
          isOver ? 'Slots__drivers__circle--green' : ''
        }`}
        ref={dropRef}
      ></div>
    </div>
  );
};

export default DriverDrop;
