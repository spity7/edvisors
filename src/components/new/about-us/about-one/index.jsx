import CheckImg from "../../../../assets/images/v7/check.png";
import ThumbImg from "../../../../assets/images/v7/thumb1.png";
import FadeInLeft from "../../../animation/FadeInLeft";
function AboutOne() {
  return (
    <div
      className="section aximo-section-padding2"
      style={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <FadeInLeft className="aximo-content-thumb ">
              <img src={ThumbImg} alt="Thumb" />
            </FadeInLeft>
          </div>
          <div className="col-lg-6">
            <div className="aximo-default-content bricolage-font">
              <h2>Our Values</h2>
              {/* <p>
                We conduct thorough market research to comprehend our target
                audience, industry trends, and competitors. This data serves as
                the foundation for creating effective advertising strategies.
              </p> */}
              <div className="aximo-list-icon2">
                <ul>
                  <li>
                    <img src={CheckImg} alt="check mark" />
                    <span>Innovation: </span>We believe in creative
                    problem-solving and forward-thinking approaches to
                    education.
                  </li>
                  <li>
                    <img src={CheckImg} alt="check mark" />
                    <span>Integrity:</span> We prioritize honesty, transparency,
                    and ethical decision-making.
                  </li>
                  <li>
                    <img src={CheckImg} alt="check mark" />
                    <span>Equity:</span> We are committed to inclusive learning
                    that reaches every student.
                  </li>
                  <li>
                    <img src={CheckImg} alt="check mark" />
                    <span>Excellence:</span> We deliver high-quality solutions
                    that meet real educational needs.
                  </li>
                  <li>
                    <img src={CheckImg} alt="check mark" />
                    <span>Global Citizenship:</span> We promote cross-cultural
                    understanding and collaboration through learning.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
