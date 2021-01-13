import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div className="p-2">
      <div className="text-bold">Testapp Menu</div>
      <ul>
        <li>
          <Link className="w-full border-t border-b text-blue-500 p-2 block" onClick={props.closeMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="w-full border-b text-blue-500 p-2 block" onClick={props.closeMenu} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
