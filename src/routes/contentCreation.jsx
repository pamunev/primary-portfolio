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
          Here is some website content I created for WanderTHEMES, a travel
          experience company. The company's owner wanted a brief spotlight
          highlighting Japan as a travel destination, as well as a blog post
          about what hiking in the Pyrenees, biking in Vietnam, and exploring
          the Colombian coffee region have in common.
        </p>
        <h3 className="piece-title-content-writing">
          <u>Destination Spotlight: Japan</u>
        </h3>
        <p className="section-description-center">
          Japan. Where tradition and modernity meet. Submerge yourself in the
          cultural wealth of a nation that remained untouched by the Western
          world for most of its history, and eventually put itself at the
          forefront of technological and cultural innovation. With breathtaking
          views both natural and manmade, Japan is an ideal place to visit in
          the spring and summer, when the cherry trees are in bloom and Mt. Fuji
          is at its most spectacular. Major cities like Tokyo present what may
          be, to a westerner, an altered, surreal vision of the modern age; an
          alternate universe. Visit ancient historical and spiritual sites,
          witness architecture unlike any other, delve into Japan’s amazing
          nightlife and restaurant culture, and so much more!
        </p>
        <p className="section-description-center-2">
          Contact us at WanderTHEMES and wander there!
        </p>
        <h3 className="piece-title-content-writing">
          <u>
            What do Hiking in the Pyrenees, Biking in Vietnam, and Exploring the
            Colombian Coffee Region Have in Common?
          </u>
        </h3>
        <p className="piece-title-description">
          <em>(Blog post)</em>
        </p>
        <p className="section-description">
          The Pyrenees, Vietnam, and Colombia’s coffee region are all
          mountainous areas, lush with greenery and biodiversity. All three
          places contain a rich mixture of natural beauty and cultural and
          historical attractions. Hikes and bike rides are highly recommended.
          In fact, what these places most notably have in common is how
          accessible and enriching it is to travel through them slowly, on foot
          or bike. They offer journeys to be taken deliberately and mindfully.
        </p>
        <p className="section-description-2">
          In the Pyrenees, travelers can explore Ordesa National Park, a UNESCO
          World Heritage Site, with its canyons and high alpine meadows, and
          incredible diversity of flora and fauna. Travelers can also visit
          Alquezar, a beautiful village that used to be the Spanish frontier
          during La Reconquista. Rich with history, the landscape there is
          dotted with Moorish castles, and one can take a look at cave paintings
          dating back to 5000 B.C.
        </p>{" "}
        <p className="section-description-2">
          Biking is an ideal way to travel through Vietnam, with breathtaking
          views of mountain ranges, mesmerizing coastlines, and rice paddies.
          From vibrant cities to beautiful villages, there is no shortage of
          cultural avenues to explore in Vietnam, largely situated among great
          swaths of natural landscape. Moc Chau, for example, is an enormous tea
          plantation that lies on ranges upon ranges of hills, and grows some of
          the best tea in Vietnam.
        </p>
        <p className="section-description-2">
          Colombia’s coffee region is a tropical, hilly stretch of land that
          spans the departments of Caldas, Risaralda, and Quindio, and features
          some of the most spectacular landscapes in a country known for its
          spectacular landscapes. There’s no shortage of incredible areas to
          hike, such as Valle Cocora, a natural cloud forest featuring the
          enormous and rare Quindío wax palm trees. Like in Vietnam’s Moc Chau
          region, travelers can tour Colombia’s coffee farms and sample some of
          the best coffee in Colombia.
        </p>{" "}
        <p className="section-description-2">
          These destinations feature some of the most beautiful landscapes in
          the world, and are steeped in a wealth of culture and history. Each of
          these places promises the possibility of an unforgettable life
          experience.
        </p>
      </div>
    </div>
  );
}

export default ContentCreation;
