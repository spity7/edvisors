import CounterUp from "@/components/elements/CounterUp";
import ResizeContainer from "@/components/elements/ResizeContainer";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import NewsSlider from "@/components/slider/NewsSlider";
import OfficeSlider from "@/components/slider/OfficeSlider";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";
export default function About() {
  return (
    <>
      <ResizeContainer />
      <Layout
        headerStyle={1}
        footerStyle={4}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-about-section-1 pt-20">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="padding-left-auto">
                    <Link className="btn btn-tag-black" href="#">
                      About Us
                    </Link>
                    <h2 className="display-2 mt-15 mb-25">
                      Empowering Modern Education
                    </h2>
                    <p className="text-xl mb-45">
                      Edvisors is a forward-thinking educational solutions
                      company dedicated to transforming K–12 learning through
                      technology, innovation, and a global perspective.
                    </p>
                    {/* <div className="box-buttons-feature-4">
                      <Link className="btn btn-brand-4-medium mr-20" href="#">
                        Subscribe
                        <svg
                          width={22}
                          height={8}
                          viewBox="0 0 22 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z"
                            fill="true"
                          />
                        </svg>
                      </Link>
                      <Link className="btn btn-learmore-2" href="#">
                        <span>
                          <svg
                            width={39}
                            height={38}
                            viewBox="0 0 39 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              width={38}
                              height={38}
                              rx={19}
                              fill="#191919"
                            />
                            <g clipPath="url(#clip0_1_376)">
                              <path
                                d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z"
                                fill="#C5FF55"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_376">
                                <rect
                                  width={13}
                                  height={13}
                                  fill="white"
                                  transform="translate(13.5 13)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Learn More
                      </Link>
                    </div> */}
                    <div className="box-border-left-author">
                      <p className="text-22-bold">
                        We provide AI-driven tools, strategic guidance, and
                        international expertise to help educators and schools
                        thrive in the 21st century.
                      </p>
                      <div className="box-joined">
                        <div className="box-authors">
                          <span className="item-author">
                            <img
                              src="/assets/imgs/page/homepage1/author.png"
                              alt="Nivia"
                            />
                          </span>
                          <span className="item-author">
                            <img
                              src="/assets/imgs/page/homepage1/author2.png"
                              alt="Nivia"
                            />
                          </span>
                          <span className="item-author">
                            <img
                              src="/assets/imgs/page/homepage1/author3.png"
                              alt="Nivia"
                            />
                          </span>
                          <span className="item-author">
                            <span className="text-num-author text-md-bold color-brand-2">
                              +200
                            </span>
                          </span>
                        </div>
                        <span className="text-lg d-inline-block">
                          Join hundreds of educators using
                          <br className="d-none d-md-block" />
                          the Edvisors platform to enhance learning outcomes.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-image-rect">
                    <img
                      src="/assets/imgs/page/about/img-about.png"
                      alt="Nivia"
                    />
                    {/* <VideoPopup /> */}
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="box-image-rect box-image-rect-both">
                    <img
                      src="/assets/imgs/page/about/img-about2.png"
                      alt="Nivia"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="padding-right-auto">
                    <div className="box-padding-left-50 box-padding-right-50">
                      <div className="strate-icon">
                        <span /> Education strategies for the future
                      </div>
                      <h2 className="heading-2 mb-20">
                        Driving results with AI-powered learning and consulting
                      </h2>
                      <p className="text-lg neutral-700">
                        From tailored digital curricula to expert international
                        partnerships, Edvisors equips educators with tools to
                        meet evolving classroom needs.
                      </p>
                      <div className="row mt-50">
                        <div className="col-xl-6 col-lg-12 col-sm-6">
                          <div className="card-feature-2">
                            <div className="card-image">
                              <img src="/assets/imgs/page/homepage3/discover.svg" />
                            </div>
                            <div className="card-info">
                              <Link href="#">
                                <h3 className="text-22-bold">
                                  AI-Driven Curriculum Solutions
                                </h3>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-sm-6">
                          <div className="card-feature-2">
                            <div className="card-image">
                              <img src="/assets/imgs/page/homepage3/keep.svg" />
                            </div>
                            <div className="card-info">
                              <Link href="#">
                                <h3 className="text-22-bold">
                                  Global Educational Consulting
                                </h3>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-why-trusted box-why-trusted-black">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-4 mb-30 text-linear-3">
                  <h2 className="text-32-bold">
                    See why we are
                    <br className="d-none d-lg-block" /> trusted the world over
                  </h2>
                </div>
                <div className="col-lg-8 mb-30">
                  <div className="box-numbers">
                    <div className="item-number">
                      <h3 className="heading-2">
                        <CounterUp count={10} />+
                      </h3>
                      <p className="text-xl neutral-700">Years of experience</p>
                    </div>
                    <div className="item-number">
                      <h3 className="heading-2">
                        <CounterUp count={15} />+
                      </h3>
                      <p className="text-xl neutral-700">Countries Reached</p>
                    </div>
                    <div className="item-number">
                      <h3 className="heading-2">
                        <CounterUp count={98} />%
                      </h3>
                      <p className="text-xl neutral-700">
                        Client Satisfaction Score
                      </p>
                    </div>
                    {/* <div className="item-number">
                      <h3 className="heading-2">
                        <CounterUp count={100} />+
                      </h3>
                      <p className="text-xl neutral-700">Global branches</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-prepared-section">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-6 mb-30">
                  <h2 className="heading-2">
                    When you are more prepared, your future will be brighter
                  </h2>
                </div>
                <div className="col-lg-6 mb-30">
                  <h6 className="neutral-500">
                    Since 2010 we’ve been working with amazing organisations to
                    create meaningful impact and compelling experiences.
                  </h6>
                </div>
              </div>
              <div className="row mt-45">
                <div className="col-lg-4">
                  <div className="card-feature-2 card-feature-list">
                    <div className="card-image">
                      <img src="/assets/imgs/page/homepage3/marketing.svg" />
                    </div>
                    <div className="card-info">
                      <Link href="#">
                        <h3 className="text-22-bold">Our philosophy</h3>
                        <p className="text-lg neutral-500">
                          We also know that with all our wellness initiatives,
                          customer value and service, our doors to the
                          community.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-feature-2 card-feature-list">
                    <div className="card-image">
                      <img src="/assets/imgs/page/homepage3/digital.svg" />
                    </div>
                    <div className="card-info">
                      <Link href="#">
                        <h3 className="text-22-bold">Our Mission</h3>
                        <p className="text-lg neutral-500">
                          We equip learners and institutions worldwide with
                          cutting-edge educational programs and services that
                          foster innovation, critical thinking, and global
                          readiness.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-feature-2 card-feature-list">
                    <div className="card-image">
                      <img src="/assets/imgs/page/homepage3/product.svg" />
                    </div>
                    <div className="card-info">
                      <Link href="#">
                        <h3 className="text-22-bold">Our Vision</h3>
                        <p className="text-lg neutral-500">
                          We become a global leader in education innovation,
                          bridging the gap between technology and classroom
                          learning across diverse cultures and contexts.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section-box box-our-offices">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <h2 className="neutral-0">Our offices </h2>
                </div>
                <div className="col-lg-4">
                  <div className="box-button-slider box-button-slider-black">
                    <div className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14"
                          stroke="true"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2"
                          stroke="true"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-swiper mt-45">
                <div className="swiper-container swiper-group-1">
                  <OfficeSlider />
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="section-box wow animate__animated animate__fadeIn box-our-team-2">
            <div className="box-our-team-2-inner">
              <div className="container">
                <div className="text-center">
                  <Link className="btn btn-brand-4-sm" href="#">
                    Our people
                  </Link>
                  <h2 className="mb-20 mt-20">Meet Our Team</h2>
                  <p className="text-md neutral-500">
                    This is our team, a lot of smiling happy people who work
                    hard to
                    <br className="d-none d-lg-block" />
                    empower your teams.
                  </p>
                </div>
                <div className="box-swiper mt-60">
                  <Team2Slider />
                </div>
              </div>
            </div>
          </section> */}
          <section
            className="section-box wow animate__animated animate__fadeIn box-our-track"
            // style={{
            //   backgroundImage:
            //     "url(/_next/static/media/bg-banner-main.17b0f08d.png)",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "top center",
            // }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center mb-40 box-image-rect box-image-rect-both">
                  <img
                    src="/assets/imgs/page/homepage1/freepik__adjust__62989.png"
                    alt="Nivia"
                  />
                </div>
                <div className="col-lg-6 mb-40">
                  <div className="box-padding-left-50">
                    <div className="strate-icon">
                      <span /> Our Values in Action
                    </div>
                    <h2 className="heading-2 mb-20">
                      Empowering progress through purpose-driven strategies
                    </h2>
                    <p className="text-lg neutral-700">
                      At Edvisors, we design with intention and impact. Since
                      2010, we’ve been crafting digital experiences that reflect
                      strong principles, innovation, and a passion for
                      educational success.
                    </p>
                    <div className="row mt-50">
                      <div className="col-lg-6 col-sm-6">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/marketing.svg" />
                          </div>
                          <div className="card-info">
                            <Link href="#">
                              <h3 className="text-22-bold">Innovation</h3>
                            </Link>
                            <p className="text-md neutral-700">
                              We believe in creative problem-solving and
                              forward-thinking approaches to education.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <Link href="#">
                              <h3 className="text-22-bold">Integrity</h3>
                            </Link>
                            <p className="text-md neutral-700">
                              We prioritize honesty, transparency, and ethical
                              decision-making.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/product.svg" />
                          </div>
                          <div className="card-info">
                            <Link href="#">
                              <h3 className="text-22-bold">Equity</h3>
                            </Link>
                            <p className="text-md neutral-700">
                              We are committed to inclusive learning that
                              reaches every student.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/social.svg" />
                          </div>
                          <div className="card-info">
                            <Link href="#">
                              <h3 className="text-22-bold">Excellence</h3>
                            </Link>
                            <p className="text-md neutral-700">
                              We deliver high-quality solutions that meet real
                              educational needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section-box box-awards-section">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-4 mb-30">
                  <h2 className="mb-15">Our Awards</h2>
                  <p className="text-md neutral-700">
                    Holisticly actualize magnetic testing procedures for
                    high-quality initiatives. Compellingly enhance client-based
                    users whereas strategic bandwidth. Appropriately exploit
                    cost effective.
                  </p>
                </div>
                <div className="col-lg-8 mb-30">
                  <div className="row align-items-end">
                    <div className="col-sm-3 col-6 mb-30">
                      <img
                        src="/assets/imgs/page/about/award.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="col-sm-3 col-6 mb-30">
                      <img
                        src="/assets/imgs/page/about/award2.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="col-sm-3 col-6 mb-30">
                      <img
                        src="/assets/imgs/page/about/award3.png"
                        alt="Nivia"
                      />
                    </div>
                    <div className="col-sm-3 col-6 mb-30">
                      <img
                        src="/assets/imgs/page/about/award4.png"
                        alt="Nivia"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="section-box box-get-touch-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="box-image-get-touch">
                    {" "}
                    <span className="setup">
                      <img
                        src="/assets/imgs/page/about/setup.png"
                        alt="Nivia"
                      />
                    </span>
                    <span className="icon-1">
                      <img src="/assets/imgs/page/about/icon.png" alt="Nivia" />
                    </span>
                    <img
                      src="/assets/imgs/page/about/img-touch.png"
                      alt="Nivia"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <Link className="btn btn-brand-4-sm" href="#">
                    Contact Us
                  </Link>
                  <h2 className="mb-20 mt-20">Get in Touch</h2>
                  <p className="text-md neutral-700">
                    Contact us below and we will get back to you shortly.
                  </p>
                  <div className="block-form-contact mt-45">
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="fullname">Your Name *</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fullname">Your Email *</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="email@website.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fullname">Message *</label>
                        <textarea
                          className="form-control"
                          rows={7}
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-black btn-rounded"
                          type="submit"
                        >
                          Send Message
                          <svg
                            width={22}
                            height={8}
                            viewBox="0 0 22 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z"
                              fill="true"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="section-box box-pricing-2 box-pricing-4">
            <div className="box-pricing-2-inner">
              <div className="container">
                <div className="text-center">
                  {" "}
                  <Link className="btn btn-brand-4-sm" href="#">
                    Pricing Plan
                  </Link>
                  <h2 className="mb-20 mt-15">
                    Ready to Get Started? Don't Worry,
                    <br className="d-none d-lg-block" /> We'll Keep You Under
                    Budget
                  </h2>
                  <p className="text-lg neutral-500 mb-65">
                    Get started with a 5-day trial, 25% off for Yearly Plan,
                    Cancel anytime.
                  </p>
                </div>
                <div className="block-pricing">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="card-pricing card-pricing-style-2">
                        <div className="card-title">
                          <h6>Basic</h6>
                        </div>
                        <div className="card-price">
                          <div className="for-month">
                            <h1 className="heading-1">$99</h1>
                            <span className="text-20-medium color-grey">
                              monthly
                            </span>
                          </div>
                          <div className="for-year">
                            <h1 className="heading-1">$1,188</h1>
                            <span className="text-20-medium color-grey">
                              yearly
                            </span>
                          </div>
                        </div>
                        <div className="card-lists">
                          <strong className="text-18-bold">
                            What’s included
                          </strong>
                          <ul className="list-feature">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              5,000 Monthly Word Limit
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50+ Languages
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              Advance Editor Tool
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50 Accounts
                            </li>
                          </ul>
                        </div>
                        <div className="card-button">
                          <Link className="btn btn-get-started" href="#">
                            Get started
                            <svg
                              width={23}
                              height={8}
                              viewBox="0 0 23 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                fill="true"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="card-pricing card-pricing-style-2">
                        <div className="card-title">
                          <h6>Professional</h6>
                        </div>
                        <div className="card-price">
                          <div className="for-month">
                            <h1 className="heading-1">$199</h1>
                            <span className="text-20-medium color-grey">
                              monthly
                            </span>
                          </div>
                          <div className="for-year">
                            <h1 className="heading-1">$2,388</h1>
                            <span className="text-20-medium color-grey">
                              yearly
                            </span>
                          </div>
                        </div>
                        <div className="card-lists">
                          <strong className="text-18-bold">
                            What’s included
                          </strong>
                          <ul className="list-feature">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              5,000 Monthly Word Limit
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50+ Languages
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              Advance Editor Tool
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50 Accounts
                            </li>
                          </ul>
                        </div>
                        <div className="card-button">
                          <Link className="btn btn-get-started" href="#">
                            Get started
                            <svg
                              width={23}
                              height={8}
                              viewBox="0 0 23 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                fill="true"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="card-pricing card-pricing-style-2">
                        <div className="card-title">
                          <h6>Enterprise</h6>
                        </div>
                        <div className="card-price">
                          <div className="for-month">
                            <h1 className="heading-1">$399</h1>
                            <span className="text-20-medium color-grey">
                              monthly
                            </span>
                          </div>
                          <div className="for-year">
                            <h1 className="heading-1">$4,788</h1>
                            <span className="text-20-medium color-grey">
                              yearly
                            </span>
                          </div>
                        </div>
                        <div className="card-lists">
                          <strong className="text-18-bold">
                            What’s included
                          </strong>
                          <ul className="list-feature">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              5,000 Monthly Word Limit
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50+ Languages
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              Advance Editor Tool
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_51_57)">
                                  <path
                                    d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
                                    fill="#C5FF55"
                                  />
                                  <path
                                    d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688"
                                    stroke="#191919"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_51_57">
                                    <rect width={26} height={26} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>{" "}
                              50 Accounts
                            </li>
                          </ul>
                        </div>
                        <div className="card-button">
                          <Link className="btn btn-get-started" href="#">
                            Get started
                            <svg
                              width={23}
                              height={8}
                              viewBox="0 0 23 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z"
                                fill="true"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="section-box box-latest-news box-latest-news-2">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8 mb-30">
                  <h2 className="heading-2 mb-10">Latest News Stories</h2>
                  <p className="text-lg neutral-700">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                  </p>
                </div>
                <div className="col-lg-4 mb-30">
                  <div className="box-button-slider box-button-slider-team justify-content-end">
                    <div className="swiper-button-prev swiper-button-prev-testimonials swiper-button-prev-3">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 3.33398L2 8.00065M2 8.00065L6.66667 12.6673M2 8.00065H14"
                          stroke="true"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-button-next-testimonials swiper-button-next-3">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 3.33398L14 8.00065M14 8.00065L9.33333 12.6673M14 8.00065H2"
                          stroke="true"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-swiper mt-30">
                <NewsSlider />
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    </>
  );
}
