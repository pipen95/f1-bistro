import Table from './Table';
import { useState, useEffect } from 'react';

function Standings() {
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

  if (isLoading)
    return (
      <div className="Standings">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    );

  if (!data) return <p>No profile data</p>;

  return (
    <div className="Standings">
      <Table data={data} />
    </div>
  );
}

export default Standings;
