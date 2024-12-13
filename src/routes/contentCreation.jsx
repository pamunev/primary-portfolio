import carDealership from "../assets/car-dealership.png";
import cocktail from "../assets/cocktail.png";
import landscaping from "../assets/landscaping.png";
import hardwood from "../assets/hardwood.png";

function ContentCreation() {
  return (
    <div className="writing-content-section">
      <h1 className="header-content-creation">Content Creation</h1>
      <hr className="hr-content" />
      <div className="social-subsection">
        <h2 className="subheader-content-creation">Social Media Posts</h2>
        <p className="section-description">
          Here are some sample versions of social media posts that I created and
          published for small businesses accross the country during my time
          working at GoDaddy.
          <p>
            I replaced the original images with stock photos, since GoDaddy
            holds the copyright for the originals.
          </p>
        </p>
        <div className="social-media-posts">
          <div className="captioned-post">
            <p className="caption-header">Car Dealership</p>
            <img alt="Car Dealership" src={carDealership} />
            <p className="caption">
              Still has that new website smell: [URL redacted]
            </p>
          </div>
          <div className="captioned-post">
            <p className="caption-header">Cocktail Bar</p>
            <img alt="Cocktail" src={cocktail} />
            <p className="caption">
              Anything worth doing is worth doing right.
            </p>
          </div>
          <div className="captioned-post">
            <p className="caption-header">Landscaping Company</p>
            <img alt="Landscaping" src={landscaping} />
            <p className="caption">Designing your personal paradise.</p>
          </div>
          <div className="captioned-post">
            <p className="caption-header">Flooring Company</p>
            <img alt="Hardwood Floors" src={hardwood} />
            <p className="caption">
              Even the most beautiful hardwood floors will show the marks of
              time. Let us rejuvenate yours.
            </p>
          </div>
        </div>
      </div>
      <div className="website-and-blog-subsection">
        <h2 className="subheader-content-creation">Website and Blog Content</h2>
        <p className="section-description">
          Here is some content I created for the website of WanderTHEMES, a
          travel experience company. The company's owner wanted a brief
          spotlight highlighting Japan as a travel destination, as well as a
          blog post about what [title] have in common.
        </p>
      </div>
    </div>
  );
}

export default ContentCreation;
