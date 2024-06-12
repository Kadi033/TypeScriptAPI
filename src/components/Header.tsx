import { NavLink } from "react-router-dom";
import ts from "../assets/ts.avif";
function Header() {
  return (
    <div className="flex items-center justify-between ml-8 mr-8 h-[10vh]">
      <img src={ts} alt="" className=" w-[74px]"/>
      <nav className="flex gap-16">
        <NavLink to="/" className="nav-link ">
          <p>Home</p>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <p>About</p>
        </NavLink>
        <NavLink to="/gallery" className="nav-link">
          <p>Gallery</p>
        </NavLink>
      </nav>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GET STARDTED</button>
    </div>
  );
}

export default Header;
