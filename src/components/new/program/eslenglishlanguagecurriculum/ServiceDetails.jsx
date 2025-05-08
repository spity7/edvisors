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
                  The ESL English Language Curriculum at Edvisors is designed to
                  support non-native English speakers from Grades 1–12 in
                  acquiring fluency, confidence, and cultural competence in
                  English. The program is immersive, interactive, and tailored
                  to meet the needs of diverse learners.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Curriculum Goals:</h3>
                <ul>
                  <li>
                    Build strong foundations in reading, writing, speaking, and
                    listening.
                  </li>
                  <li>
                    Develop academic vocabulary and grammar for school success.
                  </li>
                  <li>
                    Foster self-confidence and communication in real-world
                    situations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Key Features:</h3>
                <ul>
                  <li>
                    Differentiated instruction for beginner to advanced levels.
                  </li>
                  <li>Culturally responsive materials and activities.</li>
                  <li>
                    Use of multimedia, role-play, group tasks, and gamified
                    tools.
                  </li>
                  <li>
                    Aligned with CEFR and WIDA standards for English
                    proficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-user-interface">
                <h3>⦿ Learning Pathways:</h3>
                <ul>
                  <li>
                    Elementary (Grades 1–5): Phonics, simple vocabulary,
                    picture-based comprehension, classroom expressions.
                  </li>
                  <li>
                    - Middle School (Grades 6–8): Paragraph writing, spoken
                    presentations, reading comprehension, storytelling.
                  </li>
                  <li>
                    High School (Grades 9–12): Academic writing, debate,
                    advanced grammar, research and report writing.
                  </li>
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
