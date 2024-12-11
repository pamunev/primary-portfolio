import { NavLink } from "react-router-dom";

function Writing() {
  return (
    <div id="section-writing">
      <h1 className="header-writing">Writing</h1>
      <hr className="hr-content" />
      <div className="subsection-writing">
        <h3>Content Creation</h3>
        <div className="section-description">
          <p>
            I created written content for small businesses accross the country
            during my time working as a content specialist at GoDaddy.
          </p>
          <p>
            I also wrote some articles for <em>The Vista Today</em> (formerly{" "}
            <em>Teravista Today</em>), a community magazine serving Teravista
            residents, and some blog posts for WanderThemes, a travel experience
            company.
          </p>
        </div>
        <NavLink to="/content-creation">
          <button>Click here for samples</button>
        </NavLink>
      </div>
      <p>
        I think I'll start with a landing page with accomplishments. A short
        highlight, like in Laura Neill's landing page. Under the section header:
        Playwriting. Then a link to that section.
      </p>
      <p>
        My highlights will include what I've won for boat play, dreams, and
        maybe one of the ones published in rio review. Maybe over and over
        again, since that was also selected for production in radiopidemic.
      </p>
      <p>
        Same with the content section. A summary of my experience with content
        creation.
      </p>
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
      <p>
        I think this is where I should send content job people. And then they
        can choose which version of my writing they want to see.
      </p>
      <p>Maybe I could include a blurb here, a summary of my achievements.</p>
      <div>
        <NavLink to="/playwriting">
          <button>Playwriting</button>
        </NavLink>
      </div>
      <p>I need to style these buttons.</p>
    </div>
  );
}

export default Writing;
