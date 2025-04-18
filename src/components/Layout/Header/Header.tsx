import { NavLink } from 'react-router-dom';
import './Header.scss';
import { NavBar } from './Navbar/NavBar';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__home">
        <NavLink to={'/'}>
          <img className="header__logo" src="./home.png" alt="home" />
        </NavLink>
      </div>
      <NavBar />
    </header>
  );
};
