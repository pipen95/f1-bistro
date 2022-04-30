const Side = () => {
  return (
    <div div className="Choices">
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
          <li>You can change your vote up 15min to before the&nbsp;GP</li>
          <li>
            See how points are awarded
            <a href="#" className="btn-text nowrap">
              Click here.
            </a>
          </li>
        </ol>
      </div>
      <div className="Drivers">
        <h4>Drivers</h4>
        <div className="Drivers__box">
          <div className="Drivers__item">
            <img
              src="https://www.f1fantasytracker.com/Images/Drivers/Verstappen.png"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
          <div className="Drivers__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Drivers__img"
            />
          </div>
        </div>
      </div>
      <div className="Bonus">
        <h4>Bonus</h4>
        <div className="Bonus__box">
          <div className="Bonus__item">
            <img
              src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
              alt="Name pic"
              className="Bonus__img"
            />
          </div>
          <div className="Bonus__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Bonus__img"
            />
          </div>
          <div className="Bonus__item">
            <img
              src="/img/pierre-penel.jpg"
              alt="Name pic"
              className="Bonus__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
