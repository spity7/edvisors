import Link from "next/link";
import SearchForm from "./SearchForm";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  topBar,
  headerCls,
  logoWhite,
}) {
  return (
    <>
      <header
        className={`header ${headerCls ? headerCls : ""} sticky-bar ${
          scroll ? "stick" : ""
        }`}
      >
        {topBar && (
          <div className="top-bar">
            <div className="container">
              <div className="top-bar-inner">
                <div className="box-top-bar-left">
                  <span className="address-icon text-md">
                    9207 Lakeshore RdShreveport
                  </span>
                </div>
                <div className="box-top-bar-right">
                  <a className="phone-icon text-md" href="tel:(262) 555-0131">
                    (262) 555-0131
                  </a>
                  <a
                    className="email-icon text-md"
                    href="mailto:contact@nivia.com"
                  >
                    contact@nivia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    alt="Edvisors"
                    src={`/assets/imgs/template/${
                      logoWhite
                        ? "Logo Edvisors - black"
                        : "Logo Edvisors - white"
                    }.png`}
                    width={240}
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link className="active fw-bold" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="fw-bold">
                        About
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link className="active fw-bold" href="/service">
                        Services
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/edtech-solutions">EdTech Solutions</Link>
                        </li>
                        <li>
                          <Link href="/ai-solutions">AI Solutions</Link>
                        </li>
                        <li>
                          <Link href="/educational-consulting">
                            Educational Consulting
                          </Link>
                        </li>
                        <li>
                          <Link href="/competitions-webinars">
                            Competitions & Webinars
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link className="active fw-bold" href="/programs">
                        Programs
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/robotics-and-ai-curriculum">
                            Robotics & AI Curriculum
                          </Link>
                        </li>
                        <li>
                          <Link href="/skills-competences">
                            Global Life Competencies Curriculum
                          </Link>
                        </li>
                        <li>
                          <Link href="/esl-english-language">
                            ESL English Language Curriculum
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact" className="fw-bold">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* <SearchForm /> */}
              <Link
                className="btn btn-brand-4-medium hover-up"
                href="https://wa.me/13138881754"
                target="_blank"
              >
                Call Us
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                    fill="true"
                  ></path>
                </svg>
              </Link>
              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
