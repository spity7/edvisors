import SingleImg from "../../../../assets/images/service/service-single.png";
import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInUp from "../../../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";
function ServiceDetails() {
  return (
    <div
      className="section aximo-section-padding2 pb-0"
      style={{ paddingTop: 20 }}
    >
      <div className="container">
        <div className="aximo-service-details-wrap">
          <FadeInUp className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Single img" />
          </FadeInUp>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Overview
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                  {/* product development */}
                </h2>
                <p>
                  Edvisors believes in the power of collaboration, creativity,
                  and community learning. Through our Competitions & Webinars
                  platform, we bring students, educators, and thought leaders
                  together to exchange ideas, showcase talents, and engage with
                  global educational trends.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Competitions:</h3>
                <ul>
                  <li>Robotics & AI challenges.</li>
                  <li>STEAM innovation contests.</li>
                  <li>Public speaking and debate tournaments.</li>
                  <li>International art and creative writing competitions.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Webinars & Events:</h3>
                <ul>
                  <li>Professional development for educators.</li>
                  <li>Innovation showcases by students and schools.</li>
                  <li>Global education trends and policy discussions.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aximo-faq-wrap">
            <WorkingApproach />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
