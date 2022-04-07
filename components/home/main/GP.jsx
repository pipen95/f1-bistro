import Standings from './standings/Standings';
import { useContext } from 'react';
import Context from './../../../components/Context';

function GP() {
  const { raceResults } = useContext(Context);
  if (!raceResults) return <p>No profile data</p>;

  return (
    <div className="GP">
      <div className="Title-GP text-center">
        <h2>{raceResults.MRData.RaceTable.Races[0].raceName} results</h2>
      </div>
      <Standings data={raceResults} />
    </div>
  );
}

export default GP;
