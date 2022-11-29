import Link from 'next/link';

const Podium = ({ data }) => {
  if (!data[0]) {
    return null;
  } else {
    return (
      <div className="Podium">
        <div className="Top3 topscorerboxwrapper">
          <div className="card">
            <div className="driverImg driverImg--2">
              <img
                alt={`${data[1].Driver.FamilyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[1].Driver.familyName}Full.png`}
              />
            </div>
            <div
              className={`card__side  card__side--front card__side--front--${data[1].Constructor.constructorId.toLowerCase()}`}
            >
              <div
                className={`card__picture card__picture--${data[1].Constructor.constructorId.toLowerCase()}`}
              ></div>
              <h4
                className={`card__heading card__heading--${data[1].Constructor.constructorId.toLowerCase()}`}
              >
                <span
                  className={`card__heading-span card__heading-span--${data[1].Constructor.constructorId.toLowerCase()}`}
                >
                  2<small>nd</small>
                </span>
              </h4>
            </div>
            <div
              className={`card__side card__side--back card__side--back--${data[1].Constructor.constructorId.toLowerCase()}`}
            >
              <p>{`${data[1].Driver.givenName}\u00a0${data[1].Driver.familyName}`}</p>
              <p className="card__side--back-points">
                {data[1].points}&nbsp;pts
              </p>
              <p>Quali Pos: {data[1].grid}</p>
            </div>
          </div>
          <div className="card" id="winner">
            <div className="driverImg driverImg--1">
              <img
                alt={`${data[0].Driver.familyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[0].Driver.familyName}Full.png`}
              />
            </div>
            <div
              className={`card__side  card__side--front card__side--front--${data[0].Constructor.constructorId.toLowerCase()}`}
              id="side-winner"
            >
              <div
                className={`card__picture card__picture--${data[0].Constructor.constructorId.toLowerCase()}`}
                style={{ height: '12rem' }}
              ></div>
              <h4
                className={`card__heading card__heading--${data[0].Constructor.constructorId.toLowerCase()}`}
              >
                <span
                  className={`card__heading-span card__heading-span--${data[0].Constructor.constructorId.toLowerCase()}`}
                  id="heading-winner"
                >
                  1<small>st</small>
                </span>
              </h4>
            </div>

            <div
              className={`card__side  card__side--back  card__side--back--${data[0].Constructor.constructorId.toLowerCase()}`}
              id="side-winner"
            >
              <p>{`${data[0].Driver.givenName}\u00a0${data[0].Driver.familyName}`}</p>
              <p className="card__side--back-points">
                {data[0].points}&nbsp;pts
              </p>
              <p>Quali Pos: {data[0].grid}</p>
            </div>
          </div>
          <div className="card">
            <div className="driverImg driverImg--3">
              <img
                alt={`${data[2].Driver.FamilyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[2].Driver.familyName}Full.png`}
              />
            </div>
            <div
              className={`card__side  card__side--front card__side--front--${data[2].Constructor.constructorId.toLowerCase()}`}
            >
              <div
                className={`card__picture card__picture--${data[2].Constructor.constructorId.toLowerCase()}`}
              ></div>
              <h4
                className={`card__heading card__heading--${data[2].Constructor.constructorId.toLowerCase()}`}
              >
                <span
                  className={`card__heading-span card__heading-span--${data[2].Constructor.constructorId.toLowerCase()}`}
                >
                  3<small>rd</small>
                </span>
              </h4>
            </div>
            <div
              className={`card__side card__side--back card__side--back--${data[2].Constructor.constructorId.toLowerCase()}`}
            >
              <p>{`${data[2].Driver.givenName}\u00a0${data[2].Driver.familyName}`}</p>
              <p className="card__side--back-points">
                {data[2].points}&nbsp;pts
              </p>
              <p>Quali Pos: {data[2].grid}</p>
            </div>
          </div>
        </div>
        <div className="Cta center u-margin-top-small u-margin-bottom-small">
          <Link href="/standings">
            <a className="btn-text nowrap">View players standings </a>
          </Link>
        </div>
      </div>
    );
  }
};

export default Podium;
