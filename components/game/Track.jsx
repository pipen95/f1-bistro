import SlotItem from './SlotItem';

const Track = () => {
  const n = 20; // Or something else

  const items = [...Array(n)].map((e, i) => <SlotItem pos={i + 1} />);

  return (
    <div className="Track">
      <div className="Title">
        <div className="box">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
      </div>
      <div className="Finish"></div>
      <div className="Slots">{items}</div>
      <div className="Submit center">
        <a href="#" className="btn btn--blue">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Track;
