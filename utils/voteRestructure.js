const voteRestructure = ({ bonus, drivers }) => {
  const driversList = drivers.map(({ id, location }) => {
    if (location !== 'side') {
      var driverLoc = location.slice(6);

      let bonusFiltered = [];
      bonus.filter(({ text, location }) => {
        let bonusLoc = location.slice(5, 6);
        if (location !== 'side' && bonusLoc === driverLoc) {
          bonusFiltered.push(text);
        }
      });

      return { id, position: driverLoc, bonus: bonusFiltered };
    } else {
      return { id, position: 0, bonus: [] };
    }
  });
  return driversList;
};

export default voteRestructure;

// Output
// vote: [{
//         "id": "albon",
//         "position": 10,
//         "bonus":[dod,ok,fl]

//     }]

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
