import retiredDrivers from 'data/data_retired';
import Table from './Table';
import Podium from './Podium';

const Results = ({ data }) => {
  const results = data.MRData.RaceTable.Races[0].Results;
  if (!results) return null;
  const filteredDrivers = results.filter(
    (el) => !retiredDrivers.includes(el.Driver.driverId)
  );
  const driversItems = filteredDrivers.slice(3);

  const podiumDrivers = filteredDrivers.slice(0, 3);

  return (
    <div className="Results">
      <Podium data={podiumDrivers} />
      <Table data={driversItems} />
    </div>
  );
};

export default Results;
