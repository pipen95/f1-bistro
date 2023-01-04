import { useState, useEffect } from 'react';
import useSWR from 'swr';

const DriverTableBody = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  function useDriver() {
    const { data, error, isLoading } = useSWR(
      `https://ergast.com/api/f1/current/driverStandings.json`,
      fetcher
    );

    return {
      driver: data,
      isDriverLoading: isLoading,
      isDriverError: error,
    };
  }
  function useResult() {
    const { data, error, isLoading } = useSWR(
      `https://ergast.com/api/f1/current/driverStandings.json`,
      fetcher
    );

    return {
      result: data,
      isResultLoading: isLoading,
      isResultError: error,
    };
  }

  const { driver, isDriverError, isDriverLoading } = useDriver(
    `https://ergast.com/api/f1/current/driverStandings.json`,
    fetcher
  );
  const { result } = useResult(
    `https://ergast.com/api/f1/current/results.json?limit=500`,
    fetcher
  );

  console.log(driver);
  console.log(result);

  // let driverStandingsArr = dataDriver.MRData.StandingsTable.StandingsLists;
  // let arrDriverPoints = driverStandingsArr.DriverStandings.reduce(
  //   (acc, cur) => ({ ...acc, [cur.Driver.driverId]: [] }),
  //   {}
  // );
  // console.log(arrDriverPoints);
  // const racesResults = allResults.MRData.RaceTable.Races;
  // const arrRaces = racesResults.map(({ Results }) => Results);
  // for (let [i, race] of arrRaces.entries()) {
  //   for (let el of race) {
  //     let id = el.Driver.driverId;
  //     arrDriverPoints[id].push({ round: i, points: el.points });
  //   }
  // }

  // const driverData = (driver) => {
  //   let arrInitPoints = [];

  //   for (let i = 0; i < data[2]; i++) {
  //     arrInitPoints.push('-');
  //   }

  //   const scoreDriver = arrDriverPoints[driver];
  //   for (let el of scoreDriver) {
  //     if (el.points >= 0) arrInitPoints.splice(el.round, 1, el.points);
  //   }

  //   return arrInitPoints.map((el) => <td>{el}</td>);
  // };

  return (
    <tbody>
      {/* {driverStandingsArr &&
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

            {driverData(driver.Driver.driverId)}

            <td>{driver.points}</td>
          </tr>
        ))} */}
    </tbody>
  );
};

export default DriverTableBody;
