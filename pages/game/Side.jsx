import { useContext, useState } from 'react';
import { gameContext } from './context/Context';
import Driver from './Driver';
import Bonus from './Bonus';
import actionsTypes from '././types/actions';
import Modal from 'components/ui/Modal';
import { f1ApiContext } from 'context/Context';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const Side = ({ isAdminOpen, setAdminOpen, setAdminData }) => {
  // REDUX
  const { userData } = useSelector((state) => state.user);
  const { nextRace } = useContext(f1ApiContext);
  const { state, dispatch, handleSave } = useContext(gameContext);
  const [isOpen, setIsOpen] = useState(false);

  const yearOptions = [{ value: '2022', label: '2022', name: 'year' }];

  const raceOptions = [
    { value: 'yas_marina', label: 'Abu Dhabi GP', name: 'race' },
    { value: 'interlagos', label: 'Bazil GP', name: 'race' },
  ];

  const handleChange = (e) => {
    const { name, value } = e;
    setAdminData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    <>
      <div className="Selection">
        <div className="Rules text-center">
          <h3>
            Make your bets before the
            <br />
            {nextRace.data.MRData.RaceTable.Races[0].raceName}
          </h3>
          <div>
            ➡️
            <a
              href="#"
              className="btn-text nowrap"
              onClick={() => setIsOpen(true)}
            >
              Check out the rules
            </a>
            ⬅️
          </div>
        </div>
        <div className="Choices-wrapper">
          <div div className="Choices">
            <div className="Drivers">
              <div>
                <h4>Drivers</h4>
                <div className="Drivers__box">{driversItems}</div>
              </div>
            </div>
            <div className="Bonus">
              <div>
                <h4>Bonus</h4>
                <div className="Bonus__box">{bonusItems}</div>
              </div>
            </div>
            <div className="Actions">
              <div>
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
              {userData && userData.role === 'admin' && (
                <div className="admin-results">
                  <h4>Admin Only</h4>
                  <div className="Actions__box">
                    <div className="Actions__item">
                      <input
                        type="checkbox"
                        id="results"
                        name="results"
                        value={isAdminOpen}
                        onChange={() => setAdminOpen((current) => !current)}
                      />
                      &nbsp;Enter results
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {isAdminOpen && (
            <div className="Admin">
              <div className="Admin__choices">
                <Select
                  name="year"
                  options={yearOptions}
                  className="select select--left"
                  placeholder="Year"
                  onChange={(e) => handleChange(e)}
                />
                <Select
                  name="race"
                  options={raceOptions}
                  className="select select--right"
                  placeholder="Race"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h4>Rules:</h4>
        <ol className="mb-2">
          <li>
            Drag and Drop the <strong>Drivers</strong> from the list below into
            the Grid slots on the left.
          </li>
          <li>
            You can make <strong>Bonus</strong> points for special
            accomplishemnts. Ex: fastest lap, driver of the day, best
            qualification etc.
          </li>

          <li>You can change your vote up 15 min to before the&nbsp;GP.</li>
        </ol>

        <h4>Points:</h4>
        <table style={{ textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default Side;
