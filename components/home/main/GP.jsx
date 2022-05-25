import Standings from './standings/Standings';
import { useContext } from 'react';
import { f1ApiContext } from './../../../components/Context';

function GP() {
  const { raceResults } = useContext(f1ApiContext);
  if (!raceResults) return <p>No profile data</p>;

  return (
    <div className="GP">
      <div className="Title-GP text-center">
        <h2>{raceResults.data.MRData.RaceTable.Races[0].raceName} results</h2>
      </div>
      <Standings data={raceResults.data} />
    </div>
  );
}

export default GP;
