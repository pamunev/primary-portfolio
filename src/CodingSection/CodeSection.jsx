import therapistSite from "../assets/therapist-website-screenshot-2.png";
import periodicTables from "../assets/patient-dashboard-screenshot.png";
import weLoveMovies from "../assets/WeLoveMovies-screenshot.png";
import patientDashboard from "../assets/patient-dashboard-screenshot.png";

function CodeSection() {
  return (
    <div
      className="content-section alternate-section-background"
      id="section-code"
    >
      <div className="content-header">Code</div>
      <div className="content-body">
        <div className="code-item">
          <img
            src={therapistSite}
            onClick={() =>
              window.open(
                "https://margot-therapist-website.vercel.app/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          />

          <p>
            I designed and developed this responsive{" "}
            <strong>website for a therapist's practice</strong> using React and
            vanilla CSS. I used Email.js for email functionality. Here's its{" "}
            <a
              href="https://github.com/pamunev/margot-therapist-website"
              target="_blank"
              rel="noreferrer"
            >
              code
            </a>
            , and here's the{" "}
            <a
              href="https://margot-therapist-website.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              deployed
            </a>{" "}
            version.
          </p>
        </div>
        <div className="code-item">
          <img
            src={periodicTables}
            onClick={() =>
              window.open(
                "https://periodic-tables-pamunev.vercel.app/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
            rel="noreferrer"
          />
          <div className="code-item-content">
            <p>
              <a
                href="https://github.com/pamunev/restaurant-reservation-app"
                target="_blank"
                rel="noreferrer"
              >
                Periodic Tables
              </a>{" "}
              is a full-stack reservation and table management system for
              restaurant employees to use. Built with React and Node + Express.
            </p>
            <p>
              Here's the{" "}
              <a
                href="https://periodic-tables-pamunev.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                deployed
              </a>{" "}
              version.{" "}
              <em>
                (Note: The application’s backend is hosted on Render with the
                database on ElephantSQL.{" "}
                <strong>A short delay in data loading may occur</strong> due to
                the deployment setup.)
              </em>
            </p>
          </div>
        </div>
        <div className="code-item">
          <img
            src={weLoveMovies}
            onClick={() =>
              window.open("https://welovemoviespamunev.vercel.app/", "_blank")
            }
            style={{ cursor: "pointer" }}
            rel="noreferrer"
          />
          <div className="code-item-content">
            <p>
              <a
                href="https://github.com/pamunev/we-love-movies-backend-capstone"
                target="_blank"
                rel="noreferrer"
              >
                WeLoveMovies
              </a>{" "}
              is the back-end of a movie website that allows users to search for
              and review their favorite movies. Built with Node + Express.{" "}
            </p>
            <p>
              Here's the{" "}
              <a
                href="https://welovemoviespamunev.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                deployed
              </a>{" "}
              version.{" "}
              <em>
                (Note: The application’s backend is hosted on Render with the
                database on ElephantSQL.{" "}
                <strong>A short delay in data loading may occur</strong> due to
                the deployment setup.)
              </em>
            </p>
          </div>
        </div>
        <div className="code-item">
          <img
            src={patientDashboard}
            onClick={() =>
              window.open(
                "https://patient-data-dashboard-pamunev.vercel.app/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
            rel="noreferrer"
          />
          <div className="code-item-content">
            <p>
              I developed my <strong>Patient Dashboard</strong> by converting an
              Adobe XD template to a responsive single-page application using
              React, CSS, and Chart.js. Here's its{" "}
              <a
                href="https://github.com/pamunev/patient-data-dashboard?tab=readme-ov-file"
                target="_blank"
                rel="noreferrer"
              >
                code
              </a>
              , and here's the{" "}
              <a
                href="https://patient-data-dashboard-pamunev.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                deployed
              </a>{" "}
              version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeSection;
