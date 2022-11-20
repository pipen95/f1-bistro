import TableBody from './TableBody';
import TableHead from './TableHead';

const Standings = ({ driverStandings, allResults }) => {
  const driverStandingsArr =
    driverStandings.MRData.StandingsTable.StandingsLists;
  const racesResults = allResults.MRData.RaceTable.Races;
  const racesId = allResults.MRData.RaceTable.Races.map((el) =>
    el.Circuit.circuitId.substring(0, 3).toUpperCase()
  );

  return (
    <div className="Standings flex flex-col">
      <div className="Standings Standings_header flex justify-between">
        <h2 className="m-0">Standings</h2>
        <div className="flex align-self-center">Players/Drivers</div>
      </div>
      <div className="Standings Standings_table">
        <table>
          <TableHead data={racesId} />
          <TableBody data={[driverStandingsArr, racesResults]} />
        </table>
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://ergast.com/api/f1/current/driverStandings.json`
  );
  const driverStandings = await res.json();

  const res2 = await fetch(
    `https://ergast.com/api/f1/current/results.json?limit=500`
  );
  const allResults = await res2.json();

  // Pass data to the page via props
  return { props: { driverStandings, allResults } };
}

export default Standings;
