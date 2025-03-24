import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations ?</span>
              <h2>Don't hesitate to Contact Us</h2>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
                Contact Us <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:+000(123)45688">+961/123456</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/Logo Edvisors - white.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <p>
                At Edvisors LLC, we are committed to transforming education
                through cutting-edge AI and EdTech solutions.
              </p>
              <Link legacyBehavior href="/about">
                <a className="read-more">
                  Learn More About Us <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="far fa-map-marked-alt" />
                </div>
                <div className="content">
                  <span>Location</span>
                  <h5>55 Main Street, New York</h5>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <i className="far fa-envelope-open-text" />
                </div>
                <div className="content">
                  <span>Email Us</span>
                  <h5>
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </h5>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <i className="far fa-phone" />
                </div>
                <div className="content">
                  <span>Hotline</span>
                  <h5>
                    <a href="calto:+000(123)45688">+961/123456</a>
                  </h5>
                </div>
              </div>
              <h5 className="fs-4 mb-20">Follow Us</h5>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-6 col-6 col-small text-center">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/">{`Home`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">{`About Us`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">{`Services`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="project-grid"
                      >{`EdTech Products`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="competitions"
                      >{`Competitions & Webinars`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="accreditation"
                      >{`Accreditation`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">{`Contact Us`}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="services">
                        <a>Educational Consulting</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        <a>K-12 Skills International Curriculum</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="servicess">
                        <a>Robotics & AI Curriculum</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        <a>EdTech Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        <a>AI Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        <a>Educational Services & Programs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s">
                <h5 className="text-center">
                  © 2025 Edvisors LLC. Designed By Appsido.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p className="text-center">All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
export default Footer;
