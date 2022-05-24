import { useContext } from 'react';
import dataCircuits from '../../../data/data_circuits.json';

const NextRace = () => {
  var contextData = useContext(useDataContext);
  console.log(contextData);
  const imagePicker = (id, defaultVal) => {
    const x = dataCircuits.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };

  return (
    <div>hello</div>
    // <div
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexWrap: 'nowrap',
    //   }}
    // >
    //   <img
    //     style={{
    //       width: 30,
    //       height: 'auto',
    //       marginRight: 10,
    //     }}
    //     src={`${imagePicker(
    //       nextRace.MRData.RaceTable.Races[0].Circuit.circuitId,
    //       'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
    //     )}`}
    //     alt=""
    //   />
    //   <span>
    //     <p>{nextRace.MRData.RaceTable.Races[0].raceName}</p>
    //   </span>
    // </div>
  );
};

export default NextRace;
