import SingleImg from "../../../../assets/images/service2/human-robot-interaction-digital-world.jpg";
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
                  Edvisors delivers cutting-edge Artificial Intelligence (AI)
                  solutions tailored to the needs of educational institutions.
                  We help schools integrate AI tools that enhance personalized
                  learning, automate administrative tasks, and prepare students
                  for the future of work.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Services Include:</h3>
                <ul>
                  <li>
                    AI-Powered Learning Platforms for adaptive instruction.
                  </li>
                  <li>
                    Intelligent Tutoring Systems that respond to individual
                    student performance.
                  </li>
                  <li>AI Chatbots for school website FAQ & student support.</li>
                  <li>
                    Predictive Analytics for early warning systems and student
                    outcomes.
                  </li>
                  <li>
                    Natural Language Processing (NLP) for grading, writing
                    tools, and comprehension enhancement.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Why It Matters:</h3>
                <ul>
                  <li>
                    AI can reduce teacher workload, personalize learning paths,
                    and provide real-time insights into student progress —
                    transforming education into a more inclusive and efficient
                    experience.
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
