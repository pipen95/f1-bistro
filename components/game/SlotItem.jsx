import DriverDrop from './DriverDrop';
import BonusZone from './BonusZone';

const SlotItem = ({ pos }) => {
  return (
    <div className="Slots__item" key={pos}>
      <p className="text-center">{`#${pos}`}</p>
      <DriverDrop location={`driver${pos}`} />
      <BonusZone pos={pos} />
    </div>
  );
};

export default SlotItem;
