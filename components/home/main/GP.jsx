import Standings from './standings/Standings';
import { useState, useEffect } from 'react';

function GP() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://ergast.com/api/f1/current/last/results.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="GP">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (!data) return <p>No profile data</p>;

  return (
    <div className="GP">
      <div className="Title-GP text-center">
        <h2>{data.MRData.RaceTable.Races[0].raceName} results</h2>
      </div>
      <Standings data={data} />
    </div>
  );
}

export default GP;
