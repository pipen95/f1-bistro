import retiredDrivers from '../../../../data/data_retired';
import TableRow from './TableRow';
import Podium from './Podium';

const Table = ({ data }) => {
  const results = data.MRData.RaceTable.Races[0].Results;
  const filteredDrivers = results.filter(
    (el) => !retiredDrivers.includes(el.Driver.driverId)
  );

  const driversItems = filteredDrivers
    .slice(3)
    .map((driver, idx) => <TableRow driver={driver} key={idx} />);

  const podiumDrivers = filteredDrivers.slice(0, 3);

  return (
    <>
      <Podium data={podiumDrivers} />
      <div className="Table table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Pos</th>
              <th></th>
              <th className="text-left">Name</th>
              <th className="text-left">Team</th>
              <th className="text-left">Pts</th>
            </tr>
          </thead>
          <tbody>{driversItems}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
