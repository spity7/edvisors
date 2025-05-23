import Star2Img from "../../../../assets/images/v1/star2.png";
import MortarBoard from "../../../../assets/images/v4/mortarboard_10568898.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
  return (
    <div
      className="section aximo-section-padding4"
      style={{
        background:
          "linear-gradient(135deg, #4284ff 0%, #feffd2 40%, #2a78ff 100%)",
      }}
    >
      <div className="container">
        <div className="aximo-section-title center">
          <h2 className="fw-bold">
            <span className="aximo-title-animation">
              Our Services
              <span className="aximo-title-icon">
                <img src={MortarBoard} alt="MortarBoard" />
              </span>
            </span>
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            {services.map((item, index) => (
              <FadeInStagger key={item.id} index={index} className="col-lg-6">
                <ServiceCard service={item} />
              </FadeInStagger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
