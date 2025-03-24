import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const Services = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName={"Services"} />

      {/* Services Area start */}
      <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-20 fs-2 fw-bold">
              Latest Services
            </span>
            <h3>We Provide Best IT Services</h3>
          </div>
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>Educational Consulting</h4>
                  <p>
                    Custom curriculum development, school transformation, and AI
                    integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>K-12 Skills International Curriculum</h4>
                  <p>
                    Multilingual skill-based curriculum in English, French, and
                    Arabic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>Robotics & AI Curriculum</h4>
                  <p>AI & Robotics learning roadmap for Grades 1-12.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>EdTech Solutions</h4>
                  <p>
                    Custom-built learning platforms, smart classrooms, and
                    AI-powered tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>AI Solutions</h4>
                  <p>
                    AI-driven analytics and personalized learning solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>AI Solutions</h4>
                  <p>
                    AI-driven analytics and personalized learning solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s text-center">
            <Link legacyBehavior href="/contact">
              <a className="theme-btn mt-45">
                Contact Us <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Area end */}

      {/* Video Area start */}
      <div className="video-area-two rel z-1 mt-20">
        <div className="container">
          <div className="video-wrap-two wow fadeInUp delay-0-2s">
            <img src="assets/images/background/video.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}

      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    Empowering Future Learning
                  </span>
                  <h2>Innovating Education Through AI & EdTech</h2>
                </div>
                <p>
                  With a commitment to excellence, Edvisors LLC provides
                  cutting-edge AI-powered educational solutions, helping
                  institutions, educators, and students excel in a rapidly
                  evolving digital world. Our expertise in educational
                  consulting, curriculum development, and EdTech innovation
                  ensures impactful learning experiences.
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>AI-Powered Learning</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>24/7 Educational Support</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/about/satisfaction-two.jpg"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>Transforming Education with AI & EdTech</h4>
                  <img
                    src="assets/images/about/satisfaction-author.png"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
