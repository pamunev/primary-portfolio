import { NavLink } from "react-router-dom";

function Writing() {
  return (
    <div>
      <p>
        Here goes my two writing links, at least. Copywriting and playwriting. I
        need to figure out a way to have a navlink within the navlink. Like a
        dropdown navlink, or a hover within a navlink. It might be a good idea
        to have a writing landing page, though, with links to all my different
        writing pages in this site.
      </p>
      <p>
        Whatever the case, the buttons should go here. I can figure out the
        dropdown menu stuff later.
      </p>
      <NavLink to="/content-creation">Content Creation</NavLink>
      <NavLink to="/playwriting">Playwriting</NavLink>
    </div>
  );
}

export default Writing;
