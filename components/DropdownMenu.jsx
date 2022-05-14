import Link from 'next/link';
import Logout from './Icons';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../auth/authSlice';
import { useRouter } from 'next/router';

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    router.push(`/`);
  };

  const DropdownProfile = ({ children }) => {
    return (
      <Link href="/profile">
        <a href>
          <div className="dropdown__item">
            <img className="dropdown__img" src="/img/pierre-penel.jpg" />
            {children}
          </div>
        </a>
      </Link>
    );
  };

  const DropdownItem = ({ icon, children }) => {
    return (
      <a onClick={logOut}>
        <div className="dropdown__item">
          <span className="dropdown__icon">{icon}</span>
          {children}
        </div>
      </a>
    );
  };

  return (
    <div className="dropdown">
      <DropdownProfile>My profile</DropdownProfile>
      <hr className="hr" />
      <DropdownItem icon={<Logout />}>Logout</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
