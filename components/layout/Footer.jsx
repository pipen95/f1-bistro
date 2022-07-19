const Menu = () => {
  return (
    <footer className="footer">
      <div className="Links footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              Acceuil
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              A propos
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              FAQ
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Contact
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="Logo">
        <img
          src="/img/check-chair-blue-volant-bis.png"
          alt="logo"
          className="footer__logo"
        />
      </div>

      <div className="Legal">
        <p className="footer__copyright">
          This website is unofficial and is not associated in any way with the
          Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD
          CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula
          One Licensing&nbsp;B.V.
        </p>
      </div>
    </footer>
  );
};

export default Menu;
