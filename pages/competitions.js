import Counter from "@/src/components/Counter";
import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";
import { testimonialSlider } from "@/src/sliderProps";

const About = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName={"Competitions & Webinars"} />

      <section className="services-area-two rel z-2 mt-50">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10 fs-1 fw-bold">What We Offers</span>
            <h3>Engaging Educational Events</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">AI & Robotics Webinars</h4>
                  <ul className="list-style-three">
                    <li>Expert discussions on AI in education</li>
                    <li>Live Q&A sessions with industry leaders</li>
                    <li>Hands-on AI learning experiences</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">EdTech Innovation Competitions</h4>
                  <ul className="list-style-three">
                    <li>National & international level contests</li>
                    <li>Showcase innovative projects</li>
                    <li>Scholarship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">K-12 Curriculum Workshops</h4>
                  <ul className="list-style-three">
                    <li>Curriculum enhancement strategies</li>
                    <li>STEM & AI-focused training</li>
                    <li>Interactive teaching techniques</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Tech Talk Sessions</h4>
                  <ul className="list-style-three">
                    <li>AI & EdTech industry insights</li>
                    <li>Panel discussions with experts</li>
                    <li>Networking opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-form rpb-100 mt-70">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15 fs-1 fw-bold">
                    Register Form
                  </span>
                  <h3>Register for an Upcoming Event</h3>
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              id="contactForm"
              className="contactForm"
              action="assets/php/form-process.php"
              name="contactForm"
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
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required
                      data-error="Please enter your Phone Number"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Subject"
                      required
                      data-error="Please enter your Subject"
                    />
                    <div className="help-block with-errors" />
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
                      data-error="Please enter your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      Register <i className="far fa-long-arrow-right" />
                    </button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="testimonials-area-two pb-130 rpb-100 rel z-1 mt-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 fs-1 fw-bold">
                  Past Events & Success Stories
                </span>
                <h4>What Our educators & students Say Us</h4>
              </div>
            </div>
          </div>
          <Slider {...testimonialSlider} className="testimonial-slider">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author1.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  Sed ut perspiciatis unde omnis iste natus voluptatem accus
                  antiume dolorem queauy antium totam aperiam eaque quaey
                  abillosa inventore veritatis vitaec
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Andrew D. Bricker</h4>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  On the other hand denounce righteous indignations and dislike
                  men who beguiled and demoralized by the charms of pleasure
                  moment blinded foresee
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Jose T. McMichael</h4>
                    <span className="designation">Senior Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  Unde omnis iste natus voluptatem accus antiume dolorem queauy
                  antium totam aperiam eaque quaey abillosa inventore veritatis
                  etuarchite beatae vitaec
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Andrew D. Bricker</h4>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default About;
