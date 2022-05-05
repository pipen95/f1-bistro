import DriverDrop from './DriverDrop';

const Track = () => {
  return (
    <div className="Track">
      <div className="Title">
        <div className="box">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
      </div>
      <div className="Finish"></div>
      <div className="Slots">
        <div className="Slots__item">
          <p className="text-center">#1</p>
          <DriverDrop />
          <div className="Slots__bonus">
            <div className="Slots__bonus__circle">
              <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div>
            </div>
            <div className="Slots__bonus__circle">
              {/* <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div> */}
            </div>
            <div className="Slots__bonus__circle">
              {/* <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="Slots__item" style={{ marginTop: '5rem' }}>
          <p className="text-center">#2</p>
          <div className="Slots__drivers">
            <div className="Slots__drivers__circle">
              {/* <div className="Drivers__item">
                <img
                  src="/img/pierre-penel.jpg"
                  alt="Name pic"
                  className="Drivers__img"
                />
              </div> */}
            </div>
          </div>
          <div className="Slots__bonus">
            <div className="Slots__bonus__circle">
              <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div>
            </div>
            <div className="Slots__bonus__circle">
              {/* <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div> */}
            </div>
            <div className="Slots__bonus__circle">
              {/* <div className="Bonus__item">
                <img
                  src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/Russell.png"
                  alt="Name pic"
                  className="Bonus__img"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Submit center">
        <a href="#" className="btn btn--blue">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Track;
