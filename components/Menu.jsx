import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  // REDUX SETUP
  const { user } = useSelector((state) => state.auth);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen && setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setOpen]);
  // SHOW MENU
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
            {user ? (
              <ul className="nav__list" style={{ marginLeft: '1vw' }}>
                <li className="nav__item">
                  <Link href="/game">
                    <a className="nav__link">Game</a>
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          {user ? (
            <div
              className="nav__profile"
              ref={ref}
              onClick={() => setOpen(!open)}
            >
              <img
                src="/img/pierre-penel.jpg"
                alt="Profile pic"
                className="nav__profile--img"
              />
              {open && <DropdownMenu />}
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
