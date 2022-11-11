import NextRace from '../../components/ui/NextRace';
import Timer from './../../components/ui/Timer';

const Top = () => {
  return (
    <div className="Top">
      <div className="Title">
        <div className="Title__box Title__box--gp">
          <NextRace />
        </div>
        <div className="Title__box Title__box--title">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
        <div className="Title__box Title__box--timer">
          <Timer />
        </div>
      </div>
      <div className="Finish"></div>
    </div>
  );
};

export default Top;
