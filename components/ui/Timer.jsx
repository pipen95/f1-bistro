import { useEffect, useMemo, useState, useContext } from 'react';
import { f1ApiContext } from 'context/Context';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = () => {
  const { nextRace } = useContext(f1ApiContext);
  const deadline = nextRace.data.MRData.RaceTable.Races[0].date;
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>
        <strong>Betting&nbsp;ends&nbsp;in:</strong>
      </p>

      <div className="flex">
        {Object.entries({
          Days: time / DAY,
          Hrs: (time / HOUR) % 24,
          Min: (time / MINUTE) % 60,
          Sec: (time / SECOND) % 60,
        }).map(([label, value]) => (
          <div key={label} className="col-4">
            <div className="box">
              <p>
                {`${Math.floor(value)}`.padStart(2, '0')} {`${label}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timer;
