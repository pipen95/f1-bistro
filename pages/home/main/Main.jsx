import Results from './standings/Results';
import { useContext } from 'react';
import { f1ApiContext } from 'context/Context';

function Main() {
  const { raceResults } = useContext(f1ApiContext);
  if (!raceResults) return <p>No profile data</p>;
  return (
    <div className="Main">
      <div className="GP">
        <div className="Title-GP text-center">
          <h2>{raceResults.data.MRData.RaceTable.Races[0].raceName} results</h2>
        </div>
        <Results data={raceResults.data} />
      </div>
    </div>
  );
}

export default Main;
