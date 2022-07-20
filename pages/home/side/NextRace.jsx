import { useContext } from 'react';
import { f1ApiContext } from 'context/Context';
import dataCircuits from 'data/data_circuits.json';
const NextRace = () => {
  const { nextRace } = useContext(f1ApiContext);
  const imagePicker = (id, defaultVal) => {
    const x = dataCircuits.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };
  if (!nextRace) return <p>No race</p>;
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
        style={{
          width: 30,
          height: 'auto',
          marginRight: 10,
          outline: 'gray solid 1px',
          borderRadius: '100%',
        }}
        src={`${imagePicker(
          nextRace.data.MRData.RaceTable.Races[0].Circuit.circuitId,
          'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
        )}`}
        alt=""
      />
      <span>
        <p
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          <strong> {nextRace.data.MRData.RaceTable.Races[0].raceName}</strong>
        </p>
      </span>
    </div>
  );
};

export default NextRace;
