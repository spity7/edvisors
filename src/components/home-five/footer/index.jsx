import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="aximo-footer-section5 bg-light6">
      <div className="container">
        <div
          className="aximo-footer-top5 aximo-section-padding"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <FooterAbout />
            </div>
            {/* <div className="col-xl-3 col-md-4">
              <div className="aximo-footer-menu text-center">
                <div className="aximo-footer-title">
                  <p>Our Services</p>
                </div>
                <ul>
                  <li>
                    <Link to="/">EdTech Solutions</Link>
                  </li>
                  <li>
                    <Link to="/">AI Solutions</Link>
                  </li>
                  <li>
                    <Link to="/">Educational Consulting</Link>
                  </li>
                  <li>
                    <Link to="/">Competitions & Webinars</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="aximo-footer-menu text-center">
                <div className="aximo-footer-title">
                  <p>Our Programs</p>
                </div>
                <ul>
                  <li>
                    <Link to="about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/">services</Link>
                  </li>
                  <li>
                    <Link to="/">Programs</Link>
                  </li>
                  <li>
                    <Link to="contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xl-1"></div>
            <div className="col-xl-3 col-md-4">
              <FooterContact />
            </div>
          </div>
        </div>
        <div className="aximo-footer-bottom five">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
