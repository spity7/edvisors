import Star3Img from "../../../assets/images/v1/star3.png";
import MortarBoard from "../../../assets/images/v4/mortarboard_10568898.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: crypto.randomUUID(),
    title: "Unlock Your Future with Quality Education",
    img: MortarBoard,
  },
  {
    id: crypto.randomUUID(),
    title: "Empower Your Mind, Empower Your Life",
    img: MortarBoard,
  },
  {
    id: crypto.randomUUID(),
    title: "Achieve More Through Learning",
    img: MortarBoard,
  },
];

const swiperSettings = {
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  modules: [Autoplay],
  // slidesPerView: 1,
  // breakpoints: {
  // 	1200: {
  // 		slidesPerView: 2,
  // 	},
  // 	1400: {
  // 		slidesPerView: 2.5,
  // 	},
  // },
};

function AutoSlider() {
  return (
    <div className="aximo-auto-slider-section">
      <div className="swiper aximo-auto-slider">
        {
          <Swiper {...swiperSettings}>
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="aximo-auto-slider-item">
                  <h3>{item.title}</h3>
                  <img src={item.img} alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
}

export default AutoSlider;
