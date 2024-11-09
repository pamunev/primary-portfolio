import Button from "./Button";

function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    const section = document.querySelector(`#section-${event.target.id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="app-header">
      <h3>Pablo Munoz-Evers | Software Developer</h3>
      <div>
        <ul className="app-navigation">
          <li>
            <Button
              text="About"
              sectionId="about"
              onClick={(event) => handleClick(event)}
            />
          </li>
          <li>
            <Button
              text="Code"
              sectionId="code"
              onClick={(event) => handleClick(event)}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
