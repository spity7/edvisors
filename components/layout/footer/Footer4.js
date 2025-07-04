import Link from "next/link";

export default function Footer4() {
  return (
    <>
      <footer className="footer footer-style-3 footer-style-4">
        <div className="container">
          <div className="box-newsletter">
            <div className="newsletter-left">
              <h2>Join our community</h2>
              <p className="text-md neutral-800">
                Work smarter with effective time management — enhance your
                experience with Edvisors.
              </p>
            </div>
            <div className="newsletter-right">
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email address..."
                />
                <button className="btn btn-subscribe" type="submit">
                  Subscribe
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z"
                      fill="true"
                    >
                      {" "}
                    </path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Link href="/">
                <img
                  alt="Nivia"
                  src="/assets/imgs/template/Logo Edvisors - white.png"
                />
              </Link>
              <div className="mt-20 mb-20">
                <p className="text-md neutral-600 mb-10">
                  Michigan, United States
                </p>
                {/* <p className="text-md neutral-600">
                  Hours: 8:00 - 17:00, Mon - Sat{" "}
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-xs-6">
              <div className="row mt-20">
                {/* <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    About
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Company</Link>
                    </li>
                    <li>
                      <Link href="#">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Press media</Link>
                    </li>
                    <li>
                      <Link href="#">History</Link>
                    </li>
                  </ul>
                </div> */}
                <div className="col-lg-2" />
                <div className="col-lg-5 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Services
                  </h5>
                  <ul className="menu-footer">
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
                </div>
                <div className="col-lg-5 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Programs
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="/robotics-and-ai-curriculum">
                        AI & Robotics Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link href="/skills-competences">
                        Global Life Competencies Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link href="/esl-english-language">
                        ESL English Language Curriculum
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Support
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Forum Support</Link>
                    </li>
                    <li>
                      <Link href="#">Help FAQ</Link>
                    </li>
                    <li>
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6 text-start text-md-end">
              <div className="text-start d-inline-block mt-30">
                <p className="text-lg title-follow neutral-0">Follow us</p>
                <div className="box-socials-footer" />
                <a className="icon-socials icon-facebook" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" />
                </a>
                <a className="icon-socials icon-instagram" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/in.svg" />
                </a>
                <a className="icon-socials icon-twitter" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/tw.svg" />
                </a>
                {/* <a className="icon-socials icon-be" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/be.svg" />
                </a> */}
                <p />
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-0">
            <div className="row">
              <div className="col-md-6 text-md-start text-center">
                <p className="text-sm neutral-600">
                  Copyright © 2023 Edvisors. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <ul className="menu-bottom-footer">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
