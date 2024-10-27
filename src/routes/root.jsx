import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div id="header">
        <h1>
          <NavLink to="/">Pablo Munoz-Evers</NavLink>
        </h1>
        <ul id="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Writing</NavLink>
          </li>
          <li>
            <NavLink>Acting</NavLink>
          </li>
          <li>
            <NavLink>Coding</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
