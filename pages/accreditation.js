import Counter from "@/src/components/Counter";
import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName={"Accreditation"} />

      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2 mb-20 mt-40">
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
                    <span className="sub-title mb-30 fs-1 fw-bold text-center w-100">
                      What is Accreditation?{" "}
                    </span>
                    <p>
                      Accreditation is a formal recognition that an educational
                      institution meets high-quality standards in curriculum,
                      faculty, and student services. It enhances credibility and
                      global recognition.
                    </p>
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

      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15 fs-1 fw-bold">
            Accreditation Process
          </span>
          <h3>Accreditation Process & Requirements</h3>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Initial Consultation</h4>
                  <p>– Understanding your institution’s goals and needs.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Document Review</h4>
                  <p>– Submission of required documents & compliance check.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>On-Site Evaluation</h4>
                  <p>– Auditing educational processes and infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Feedback & Adjustments</h4>
                  <p>– Addressing recommendations for improvement.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Approval & Certification</h4>
                  <p>– Receiving the official accreditation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-two rel z-2 mb-60">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10 fs-1 fw-bold mb-20">
              Benefits{" "}
            </span>
            <h2>Why Accreditation Matters?</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Enhances Institutional Credibility</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Increases Student Trust & Enrollment
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Facilitates International Recognition
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Access to More Funding & Partnerships
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
