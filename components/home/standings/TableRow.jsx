import React, { Component } from 'react';
import dataTeams from '../../../data/data_teams.json';
import dataDrivers from '../../../data/data_drivers.json';

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  countryPicker = (id, defaultVal) => {
    const x = dataDrivers.filter((el) => el.id === id);
    try {
      return x[0].country;
    } catch (e) {
      return defaultVal;
    }
  };

  imagePicker = (id, defaultVal) => {
    const x = dataTeams.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };

  render() {
    return (
      <>
        <tr>
          <th>{this.props.ranking.position}</th>
          <td>
            <a href={`${this.props.driver.url}`}>
              <img
                className="loserDriverImage"
                alt=""
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/${this.props.driver.FamilyName}.png`}
              />
            </a>
          </td>
          <td>{`${this.props.driver.GivenName}\u00a0${this.props.driver.FamilyName}`}</td>
          <td className="team-box">
            <img
              className="rivalTeam"
              alt=""
              src={`${this.imagePicker(
                this.props.constructor.constructorId,
                'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
              )}`}
            />{' '}
            {this.props.constructor.Name}
          </td>
          <td>{this.props.ranking.points}</td>
        </tr>
      </>
    );
  }
}

export default TableRow;
