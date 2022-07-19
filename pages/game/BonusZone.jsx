import BonusDrop from 'BonusDrop';

const BonusZone = ({ pos }) => {
  const n = 3; // Or something else

  const bonusItems = [...Array(n)].map((e, i) => (
    <BonusDrop location={`bonus${pos}-${i}`} />
  ));
  return <div className="Slots__bonus">{bonusItems}</div>;
};

export default BonusZone;
