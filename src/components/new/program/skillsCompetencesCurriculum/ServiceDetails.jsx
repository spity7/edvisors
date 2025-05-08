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
                  At Edvisors, we believe that 21st-century learners need more
                  than academic knowledge—they need a well-rounded set of skills
                  and personal competencies. Our Skills & Competences Curriculum
                  fosters the essential soft skills, leadership traits, and
                  emotional intelligence required for future success.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Program Highlights:</h3>
                <ul>
                  <li>Critical Thinking & Problem Solving.</li>
                  <li>Collaboration & Communication.</li>
                  <li>Creativity & Innovation.</li>
                  <li>Leadership & Responsibility.</li>
                  <li>Emotional Intelligence & Self-Management.</li>
                  <li>Ethics & Global Citizenship.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Learning Objectives:</h3>
                <ul>
                  <li>Cultivate resilience, empathy, and self-awareness.</li>
                  <li>Develop interpersonal and leadership skills.</li>
                  <li>
                    Practice responsible decision-making and goal setting.
                  </li>
                  <li>Build digital citizenship and ethical thinking.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Curriculum Modules (Sample Topics):</h3>
                <ul>
                  <li>Teamwork & Peer Feedback.</li>
                  <li>Decision-Making Under Pressure.</li>
                  <li>Time Management & Goal Setting.</li>
                  <li>Ethical Dilemmas in the Digital Age</li>
                  <li>Cross-Cultural Communication</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Program Structure:</h3>
                <ul>
                  <li>
                    This program is designed for Grades 1–12 and is integrated
                    progressively across grade levels. Lessons are interactive,
                    reflective, and centered around real-world scenarios and
                    student-led projects.
                  </li>
                  {/* <li>
                    UX designers work to understand the user's needs, behaviors,
                    and pain points, and they design the product maximizes user
                    satisfaction.
                  </li>
                  <li>
                    Key aspects of UX design include research, information
                    architecture, wireframing, prototyping, usability testing,
                    and user journey mapping.
                  </li> */}
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
