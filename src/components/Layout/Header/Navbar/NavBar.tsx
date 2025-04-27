import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { useSelector } from 'react-redux';

export const NavBar = () => {
  const shopingCart = useSelector((state: any) => state.shopingCart);
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'products'}>Products</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'products/basket'}>
            <img
              className="nav__item-img"
              src="shop-icon.png"
              alt="shop-icon"
            />
            {shopingCart.length > 0 && (
              <span className="nav__item--counter">{shopingCart.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
