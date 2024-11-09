import pme from "../assets/pablo-profile-pic-resized.jpg";
import resume from "../assets/pme-se-resume-november.pdf";

function AboutSection() {
  return (
    <div className="content-section" id="section-about">
      <div className="content-header">About</div>
      <div className="content-body">
        <div className="content-flex-container">
          <img src={pme} alt="Pablo" className="profile-pic" />

          <p className="bio-paragraph">
            I’m a <strong>full-stack software developer</strong> living in the
            beautiful, blazing hot city of Austin, Texas. Aside from my
            proficiency in full-stack web development (
            <strong>React, Node.js</strong>, etc.), I’ve also developed strong
            skills in collaboration, communication, and quality,
            customer-centered product creation through a successful and
            dedicated career in education and social media marketing. I am also
            active in the Austin theatre scene as an actor and a playwright.
            <br />
            <br />
            Originally from Colombia, I have lived in 5 countries and love
            traveling around the world. I enjoy devising and building creative
            coding projects, and I spend a lot of my time learning new skills
            and concepts. I strive to continuously learn more ways to create
            software that I can be proud of.
            <br />
            <br />
            Currently, I am <b>available for hire or freelance work</b>. For
            inquiries regarding web development,{" "}
            <a href="mailto:pamunev@gmail.com">shoot me an email</a>. My resume
            is available{" "}
            <a href={resume} target="_blank" rel="noreferrer">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
