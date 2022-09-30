const voteRestructure = ({ bonus, drivers }) => {
  let vote = [];

  const newDivers = drivers.map(({ id, location }) => {
    if (location !== 'side') {
      return { id, position: location.slice(6), bonus: [] };
    }
  });

  console.log(newDivers);
};

export default voteRestructure;

//   drivers:[
//     {
//         "name": "Albon",
//         "id": "albon",
//         "location": "side"
//     },
// ]
//   bonus: [
//     {
//         "id": "fastest_lap",
//         "location": "side",
//         "text": "FL"
//     },
//     {
//         "id": "overtake_king",
//         "location": "side",
//         "text": "OK"
//     },
//     {
//         "id": "driver_day",
//         "location": "side",
//         "text": "DOD"
//     }
// ]
