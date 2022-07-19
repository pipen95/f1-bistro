import SlotItem from 'SlotItem';
import Top from 'Top';

const Track = () => {
  const n = 20; // Or something else

  const items = [...Array(n)].map((e, i) => <SlotItem pos={i + 1} />);

  return (
    <div className="Track">
      <Top />
      <div className="Slots">{items}</div>
    </div>
  );
};

export default Track;
