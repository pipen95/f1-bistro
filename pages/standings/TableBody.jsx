const TableBody = ({ data }) => {
  const driverStandingsArr = data[0][0].DriverStandings;
  const driverPoints = data[1];

  const driverData = (driver) => {
    let arrInitPoints = [];

    for (let i = 0; i < data[2]; i++) {
      arrInitPoints.push('-');
    }

    const scoreDriver = driverPoints[driver];
    for (let el of scoreDriver) {
      if (el.points >= 0) arrInitPoints.splice(el.round, 1, el.points);
    }

    return arrInitPoints.map((el) => <td>{el}</td>);
  };

  return (
    <tbody>
      {driverStandingsArr.map((driver) => (
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
      ))}
    </tbody>
  );
};

export default TableBody;
