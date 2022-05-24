import { useContext } from 'react';
import Context from './../../Context';
import Link from 'next/link';
import NextRace from './NextRace';

const Message = () => {
  const { dataF1 } = useContext(Context);
  console.log(dataF1);
  return (
    <div>hello</div>
    // <div className="Message text-center">
    //   <span>
    //     <p className="petit">Next round</p>
    //   </span>
    //   <NextRace />
    //   <div
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       flexWrap: 'nowrap',
    //     }}
    //   >
    //     <img
    //       style={{ width: 12, marginRight: 10 }}
    //       src="https://www.f1fantasytracker.com/Images/Icons/calendar.png"
    //       alt=""
    //     />
    //     <span>
    //       <p className="petit">{nextRace.MRData.RaceTable.Races[0].date}</p>
    //     </span>
    //   </div>
    //   <Link href="/game">
    //     <a className="btn btn--blue" style={{ marginTop: '1rem' }}>
    //       Play <span>♤</span>
    //     </a>
    //   </Link>
    // </div>
  );
};

export default Message;
