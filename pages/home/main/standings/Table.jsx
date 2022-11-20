import dataTeams from 'data/data_teams.json';

const Table = ({ data }) => {
  const imagePicker = (id, defaultVal) => {
    const x = dataTeams.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };

  if (!data) return null;
  return (
    <div className="Table table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Pos</th>
            <th></th>
            <th className="left">Name</th>
            <th className="left">Team</th>
            <th className="left">Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((driver) => (
            <tr>
              <th>{driver.position}</th>
              <td>
                <img
                  className="loserDriverImage"
                  alt=""
                  src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/${driver.Driver.familyName}.png`}
                />
              </td>
              <td>{`${driver.Driver.givenName}\u00a0${driver.Driver.familyName}`}</td>
              <td className="team-box">
                <img
                  className="rivalTeam"
                  alt=""
                  src={`${imagePicker(
                    driver.Constructor.constructorId,
                    'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
                  )}`}
                />{' '}
                {driver.Constructor.name}
              </td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
