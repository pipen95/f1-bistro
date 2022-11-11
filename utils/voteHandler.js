import { toast } from 'react-toastify';

const voteDestructure = ({ bonus, drivers }) => {
  let bonusOrphan = false;

  const driversList = drivers.map(({ id, name, location }) => {
    if (location !== 'side') {
      var driverLoc = location.slice(6);
      let bonusFiltered = [];

      bonus.filter(({ text, location }) => {
        let bonusLoc = location.slice(5, 6);
        if (location !== 'side') {
          if (bonusLoc === driverLoc) {
            bonusFiltered.push(text);
          }
        }
      });

      return { id, name, position: driverLoc, bonus: bonusFiltered };
    } else {
      return { id, name, position: 0, bonus: [] };
    }
  });

  const filterDriversList = driversList.filter((el) => el.position !== 0);
  const sortedDriversList = filterDriversList.sort(
    (a, b) => a.position - b.position
  );
  let orphan = bonus.filter(({ location }) => location !== 'side');

  if (orphan.length > 0) {
    const orphanLoc = orphan.map(({ location }) => location.slice(5, 6));
    const driverLoc = sortedDriversList.map(({ position }) => position);
    const match = driverLoc.some((el) => orphanLoc.includes(el));

    if (!match) {
      bonusOrphan = true;
    }
  }

  if (bonusOrphan === false) {
    return { data: sortedDriversList, pass: true };
  } else {
    toast.error(
      `A bonus must be asssociated with a driver! You can't save this selection.`
    );
    return { pass: false };
  }
};

const voteRestructure = ({ vote }) => {
  let bonus = [];
  let drivers = [];

  for (let driver of vote) {
    drivers.push({
      name: driver.name,
      id: driver.id,
      location: `driver${driver.position}`,
    });

    for (const [i, el] of driver.bonus.entries()) {
      if (el) {
        const switchId = (el) => {
          let id;
          switch (el) {
            case 'FL':
              id = 'fastest_lap';
              break;
            case 'OK':
              id = 'overtake_king';
              break;
            case 'DOD':
              id = 'driver_day';
              break;
            // code block
          }
          return id;
        };

        bonus.push({
          id: switchId(el),
          text: el,
          location: `bonus${driver.position}-${i}`,
        });
      }
    }
  }
  return { bonus, drivers };
};

export { voteRestructure, voteDestructure };
