import React from 'react';

function Podium({ data }) {
  if (!data[0]) {
    return null;
  } else {
    return (
      <div className="Podium">
        <div className="Top3">
          <div className="topscorerimgwrapper">
            <div>
              <img
                style={{ height: 225, left: '8%' }}
                className="homedriverImage"
                alt={`${data[1].Driver.FamilyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[1].Driver.familyName}Full.png`}
              />
            </div>

            <div>
              <img
                style={{ left: '34%', height: 250, zIndex: '6' }}
                className="homedriverImage"
                alt={`${data[0].Driver.familyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[0].Driver.familyName}Full.png`}
              />
            </div>

            <div>
              <img
                style={{ left: '64%' }}
                className="homedriverImage"
                alt={`${data[2].Driver.familyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[2].Driver.familyName}Full.png`}
              />
            </div>
          </div>
          <div className="topscorerboxwrapper">
            <div className="card">
              <div className="card__side  card__side--front  card__side--front-2">
                <div className="card__picture card__picture--2"></div>
                <h4 className="card__heading card__heading--2">
                  <span className="card__heading-span card__heading-span--2">
                    {data[1].points}&nbsp;pts
                  </span>
                </h4>
              </div>
              <div className="card__side  card__side--back  card__side--back-2">
                <p>{`${data[1].Driver.givenName}\u00a0${data[1].Driver.familyName}`}</p>
                <p>Quali Pos: {data[1].grid}</p>
                <p>Fastest Lap: {data[1].FastestLap.Time.time}</p>
              </div>
            </div>
            <div className="card" id="winner">
              <div
                className="card__side  card__side--front  card__side--front-1"
                id="side-winner"
              >
                <div className="card__picture card__picture--1"></div>
                <h4
                  className="card__heading card__heading--1"
                  id="heading-winner"
                >
                  <span className="card__heading-span card__heading-span--1">
                    {data[0].points}&nbsp;pts
                  </span>
                </h4>
              </div>
              <div
                className="card__side  card__side--back  card__side--back-1"
                id="side-winner"
              >
                <p>{`${data[0].Driver.givenName}\u00a0${data[0].Driver.familyName}`}</p>
                <p>Quali Pos: {data[0].grid}</p>
                <p>Fastest Lap: {data[0].FastestLap.Time.time}</p>
              </div>
            </div>
            <div className="card">
              <div className="card__side  card__side--front-bis  card__side--front-3">
                <div className="card__picture card__picture--3"></div>
                <h4 className="card__heading card__heading--3">
                  <span className="card__heading-span card__heading-span--3">
                    {data[2].points}&nbsp;pts
                  </span>
                </h4>
              </div>
              <div className="card__side  card__side--back  card__side--back-3">
                <p>{`${data[2].Driver.givenName}\u00a0${data[2].Driver.familyName}`}</p>
                <p>Quali Pos: {data[2].grid}</p>
                <p>Fastest Lap: {data[2].FastestLap.Time.time}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Cta center u-margin-top-small u-margin-bottom-small">
          <a href="#" className="btn-text nowrap">
            View all drivers stats
          </a>
        </div>
      </div>
    );
  }
}

export default Podium;
