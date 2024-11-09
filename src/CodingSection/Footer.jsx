import github from "../assets/github-logo.svg";
import linkedin from "../assets/linkedin-logo-svgrepo-com.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        Copyright 2024 © Pablo Munoz-Evers. Created with React and CSS -{" "}
        <a
          href="https://github.com/pamunev/pme-portfolio-site-2.0"
          target="_blank"
          rel="noreferrer"
        >
          view source code here.
        </a>
      </div>
      <hr />
      <div>
        <a
          title="LinkedIn"
          href="https://github.com/pamunev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub Icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/pablo-munoz-evers/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
