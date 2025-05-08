import CountUp from "react-countup";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../../animation/FadeInStaggerTwo";
function Counter() {
  return (
    <div
      className="aximo-counter-section dark-bg"
      style={{ paddingTop: 20, paddingBottom: 20 }}
    >
      <div className="container">
        <div className="aximo-counter-title">
          <p className="fs-2">Our results speak for our ability to succeed</p>
        </div>

        <FadeInStaggerTwo className="aximo-counter-wrap3 col-lg-11">
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <span className="aximo-counter">
                <CountUp end={10} duration={3} redraw={true} enableScrollSpy />
              </span>
              +
            </h2>
            <p>Years of experience</p>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <span className="aximo-counter">
                <CountUp end={15} duration={3} redraw={true} enableScrollSpy />
              </span>
              +
            </h2>
            <p>Countries Reached</p>
          </FadeInStaggerTwoChildren>
          {/* <FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={60} duration={3} redraw={true} enableScrollSpy />
							</span>
							m
						</h2>
						<p>Traffic Generated</p>
					</FadeInStaggerTwoChildren> */}
          <FadeInStaggerTwoChildren className="aximo-counter-data3">
            <h2>
              <span className="aximo-counter">
                <CountUp end={98} duration={3} redraw={true} enableScrollSpy />
              </span>
              %
            </h2>
            <p>Client satisfaction score</p>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </div>
  );
}

export default Counter;
