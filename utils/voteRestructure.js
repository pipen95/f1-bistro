import { toast } from 'react-toastify';

const voteRestructure = ({ bonus, drivers }) => {
  let bonusOrphan = false;

  const driversList = drivers.map(({ id, location }) => {
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

      return { id, position: driverLoc, bonus: bonusFiltered };
    } else {
      return { id, position: 0, bonus: [] };
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

export default voteRestructure;
