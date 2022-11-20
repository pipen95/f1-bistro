const TableBody = ({ data }) => {
  console.log(data);
  const driverStandingsArr = data[0][0].DriverStandings;
  return (
    <tbody>
      {driverStandingsArr.map((driver) => (
        <tr>
          <td>
            <img
              className="loserDriverImage"
              alt=""
              src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/${driver.Driver.familyName}.png`}
            />
            {driver.Driver.familyName}
          </td>

          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>
          <td>l</td>

          <td>{driver.points}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
