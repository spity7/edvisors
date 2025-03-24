import Layout from "@/layout";
import Counter from "@/src/components/Counter";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
} from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Index3 = () => {
  return (
    <Layout header={3}>
      <section
        className="slider-area bgs-cover pt-185 pb-160 mb-20"
        style={{ backgroundImage: "url(assets/images/slider/slider-bg.jpg)" }}
      >
        <div className="container">
          <Slider {...mainSliderActive} className="main-slider-active">
            <div className="slider-item">
              <div className="slide-content text-white">
                <span className="sub-title">IT Solution Company</span>
                <span className="h3">Empowering Education with</span>
                <h1>AI & EdTech Solutions</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Explore Our Services
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="slider-item">
              <div className="slide-content text-white">
                <span className="sub-title">IT Solution Comapny</span>
                <span className="h2">We’re Digital</span>
                <h1>IT Services Agency</h1>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div> */}
          </Slider>
        </div>
      </section>
      {/* Slider Section End */}

      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2 mb-40">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15 fs-1 fw-bold text-center w-100">
                      About Edvisors LLC
                    </span>
                    <p>
                      At Edvisors LLC, our mission is to revolutionize education
                      by providing expert guidance, accreditation support, and
                      innovative solutions for institutions worldwide. We are
                      committed to enhancing learning experiences and ensuring
                      excellence in education.
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Link legacyBehavior href="/about">
                      <a className="read-more">
                        Learn More <i className="fas fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="row">
                  <div className="col-xl-4 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={263}
                      >
                        <Counter end={263} />
                      </span>
                      <span className="counter-title">
                        Accreditation Completed
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="10"
                      >
                        <Counter end={10} />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={23}
                      >
                        <Counter end={23} />
                      </span>
                      <span className="counter-title">Awards Won</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}

      {/* Services Area Two start */}
      <section className="services-area-two rel z-2 mt-60">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-20 fs-2 fw-bold">OUR SERVICES</span>
            <h3>Digital Core Services</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Educational Consulting</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    K-12 Skills International Curriculum
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Robotics & AI Curriculum</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">EdTech Solutions</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">AI Solutions</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Educational Services & Programs</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="services-content-three rmb-65 wow fadeInUp delay-0-2s text-center">
            <Link legacyBehavior href="/services">
              <a className="theme-btn mt-45">
                Explore Our Services <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Area Two end */}

      <section className="services-area-three overflow-hidden pt-100 rpt-100 pb-50 rpb-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30 text-center">
                  <span className="sub-title mb-15 fs-1 fw-bold">
                    EdTech Products
                  </span>
                  <h3>
                    Empowering Education with Cutting-Edge EdTech Solutions
                  </h3>
                </div>
                <p>
                  At Edvisors LLC, we provide innovative EdTech solutions that
                  empower educators and students. Our products range from
                  AI-powered learning apps to interactive panels, robotics kits,
                  and comprehensive online learning platforms.
                </p>
                <ul className="list-style-one pt-5">
                  <li>AI-powered Learning Apps</li>
                  <li>Interactive Panels & Active Boards</li>
                  <li>Robotics Kits & Learning Tools</li>
                  <li>Online Learning Platforms</li>
                </ul>
                <Link legacyBehavior href="/project-grid">
                  <a className="theme-btn mt-45">
                    View All EdTech Products{" "}
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <Link legacyBehavior href="/project-grid">
                      <a>
                        <h4>AI-powered Learning Apps</h4>
                      </a>
                    </Link>
                    <p>
                      Enhance the learning experience with apps powered by AI
                      for personalized learning.{" "}
                    </p>
                    <Link legacyBehavior href="/project-grid">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <Link legacyBehavior href="project-grid">
                      <a>
                        <h4>Interactive Panels & Active Boards</h4>
                      </a>
                    </Link>
                    <p>
                      Transform classrooms with interactive panels and smart
                      boards for an engaging learning environment.
                    </p>
                    <Link legacyBehavior href="/project-grid">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-technical-support" />
                    </div>
                    <Link legacyBehavior href="project-grid">
                      <a>
                        <h4>Robotics Kits & Learning Tools</h4>
                      </a>
                    </Link>
                    <p>
                      Equip students with robotics kits and learning tools to
                      encourage STEM and robotics education.
                    </p>
                    <Link legacyBehavior href="/project-grid">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-brainstorming" />
                    </div>
                    <Link legacyBehavior href="project-grid">
                      <a>
                        <h4>Online Learning Platforms</h4>
                      </a>
                    </Link>
                    <p>
                      Provide seamless online learning experiences with our
                      comprehensive e-learning platforms.
                    </p>
                    <Link legacyBehavior href="/project-grid">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>

      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-100 rpy-100 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="section-title text-center mb-10 wow fadeInUp delay-0-2s">
            <span className="sub-title fs-1 fw-bold">Need Accreditation?</span>
          </div>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Accreditation Form</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          Request Accreditation{" "}
                          <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <h3>Accreditation Services</h3>
                </div>
                <div className="contact-info-part">
                  <ul className="list-style-one">
                    <li>School Accreditation</li>
                    <li>Program Accreditation</li>
                    <li>EdTech Product Accreditation </li>
                    <li>AI & Technology Integration</li>
                    <li>Teacher Training & Certification Accreditation</li>
                    <li>Higher Education Accreditation</li>
                    <li>Online Learning Accreditation</li>
                    <li>Special Education Accreditation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section End */}
    </Layout>
  );
};
export default Index3;
