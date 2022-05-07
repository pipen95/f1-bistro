import { useDrop } from 'react-dnd';
import itemTypes from '../../gameTypes/items';

const DriverDrop = () => {
  const [{ isOver }, dropRef] = useDrop({
    accept: itemTypes.DRIVER,
    drop: (item) => addDriverToDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addDriverToDrop = (id) => {
    console.log(id);
  };

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
