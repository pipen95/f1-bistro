import DriverTableBody from './DriverTableBody';
import TableHead from './TableHead';

const Standings = () => {
  return (
    <div className="Standings flex flex-col">
      <div className="Standings Standings_header flex justify-between">
        <h2 className="m-0">Standings</h2>
        <div className="flex align-self-center">Players/Drivers</div>
      </div>
      <div className="Standings Standings_table">
        <table>
          <TableHead />
          <DriverTableBody />
        </table>
      </div>
    </div>
  );
};

export default Standings;
