import { Link } from "react-router-dom";
import RoundShapeImg from "../../../../assets/images/v4/round-shape.png";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../../animation/FadeInStaggerTwo";
function HeroContent() {
  return (
    <FadeInStaggerTwo className="aximo-hero-content4">
      <FadeInStaggerTwoChildren>
        <p>
          <span>IT Solution Company</span>
        </p>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <h1>
          Empowering Education with
          <span className="aximo-hero-shape-title" style={{ marginTop: 20 }}>
            AI & EdTech Solutions
          </span>
        </h1>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default HeroContent;
