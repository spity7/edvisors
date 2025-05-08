import DarkLogoImg from "../../../assets/images/logo/Logo Edvisors - black.png";
import { Link } from "react-router-dom";
function FooterAbout() {
  return (
    <div className="aximo-footer-textarea">
      <Link href="/">
        <img src={DarkLogoImg} alt="Logo" />
      </Link>
      <p>
        At Edvisors LLC, we are committed to transforming education through
        cutting-edge AI and EdTech solutions.
      </p>
      {/* <div className="aximo-social-icon aximo-social-icon4">
        <ul>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank">
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="icon-linkedin"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default FooterAbout;
