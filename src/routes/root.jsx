import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div id="root-component">
      <div id="header">
        <h1>
          <NavLink to="/">Pablo Munoz-Evers</NavLink>
        </h1>
        <nav>
          <ul id="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/writing">Writing</NavLink>
            </li>
            <li>
              <NavLink to="/acting">Acting</NavLink>
            </li>
            <li>
              <NavLink to="/coding">Coding</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
