import DriverDrop from './DriverDrop';
import BonusDrop from './BonusDrop';

const SlotItem = ({ pos }) => {
  return (
    <div className="Slots__item" key={pos}>
      <p className="text-center">{`#${pos}`}</p>
      <DriverDrop />
      <BonusDrop />
    </div>
  );
};

export default SlotItem;
