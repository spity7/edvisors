import SingleImg from "../../../../assets/images/service1/city-committed-education-collage-concept.jpg";
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
                  At Edvisors, we empower schools and educators with tailored
                  educational technology (EdTech) solutions that enhance
                  teaching, learning, and school operations. Our services
                  combine the latest tools and platforms to create immersive,
                  tech-enhanced learning environments that meet the evolving
                  needs of modern education.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ What We Offer:</h3>
                <ul>
                  <li>
                    Learning Management Systems (LMS) setup and integration.
                  </li>
                  <li>
                    Smart classroom installations and interactive display tech.
                  </li>
                  <li>Digital content libraries and e-learning development.</li>
                  <li>
                    Technology infrastructure consulting and implementation.
                  </li>
                  <li>
                    Cloud-based collaboration tools for staff and students.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>⦿ Who It's For:</h3>
                <ul>
                  <li>
                    K–12 schools, international academies, ministries of
                    education, and EdTech startups looking to scale or modernize
                    their digital learning ecosystem.
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
