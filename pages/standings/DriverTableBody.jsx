import useSWR from 'swr';
import Loader from '../../components/ui/Loader';

const DriverTableBody = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  function useDriver(url) {
    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
      driverData: data,
      isDriverLoading: isLoading,
      isDriverError: error,
    };
  }
  function useResult(url) {
    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
      resultData: data,
      isResultLoading: isLoading,
      isResultError: error,
    };
  }

  const { driverData, isDriverLoading } = useDriver(
    `https://ergast.com/api/f1/current/driverStandings.json`
  );
  const { resultData, isResultLoading } = useResult(
    `https://ergast.com/api/f1/current/results.json?limit=500`
  );

  let driverStandingsArr = [];
  let arrDriverPoints = [];
  let arrRacesCounter;

  if (driverData) {
    driverStandingsArr =
      driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    arrDriverPoints = driverStandingsArr.reduce(
      (acc, cur) => ({ ...acc, [cur.Driver.driverId]: [] }),
      {}
    );
  }

  if (resultData) {
    arrDriverPoints = driverStandingsArr.reduce(
      (acc, cur) => ({ ...acc, [cur.Driver.driverId]: [] }),
      {}
    );
    const racesResults = resultData.MRData.RaceTable.Races;
    const arrRaces = racesResults.map(({ Results }) => Results);
    arrRacesCounter = arrRaces.length;
    for (let [i, race] of arrRaces.entries()) {
      for (let el of race) {
        let id = el.Driver.driverId;
        arrDriverPoints[id].push({ round: i, points: el.points });
      }
    }
  }

  const driverCB = (driver) => {
    let arrInitPoints = [];

    for (let i = 0; i < arrRacesCounter; i++) {
      arrInitPoints.push('-');
    }

    const scoreDriver = arrDriverPoints[driver];
    for (let el of scoreDriver) {
      if (el.points >= 0) arrInitPoints.splice(el.round, 1, el.points);
    }

    return arrInitPoints.map((el) => <td>{el}</td>);
  };

  // if (isDriverLoading && isResultLoading) return <Loader />;

  return (
    <tbody>
      {driverData &&
        resultData &&
        driverStandingsArr.map((driver) => (
          <tr>
            <td className="flex items-center">
              <img
                className="loserDriverImage mr-1"
                alt=""
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/${driver.Driver.familyName}.png`}
              />
              <span>{driver.Driver.familyName}</span>
            </td>

            {driverCB(driver.Driver.driverId)}

            <td>{driver.points}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default DriverTableBody;
