import { useState, useEffect } from 'react';
import dataCircuits from '../../../data/data_circuits.json';
const Message = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://ergast.com/api/f1/current/next.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const imagePicker = (id, defaultVal) => {
    const x = dataCircuits.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };

  if (data === null) {
    return <div className="Message">Loading...</div>;
  }

  return (
    <div className="Message u-center-text">
      <span>
        <p className="petit">Next round</p>
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <img
          style={{
            width: 30,
            height: 'auto',
            marginRight: 10,
          }}
          src={`${imagePicker(
            data.MRData.RaceTable.Races[0].Circuit.circuitId,
            'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
          )}`}
          alt=""
        />
        <span>
          <p>{data.MRData.RaceTable.Races[0].raceName}</p>
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <img
          style={{ width: 12, marginRight: 10 }}
          src="https://www.f1fantasytracker.com/Images/Icons/calendar.png"
          alt=""
        />
        <span>
          <p className="petit">{data.MRData.RaceTable.Races[0].date}</p>
        </span>
      </div>
      <a href="#" className="btn btn--blue" style={{ marginTop: '1rem' }}>
        Play <span>♤</span>
      </a>
    </div>
  );
};

export default Message;
