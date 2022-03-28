import Link from 'next/link';
const Menu = () => {
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
              <h1 className="nowrap">F1 Bistro</h1>
            </a>
          </Link>
        </div>
        <div className="nav__container">
          <div style={{ marginLeft: '1vw' }}>
            <ul className="nav__list">
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
          </div>

          <div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/login">
                  <a className="nav__link">Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
