import HeroBg from "../../../../assets/images/v4/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg";
import HeroVideo from "../../../../assets/videos/Empowering Future Innovators(1).mp4";

function Hero() {
  return (
    <div className="aximo-hero-section4">
      <video
        className="hero-bg-video"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}

export default Hero;
