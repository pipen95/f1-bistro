import { useContext } from 'react';
import { gameContext } from './context/Context';
import Driver from './Driver';
import Bonus from './Bonus';
import actionsTypes from '././types/actions';

const Side = () => {
  const { state, dispatch, handleSave } = useContext(gameContext);
  const reset = () => {
    dispatch({
      type: actionsTypes.RESET,
    });
  };

  const filteredDrivers = state.drivers.filter((el) => el.location === 'side');

  const driversItems = filteredDrivers.map((el, i) => {
    return <Driver key={i} id={el.id} name={el.name} location={el.location} />;
  });

  const filteredBonus = state.bonus.filter((el) => el.location === 'side');

  const bonusItems = filteredBonus.map((el, i) => {
    return <Bonus key={i} id={el.id} location={el.location} text={el.text} />;
  });

  return (
    <div className="Selection">
      <div className="Rules">
        <h3 className="mb-2">Make your predections for the X Grand Prix</h3>
        <h4>Rules:</h4>
        <ol>
          <li>
            Drag and Drop the <strong>Drivers</strong> from the list below into
            the Grid slots on the left.
          </li>
          <li>
            You can make <strong>Bonus</strong> points for special
            accomplishemnts. Ex: fastest lap, driver of the day, best
            qualification etc.
          </li>
          <li>You can change your vote up 15min to before the&nbsp;GP.</li>
          <li>
            See how points are awarded
            <a href="#" className="btn-text nowrap">
              Click here.
            </a>
          </li>
        </ol>
      </div>
      <div div className="Choices">
        <div className="Drivers">
          <h4>Drivers</h4>
          <div className="Drivers__box">{driversItems}</div>
        </div>
        <div className="Bonus">
          <h4>Bonus</h4>
          <div className="Bonus__box">{bonusItems}</div>
        </div>
        <div className="Actions">
          <h4>Actions</h4>
          <div className="Actions__box">
            <div className="Actions__item">
              <a onClick={reset} className="btn btn--blue">
                Reset
              </a>
            </div>
            <div className="Actions__item">
              <a onClick={handleSave} className="btn btn--blue">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
