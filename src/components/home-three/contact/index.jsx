import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half2.png";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <div className="section dark-bg aximo-section-padding2 position-relative overflow-hidden">
      <div className="container">
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-lg-7">
            <div className="aximo-default-content familjen-grotesk light m-right-gap">
              <h2>Have questions or need support?</h2>
              <p>
                Get in touch with us — we're here to help you navigate your
                journey in AI and EdTech.
              </p>
              <div className="aximo-contact-info">
                <h3>Contact us directly:</h3>
                <ul>
                  <li>
                    <a href="https://wa.me/13138881754" target="_blank">
                      <i className="icon-phone"></i>
                      +1 (313) 888-1754
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="mailto:example@gmail.com">
                      <i className="icon-message"></i>
                      info@edvisors.ai
                    </a>
                  </li>
                  <br />
                  <li>
                    <a>
                      <i className="icon-map"></i>
                      United States
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-lg-5">
            <div className="aximo-form-wrap2">
              <h3>Send us a message</h3>
              <p>
                Fill out the form and our expert will get back to you with a
                free analysis and proposal
              </p>
              <ContactForm />
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
      <div className="aximo-star-shape-half2">
        <img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
      </div>
    </div>
  );
}

export default Contact;
