import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'products'}>Products</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'products/create'}>Create Product</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'products/basket'}>
            <img
              className="nav__item-img"
              src="shop-icon.png"
              alt="shop-icon"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
