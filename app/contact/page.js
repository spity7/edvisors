"use client";
import { useState } from "react";
import axios from "axios";
import LogoTicker from "@/components/elements/LogoTicker";
import Layout from "@/components/layout/Layout";
import Team2Slider from "@/components/slider/Team2Slider";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      alert("Your message has been sent!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Failed to send your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div>
          <section className="section-box box-content-contact">
            <div className="container">
              <div className="text-center contact-head">
                <span className="icon-1 shape-1" />
                <span className="icon-2 shape-2" />
                <span className="btn btn-brand-4-sm">Contact Us</span>
                <h2 className="heading-2 mb-20 mt-15">Get in Touch</h2>
                <div className="text-center">
                  <nav className="container-breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="#">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="box-border-rounded">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* <Link className="btn btn-brand-4-sm" href="#">
                      Contact Us
                    </Link> */}
                    <h3 className="mb-20 mt-20">
                      To make requests for further information, contact us via
                      our social channels.
                    </h3>
                    <p className="text-md neutral-700">
                      Contact us below and we will get back to you shortly.
                    </p>
                    <div className="row mt-50">
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/digital.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">Phone</h3>
                            <div className="text-md neutral-700">
                              <div className="row">
                                <div className="col-sm-12">
                                  <Link href="/tel:+1(800)9684021">
                                    +1 (313) 888-1754
                                  </Link>
                                  {/* <br />
                                  <Link href="/tel:+(406)5550120">
                                    +(406) 555-0120
                                  </Link> */}
                                </div>
                                {/* <div className="col-sm-6">
                                  <Link href="/tel:+1(800)9684021">
                                    (+68)1221 09876
                                  </Link>
                                  <br />
                                  <Link href="/tel:+(406)5550120">
                                    (+47)1221 09878
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/social.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">Email</h3>
                            <div className="text-md neutral-700">
                              <div className="row">
                                <div className="col-sm-6">info@Edvisors.ai</div>
                                {/* <div className="col-sm-6">
                                  <Link
                                    className="neutral-700"
                                    href="/mailto:contact@nivia.com"
                                  >
                                    contact@nivia.com
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-feature-2">
                          <div className="card-image">
                            <img src="/assets/imgs/page/homepage3/internet.svg" />
                          </div>
                          <div className="card-info">
                            <h3 className="text-22-bold">Address</h3>
                            <p className="text-md neutral-700">
                              Michigan, United States
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 text-center">
                    <img src="/assets/imgs/page/contact/img-contact.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box box-get-touch-section box-contact-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="block-map">
                    <div className="box-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11453964.633746002!2d-90.3207068!3d44.1822051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0125c1e421%3A0x35f48943b67a8126!2sMichigan%2C%20USA!5e0!3m2!1sen!2sus!4v1717171717171!5m2!1sen!2sus"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    {/* <p className="text-md neutral-600 text-center">
                      Hours: 8:00 - 17:00, Mon - Sat{" "}
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <Link className="btn btn-brand-4-sm" href="#">
                    Contact Us
                  </Link>
                  <h2 className="mb-20 mt-20">Get in Touch</h2>
                  <p className="text-md neutral-700">
                    Contact us below and we will get back to you shortly.
                  </p>
                  <div className="block-form-contact mt-45">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="name"
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email *</label>
                        <input
                          id="email"
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="email@website.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows={7}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-black btn-rounded"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message"}
                          {!loading && (
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
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
          <section className="section-box wow animate__animated animate__fadeIn box-logos-4">
            <div className="container">
              <div
                className="carouselTickerLogos2 carouselTicker_vertical"
                id="slide-logos"
              >
                <LogoTicker />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
