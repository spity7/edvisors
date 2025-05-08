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
                  Edvisors provides expert educational consulting services to
                  help schools grow, innovate, and excel. Our team works closely
                  with school leaders and educators to co-create strategies that
                  align with institutional goals, meet international standards,
                  and drive impactful change.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Our Consulting Services:</h3>
                <ul>
                  <li>School improvement planning.</li>
                  <li>Curriculum design and mapping.</li>
                  <li>Teacher professional development.</li>
                  <li>Policy development and strategic planning.</li>
                  <li>Tech integration and change management.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Why Choose Edvisors:</h3>
                <ul>
                  <li>
                    We combine academic insight with global experience to
                    deliver sustainable transformation. Whether launching a new
                    school, seeking accreditation readiness, or improving
                    instructional quality — we are your strategic partner.
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
