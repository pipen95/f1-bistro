import Link from 'next/link';
import Logout from './Icons';
import { useDispatch } from 'react-redux';
import { logout, reset } from 'features/auth/authSlice';
import { resetUser } from 'features/user/userSlice';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const DropdownMenu = () => {
  // REDUX SETUP
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetUser());
    router.push(`/`);
  };

  const DropdownProfile = ({ children }) => {
    return (
      <Link href="/profile">
        <a href>
          <div className="dropdown__item">
            <img
              className="dropdown__img"
              src={
                userData
                  ? `http://localhost:3001/public/img/users/${userData.photo}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
              }
            />
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
