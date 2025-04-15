import { ControlPanel } from "./ControlPanel/ControlPanel";
import "./Header.scss";
import { NavBar } from "./Navbar/NavBar";

export const Header = () => {
  return (
    <header className='header'>
      <ControlPanel />
      <NavBar />
    </header>
  );
};
