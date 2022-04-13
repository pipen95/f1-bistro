import Link from 'next/link';
import { useContext } from 'react';
import Context from './Context';
import Logout from './Icons';

function DropdownMenu() {
  const { logOut } = useContext(Context);
  function DropdownProfile(props) {
    return (
      <Link href="/profile">
        <a>
          <div className="dropdown__item">
            <img className="dropdown__img" src="/img/pierre-penel.jpg" />
            {props.children}
          </div>
        </a>
      </Link>
    );
  }

  function DropdownItem(props) {
    return (
      <a onClick={logOut}>
        <div className="dropdown__item">
          <span className="dropdown__icon">{props.icon}</span>
          {props.children}
        </div>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownProfile>My profile</DropdownProfile>
      <hr className="hr" />
      <DropdownItem icon={<Logout />}>Logout</DropdownItem>
    </div>
  );
}

export default DropdownMenu;
