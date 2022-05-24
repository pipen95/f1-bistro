import NextRace from '../home/side/NextRace';
import { useContext } from 'react';
import Context from './../Context';

const Top = () => {
  const { nextRace } = useContext(Context);
  console.log(nextRace);
  return (
    <div className="Top">
      <div className="Title">
        <div className="Title__box Title__box--gp">
          <NextRace data={nextRace} />
        </div>
        <div className="Title__box Title__box--title">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
        <div className="Title__box Title__box--timer">
          <p>
            <strong>
              Betting&nbsp;ends&nbsp;in:
              1&nbsp;days&nbsp;4&nbsp;hours&nbsp;30&nbsp;mins
            </strong>
          </p>
        </div>
      </div>
      <div className="Finish"></div>
    </div>
  );
};

export default Top;
