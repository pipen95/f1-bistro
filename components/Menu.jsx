const Menu = () => {
  return (
    <div className="Menu">
      <nav className="nav">
        <div className="nav__logo">
          <a href="/">
            <img
              src="/img/check-chair-blue-volant-bis.png"
              alt="logo"
              className="nav__logo--img"
            />
          </a>
          <a href="/">
            <h1 className="nowrap">F1 Bistro</h1>
          </a>
        </div>
        <div classeName="nav_container">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/standings" className="nav__link">
                Standings
              </a>
            </li>
            <li className="nav__item">
              <a href="/game" className="nav__link">
                Game
              </a>
            </li>
            <li className="nav__item">
              <a href="/chat" className="nav__link">
                Chat
              </a>
            </li>
            <li className="nav__item">
              <a href="/login" className="nav__link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
