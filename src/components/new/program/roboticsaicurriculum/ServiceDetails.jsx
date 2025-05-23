import SingleImg from "../../../../assets/images/program1/robotics-computerxplorers-activities-1024x731.png";
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
                  Our Robotics & AI Curriculum equips students with the
                  technical and critical thinking skills needed to thrive in a
                  tech-driven world. Developed by educational technology experts
                  at Boxmind Academy, this program blends robotics, coding, and
                  artificial intelligence through an engaging, grade-appropriate
                  progression.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Key Features:</h3>
                <ul>
                  <li>
                    Structured for Grades 1–12 with progressive learning levels.
                  </li>
                  <li>Project-based learning and real-world challenges.</li>
                  <li>
                    Covers programming, engineering, automation, AI logic,
                    machine learning fundamentals, and more.
                  </li>
                  <li>
                    Combines hands-on robotics kits with software-based AI
                    tools.
                  </li>
                  <li>Encourages creativity, teamwork, and innovation.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Learning Outcomes:</h3>
                <ul>
                  <li>
                    Understand the fundamentals of robotics and AI systems.
                  </li>
                  <li>Build, code, and operate their own robotic models.</li>
                  <li>
                    Apply AI concepts like computer vision, voice recognition,
                    and data logic.
                  </li>
                  <li>
                    Apply AI concepts like computer vision, voice recognition,
                    and data logic.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Curriculum Levels:</h3>
                <ul>
                  <li>
                    Elementary (Grades 1–5): Introduction to robotics, sensors,
                    basic programming (block-based).
                  </li>
                  <li>
                    Middle (Grades 6–8): Intermediate robotics, AI basics,
                    algorithm design, game creation.
                  </li>
                  <li>
                    High School (Grades 9–12): Advanced robotics systems, Python
                    coding, machine learning models, AI applications.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Global Relevance:</h3>
                <ul>
                  <li>
                    This curriculum is aligned with global education standards
                    (ISTE, NGSS, UNESCO ICT Competency Framework) and is
                    adaptable to both in-school and afterschool settings.
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
