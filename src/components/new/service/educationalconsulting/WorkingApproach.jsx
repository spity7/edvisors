import Single2Img from "../../../../assets/images/service3/istockphoto-487324538-612x612.jpg";
import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../animation/FadeInRight";
import MortarBoard from "../../../../assets/images/v4/mortarboard_10568898.png";

const workingApprochData = [
  {
    id: crypto.randomUUID(),
    title: "Research and Competitor Analysis",
    description:
      "Start by understanding the target audience and their needs and analyze similar products identify best practices of differentiation.",
    icon: "icon-search",
  },
  {
    id: crypto.randomUUID(),
    title: "User Interface Implementation",
    description:
      "Translate the finalized UI design into actual code or design, elements, assets, depending on the platform (web, mobile, etc.).",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Launch and Post-Launch",
    description:
      "Prepare for the product's launch, and gather user feedback after the product is live and make iterative improvements user data.",
    icon: "icon-start-up",
  },
];
function WorkingApproach() {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-1 order-lg-1">
        <FadeInRight className="aximo-service-details-thumb2 ">
          <img src={Single2Img} alt="service" />
        </FadeInRight>
      </div>
      <div className="col-lg-6">
        <div className="aximo-default-content">
          <h2>
            <span className="aximo-title-animation">
              Global Expertise
              <span className="aximo-title-icon">
                <img src={MortarBoard} alt="star" />
              </span>
            </span>
          </h2>
          <p>
            Our consultants have worked with schools and education ministries
            across the USA, MENA region, and Africa, with a deep understanding
            of both local context and international best practices.
          </p>
        </div>
        {/* <div className="aximo-our-approach">
          {workingApprochData.map((item) => (
            <div className="aximo-iconbox-wrap5" key={item.id}>
              <div className="aximo-iconbox-icon5">
                <i className={`${item.icon}`}></i>
              </div>
              <div className="aximo-iconbox-data5">
                <h3>{item.title}:</h3>
                <div className="aximo-user-interface">
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default WorkingApproach;
