import carDealership from "../assets/car-dealership.png";
import cocktail from "../assets/cocktail.png";
import landscaping from "../assets/landscaping.png";
import hardwood from "../assets/hardwood.jpg";

function ContentCreation() {
  return (
    <div>
      <h1 className="header-content-creation">Social Media Posts</h1>
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
        <p className="caption">Anything worth doing is worth doing right.</p>
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
          Even the most beautiful hardwood floors will show the marks of time.
          Let us rejuvenate yours.
        </p>
      </div>
    </div>
  );
}

export default ContentCreation;
