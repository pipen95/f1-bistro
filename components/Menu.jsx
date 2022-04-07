import Link from 'next/link';
import { useContext } from 'react';
import Context from './Context';

const Menu = () => {
  const { user, logOut } = useContext(Context);
  return (
    <div className="Menu">
      <nav className="nav">
        <div className="nav__logo">
          <Link href="/">
            <a>
              <img
                src="/img/check-chair-blue-volant-bis.png"
                alt="logo"
                className="nav__logo--img"
              />
            </a>
          </Link>

          <Link href="/">
            <a>
              <h1 className="nowrap nav__logo--title">F1 Bistro</h1>
            </a>
          </Link>
        </div>
        <div className="nav__container">
          <div className="nav__pages">
            {user.current ? (
              <ul className="nav__list" style={{ marginLeft: '1vw' }}>
                <li className="nav__item">
                  <Link href="/standings">
                    <a className="nav__link">Standings</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/game">
                    <a className="nav__link">Game</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/chat">
                    <a className="nav__link">Chat</a>
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          {user.current ? (
            <div className="nav__profile" onClick={logOut}>
              <div className="nav__profile--name">Pierre</div>
              <img
                src="/img/pierre-penel.jpg"
                alt="Profile pic"
                className="nav__profile--img"
              />
            </div>
          ) : (
            <div className="nav__login">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link href="/login">
                    <a className="nav__link">Login</a>
                  </Link>
                </li>
                <li className="nav__item" style={{ marginRight: '1rem' }}>
                  <Link href="/signup">
                    <a className="btn btn--white">Signup</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
