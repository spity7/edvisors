"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div
            className={`burger-icon burger-icon-white ${
              isMobileMenu ? "burger-close" : ""
            }`}
            onClick={handleMobileMenu}
          >
            <span className="burger-icon-top" />
            <span className="burger-icon-mid" />
            <span className="burger-icon-bottom" />
          </div>
          <div className="mobile-header-top">
            <div className="user-account">
              {/* <img
                src="/assets/imgs/template/Logo Edvisors - black.png"
                alt="Nivia"
              /> */}
              <div className="content">
                <h6 className="user-name fw-bold fs-2">Edvisors</h6>
                {/* <p className="font-xs text-muted">You have 4 new messages</p> */}
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              {/* <div className="mobile-search mobile-header-border mb-30">
                <form action="#">
                  <input type="text" placeholder="Search for items…" />
                  <i className="fi-rr-search" />
                </form>
              </div> */}
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(1)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}
                      <Link className="" href="/">
                        Home
                      </Link>
                      {/* <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 1 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/">Business Solutions</Link>
                        </li>
                        <li>
                          <Link href="/index-2">Marketing App</Link>
                        </li>
                        <li>
                          <Link href="/index-3">Web Agency</Link>
                        </li>
                        <li>
                          <Link href="/index-4">Digital Agency</Link>
                        </li>
                        <li>
                          <Link href="/index-5">3D Products</Link>
                        </li>
                        <li>
                          <Link href="/index-6">AI Platform</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(2)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}

                      <Link href="/about">About Us</Link>
                      {/* <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/service">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing Plan</Link>
                        </li>
                        <li>
                          <Link href="/help">Help Center</Link>
                        </li>
                        <li>
                          <Link href="/integration">Integrations</Link>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                          <Link href="/job-detail">Job details</Link>
                        </li>
                        <li>
                          <Link href="/feature">Features V1</Link>
                        </li>
                        <li>
                          <Link href="/feature-2">Features V2</Link>
                        </li>
                        <li>
                          <Link href="/feature-3">Features V3</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleToggle(3)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span>

                      <Link href="/service">Services</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 3 ? "block" : "none"}`,
                        }}
                      >
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
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleToggle(4)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span>

                      <Link href="/programs">Programs</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isActive.key == 4 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/robotics-and-ai-curriculum">
                            Robotics & AI Curriculum
                          </Link>
                        </li>
                        <li>
                          <Link href="/skills-competences">
                            Skills & Competences Curriculum In
                          </Link>
                        </li>
                        <li>
                          <Link href="/esl-english-language">
                            ESL English Language Curriculum
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/term-conditions">Terms conditions</Link>
                        </li>
                        <li>
                          <Link href="/404">404 Not found</Link>
                        </li>
                        <li>
                          <Link href="/change-log">Change log</Link>
                        </li>
                        <li>
                          <Link href="/comming-soon">Comming soon</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span
                        className="menu-expand"
                        onClick={() => handleToggle(5)}
                      >
                        <i className="fi-rr-angle-small-down" />
                      </span> */}

                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link href="#">Profile</Link>
                  </li>
                  <li>
                    <Link href="#">Work Preferences</Link>
                  </li>
                  <li>
                    <Link href="#">My Boosted Shots</Link>
                  </li>
                  <li>
                    <Link href="#">My Collections</Link>
                  </li>
                  <li>
                    <Link href="#">Account Settings</Link>
                  </li>
                  <li>
                    <Link href="#">Go Pro</Link>
                  </li>
                  <li>
                    <Link href="/login">Sign Out</Link>
                  </li>
                </ul>
              </div> */}
              <div className="mobile-social-icon mb-50 mobile-account">
                <h6 className="mb-25">Follow Us</h6>
                <Link className="icon-socials icon-facebook" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" />
                </Link>
                <Link className="icon-socials icon-instagram" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/in.svg" />
                </Link>
                <Link className="icon-socials icon-twitter" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/tw.svg" />
                </Link>
                {/* <Link className="icon-socials icon-be" href="#">
                  <img alt="Nivia" src="/assets/imgs/template/icons/be.svg" />
                </Link> */}
              </div>
              <div className="site-copyright">
                Copyright 2025 © Edvisors.
                <br />
                Designed by Appsido.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
