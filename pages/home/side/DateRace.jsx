import { useContext } from 'react';
import { f1ApiContext } from 'context/Context';

const DateRace = () => {
  const { nextRace } = useContext(f1ApiContext);
  if (!nextRace) return <p>No time yet</p>;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
      }}
    >
      <img
        style={{ width: 12, marginRight: 10 }}
        src="https://www.f1fantasytracker.com/Images/Icons/calendar.png"
        alt=""
      />
      <span>
        <p className="petit">{nextRace.data.MRData.RaceTable.Races[0].date}</p>
      </span>
    </div>
  );
};

export default DateRace;
