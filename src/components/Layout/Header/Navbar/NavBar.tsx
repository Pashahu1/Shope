import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'products'}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'create-product'}>Create Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'product-card'}>Product Card</NavLink>
        </li>
      </ul>
    </nav>
  );
};
