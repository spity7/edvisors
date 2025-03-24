import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo mt-10">
            <Link href="/">
              <img
                src="assets/images/logos/Logo Edvisors - white.png"
                alt="Logo"
                title="Logo"
                width={"100%"}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="/" onClick={() => active("home")}>
                Home
              </a>
              {/* <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="/">IT Company</Link>
                </li>
                <li>
                  <Link href="index2">IT Solutions</Link>
                </li>
                <li>
                  <Link href="index3">IT Services</Link>
                </li>
                <li>
                  <Link href="index4">IT Agency</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>

            <li className="dropdown">
              <a href="about" onClick={() => active("about")}>
                About Us
              </a>
              {/* <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Services One</Link>
                </li>
                <li>
                  <Link href="services2">Services Two</Link>
                </li>
                <li>
                  <Link href="service-details">service details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>

            <li className="dropdown">
              <a href="services" onClick={() => active("Services")}>
                Services
              </a>
              <ul style={activeSubMenu("Services")}>
                <li>
                  <Link href="services">Educational Consulting</Link>
                </li>
                <li>
                  <Link href="services">
                    K-12 Skills International Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="services">Robotics & AI Curriculum</Link>
                </li>
                <li>
                  <Link href="services">EdTech Solutions</Link>
                </li>
                <li>
                  <Link href="services">AI Solutions</Link>
                </li>
                <li>
                  <Link href="services">Educational Services & Programs</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="project-grid" onClick={() => active("Products")}>
                Products
              </a>
              {/* <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("Pages")}>
                Pages
              </a>
              <ul style={activeSubMenu("Pages")}>
                <li>
                  <Link href="competitions">Competitions & Webinars</Link>
                </li>
                <li>
                  <Link href="accreditation">Accreditation</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="contact" onClick={() => active("Contact Us")}>
                Contact Us
              </a>
              {/* <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="404">404 error</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.png"
              alt="Logo"
              title="Logo"
              width={"100%"}
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <a href="/">Home</a>
            {/* <ul>
              <li>
                <Link href="/">IT Company</Link>
              </li>
              <li>
                <Link href="index2">IT Solutions</Link>
              </li>
              <li>
                <Link href="index3">IT Services</Link>
              </li>
              <li>
                <Link href="index4">IT Agency</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>

          <li className="dropdown">
            <a href="about">About Us</a>
            {/* <ul>
              <li>
                <Link href="services">Services One</Link>
              </li>
              <li>
                <Link href="services2">Services Two</Link>
              </li>
              <li>
                <Link href="service-details">service details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>

          <li className="dropdown">
            <a href="services">Services</a>
            <ul>
              <li>
                <Link href="services">Educational Consulting</Link>
              </li>
              <li>
                <Link href="services">
                  K-12 Skills International Curriculum
                </Link>
              </li>
              <li>
                <Link href="services">Robotics & AI Curriculum</Link>
              </li>
              <li>
                <Link href="services">EdTech Solutions</Link>
              </li>
              <li>
                <Link href="services">AI Solutions</Link>
              </li>
              <li>
                <Link href="services">Educational Services & Programs</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="project-grid">Products</a>
            {/* <ul>
              <li>
                <Link href="#">EdTech Products</Link>
              </li>
              <li>
                <Link href="#">Competitions & Webinars</Link>
              </li>
              <li>
                <Link href="#">Accreditation</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>

          <li className="dropdown">
            <a href="#">Pages</a>
            <ul>
              <li>
                <Link href="competitions">Competitions & Webinars</Link>
              </li>
              <li>
                <Link href="accreditation">Accreditation</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="contact">Contact Us</a>
            {/* <ul>
              <li>
                <Link href="about">About us</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
