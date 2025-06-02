"use client";
import Marquee from "react-fast-marquee";

export default function LogoTicker() {
  return (
    <>
      <Marquee
        // style={{ width: "auto" }}
        pauseOnHover={true}
        direction="left"
        className="carouselTicker__list list-logos"
      >
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Lebanon.svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_the_United_States_(1896–1908).svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Ghana.svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_France_(1976–2020).svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_the_United_Kingdom_(3-5).svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_the_United_Arab_Emirates.svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Iraq.svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Italy_(WFB_2013).gif"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Saudi_Arabia.svg.png"
              alt="Nivia"
            />
          </div>
        </li>
        <li className="carouselTicker__item">
          <div className="item-logo">
            <img
              src="/assets/imgs/page/homepage6/Flag_of_Canada_(official_government_version).svg.png"
              alt="Nivia"
            />
          </div>
        </li>
      </Marquee>
    </>
  );
}
