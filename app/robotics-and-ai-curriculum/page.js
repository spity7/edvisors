"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "@/components/layout/Layout";
import { FaExternalLinkAlt } from "react-icons/fa";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 1,
    },
  },
};

export default function JobDetails() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        headerCls="header-style-2 header-style-4"
        logoWhite
      >
        <div className="section-box box-banner-job">
          <img
            className="w-100"
            src="/assets/imgs/page/services/robotics-computerxplorers-activities-1024x731.png"
            alt="Nivia"
          />
        </div>

        <div>
          <section className="section-box box-content-detail">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 order-lg-last">
                  <div className="head-detail">
                    <p className="text-md neutral-500 mb-20 fs-5 fw-bold">
                      🚀 Check Our Robotics Website:{" "}
                      <a
                        href="https://boxmindacademy.ai/"
                        target="_blank"
                        style={{
                          background:
                            "url(/_next/static/media/bg-award.84b76e86.png) no-repeat top right",
                          backgroundSize: "cover",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        boxmindacademy.ai{" "}
                        <FaExternalLinkAlt
                          style={{ display: "inline", marginLeft: "5px" }}
                        />
                      </a>
                    </p>
                    <h3 className="mb-12 fw-bold fs-1">
                      Robotics & AI Curriculum
                    </h3>
                    {/* <div className="box-button-tags">
                      <Link className="btn btn-tag-2" href="#">
                        Temporary
                      </Link>
                      <Link className="btn btn-tag-2" href="#">
                        Full Time
                      </Link>
                      <Link className="btn btn-tag-2" href="#">
                        Remote
                      </Link>
                    </div> */}
                  </div>
                  <div className="main-detail">
                    <div className="title-with-number">
                      <span>1</span>Overview
                    </div>
                    <p>
                      Our Robotics & AI Curriculum equips students with the
                      technical and critical thinking skills needed to thrive in
                      a tech-driven world. Developed by educational technology
                      experts at Boxmind Academy, this program blends robotics,
                      coding, and artificial intelligence through an engaging,
                      grade-appropriate progression.
                    </p>
                    {/* <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit,
                    </p> */}
                    <div className="title-with-number">
                      <span>2</span>Key Features:
                    </div>
                    <ul>
                      <li>
                        Structured for Grades 1–12 with progressive learning
                        levels.
                      </li>
                      <li>Project-based learning and real-world challenges.</li>
                      <li>
                        Covers programming, engineering, automation, AI logic,
                        machine learning fundamentals, and more.{" "}
                      </li>
                      <li>
                        Combines hands-on robotics kits with software-based AI
                        tools.
                      </li>
                      <li>Encourages creativity, teamwork, and innovation.</li>
                      {/* <li>
                        Design pixel perfect responsive UI’s and understand that
                        adopting common interface pattern is better for UX than
                        reinventing the wheel
                      </li>
                      <li>
                        Ensure content strategy and design are perfectly in-sync
                      </li>
                      <li>
                        Give and receive design critique to help constantly
                        refine and push our work
                      </li> */}
                    </ul>
                    <div className="title-with-number">
                      <span>3</span>Learning Outcomes:
                    </div>
                    <ul>
                      <li>
                        Understand the fundamentals of robotics and AI systems.
                      </li>
                      <li>
                        Build, code, and operate their own robotic models.
                      </li>
                      <li>
                        Apply AI concepts like computer vision, voice
                        recognition, and data logic.
                      </li>
                      {/* <li>
                        Experience effectively presenting and communicating your
                        design decisions to clients and team members
                      </li>
                      <li>
                        Up-to-date knowledge of design software like Figma,
                        Sketch etc.
                      </li> */}
                    </ul>
                    <div className="title-with-number">
                      <span>4</span>Curriculum Levels:
                    </div>
                    <ul>
                      <li>
                        Elementary (Grades 1–5): Introduction to robotics,
                        sensors, basic programming (block-based).
                      </li>
                      <li>
                        Middle (Grades 6–8): Intermediate robotics, AI basics,
                        algorithm design, game creation.
                      </li>
                      <li>
                        High School (Grades 9–12): Advanced robotics systems,
                        Python coding, machine learning models, AI applications.
                      </li>
                      {/* <li>Unlimited paid vacation and paid company holidays</li>
                      <li>Monthly wellness/gym stipend</li> */}
                    </ul>
                    <div className="title-with-number">
                      <span>5</span>Global Relevance:
                    </div>
                    <ul>
                      <li>
                        This curriculum is aligned with global education
                        standards (ISTE, NGSS, UNESCO ICT Competency Framework)
                        and is adaptable to both in-school and afterschool
                        settings.
                      </li>
                      {/* <li>
                        Middle (Grades 6–8): Intermediate robotics, AI basics,
                        algorithm design, game creation.
                      </li>
                      <li>
                        High School (Grades 9–12): Advanced robotics systems,
                        Python coding, machine learning models, AI applications.
                      </li>
                      <li>Unlimited paid vacation and paid company holidays</li>
                      <li>Monthly wellness/gym stipend</li> */}
                    </ul>
                    {/* <div className="box-button-sidebar mt-30">
                      <div className="w-25">
                        <Link className="btn btn-black btn-rounded" href="#">
                          Apply For Job
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={8}
                            viewBox="0 0 22 8"
                            fill="none"
                          >
                            <path
                              d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z"
                              fill="true"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-3 order-lg-first">
                  <div className="sidebar">
                    <div className="box-sidebar-rounded">
                      <div className="sidebar-head">
                        <h6>Ready to Bring Robotics to Your School?</h6>
                      </div>
                      <div className="sidebar-content">
                        Contact us to learn more about how to implement this
                        transformative curriculum and empower your students for
                        the future.
                        {/* <div className="item-line">
                          <div className="text-date-post text-16-bold">
                            Date Posted:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            Posted 1 hours ago
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-date-expire text-16-bold">
                            Expiration date:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            April 06, 2021
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-location text-16-bold">
                            Location:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            London, UK
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-salary text-16-bold">Salary</div>
                          <p className="text-date-post-value text-md neutral-500">
                            $35k - $45k
                          </p>
                        </div>
                        <div className="item-line">
                          <div className="text-date-post text-16-bold">
                            Date Posted:
                          </div>
                          <p className="text-date-post-value text-md neutral-500">
                            Posted 1 hours ago
                          </p>
                        </div>
                        <div className="box-button-sidebar">
                          {" "}
                          <Link className="btn btn-black btn-rounded" href="#">
                            Apply For Job
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={8}
                              viewBox="0 0 22 8"
                              fill="none"
                            >
                              <path
                                d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z"
                                fill="true"
                              />
                            </svg>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    <div className="box-sidebar-normal">
                      <Link href="#">
                        <img
                          src="/assets/imgs/page/services/image-69.webp"
                          alt="Nivia"
                          style={{ borderRadius: "20px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section-box box-related-job box-latest-news">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8 mb-30">
                  <span className="btn btn-brand-4-sm">Similar positions</span>
                  <h2 className="mt-15">Related Jobs</h2>
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
                        />
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
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-swiper mt-30">
                <div className="swiper-container swiper-group-3">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Webflow Developer</h5>
                            </Link>
                            <p className="text-md">Full Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>VP of Growth Marketing</h5>
                            </Link>
                            <p className="text-md" />
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Lead of Product Design</h5>
                            </Link>
                            <p className="text-md">Full Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>AI Model Trainer</h5>
                            </Link>
                            <p className="text-md">Freelancer</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Ruby on Rails Developer</h5>
                            </Link>
                            <p className="text-md">Remote</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Digital Marketer</h5>
                            </Link>
                            <p className="text-md">Full Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Motion Designer</h5>
                            </Link>
                            <p className="text-md">Full Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Graphic Designer</h5>
                            </Link>
                            <p className="text-md">Half Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-job">
                        <div className="card-head">
                          <div className="card-head-left">
                            {" "}
                            <Link href="#">
                              <h5>Product designer</h5>
                            </Link>
                            <p className="text-md">Half Time</p>
                          </div>
                          <div className="card-head-right">
                            {" "}
                            <Link href="#">
                              <svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width={38}
                                  height={38}
                                  rx={19}
                                  fill="true"
                                />
                                <g clipPath="url(#clip0_26_2613)">
                                  <path
                                    d="M23.6537 16.8139L14.718 25.7497L13.25 24.2817L22.1847 15.3459H14.31V13.2695H25.7301V24.6897H23.6537V16.8139Z"
                                    fill="#191919"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_26_2613">
                                    <rect
                                      width={13}
                                      height={13}
                                      fill="white"
                                      transform="translate(13 13)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-info">
                          <p className="text-md neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit lobortis arcu enim urna adipiscing praesent
                            velit viverra Saas is a easy process of darkzai.
                            Donec vel sapien in sapien convallis malesuada.
                          </p>
                          <div className="card-meta">
                            {" "}
                            <span className="location text-md">California</span>
                            <span className="card-price text-md">$15K-25K</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </section> */}
          <section className="section-box box-get-touch-section">
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
          </section>
        </div>
      </Layout>
    </>
  );
}
