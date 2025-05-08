import HeroBg from "../../../../assets/images/v4/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg";
import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";
function Hero() {
  return (
    <div
      className="aximo-hero-section4"
      style={{
        backgroundImage: `url(${HeroBg})`,
        marginTop: 100,
        marginBottom: 5,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <HeroContent />
          </div>
          <div className="col-lg-3 d-flex align-items-end justify-content-center">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
