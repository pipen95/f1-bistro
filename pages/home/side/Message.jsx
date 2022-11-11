import { useContext } from 'react';
import { f1ApiContext } from 'context/Context';
import Link from 'next/link';
import NextRace from '../../../components/ui/NextRace';
import DateRace from './DateRace';

const Message = () => {
  const { nextRace } = useContext(f1ApiContext);
  return (
    <div className="Message text-center">
      <span>
        <p className="petit">Next round</p>
      </span>
      <NextRace />
      <DateRace />
      <Link href="/game">
        <a className="btn btn--blue" style={{ marginTop: '1rem' }}>
          Play <span>🎲</span>
        </a>
      </Link>
    </div>
  );
};

export default Message;
