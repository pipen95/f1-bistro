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
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[1].Driver.FamilyName}Full.png`}
              />
            </div>

            <div>
              <img
                style={{ left: '34%', height: 250, zIndex: '6' }}
                className="homedriverImage"
                alt={`${data[0].Driver.FamilyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[0].Driver.FamilyName}Full.png`}
              />
            </div>

            <div>
              <img
                style={{ left: '64%' }}
                className="homedriverImage"
                alt={`${data[2].Driver.FamilyName}`}
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/${data[2].Driver.FamilyName}Full.png`}
              />
            </div>
          </div>
          <div className="topscorerboxwrapper">
            <div className="topscorerbox">
              <div className="mainPoints" id="HighDriPoints2">
                {data[1].points}
              </div>
            </div>
            <div className="topscorerbox" id="biggestFigure">
              <div className="mainPoints" id="HighDriPoints1">
                {data[0].points}
              </div>
            </div>
            <div className="topscorerbox">
              <div className="mainPoints" id="HighDriPoints3">
                {data[2].points}
              </div>
            </div>
          </div>
        </div>
        <div className="Cta center u-margin-top-small u-margin-bottom-small">
          <a href="#" className="btn-text nowrap">
            View all drivers stats →
          </a>
        </div>
      </div>
    );
  }
}

export default Podium;
