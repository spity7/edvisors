import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.png";
import MortarBoard from "../../assets/images/v4/mortarboard_10568898.png";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../animation/FadeInStaggerTwo";
function ContactInfo() {
  return (
    <div className="aximo-contact-info-section">
      <div className="container">
        <div className="aximo-contact-info-title">
          <h2>
            <span className="aximo-title-animation">
              Contact Information
              <span className="aximo-title-icon">
                <img src={MortarBoard} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <a href="https://wa.me/13138881754" target="_blank">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <img src={Call2Img} alt="Call Img" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>Call us</span>
                  <p>+1 (313) 888-1754</p>
                </div>
              </div>
            </a>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-xl-6 col-md-6">
            <a href="mailto:example@gmail.com">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <img src={EmailImg} alt="Email" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>Email us</span>
                  <p>info@edvisors.ai</p>
                </div>
              </div>
            </a>
          </FadeInStaggerTwoChildren>
          {/* <FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
            <div className="aximo-contact-info-box">
              <div className="aximo-contact-info-icon">
                <img src={MapImg} alt="Map" />
              </div>
              <div className="aximo-contact-info-data">
                <span>Office address</span>
                <p>New York</p>
              </div>
            </div>
          </FadeInStaggerTwoChildren> */}
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default ContactInfo;
