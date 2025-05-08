import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="aximo-counter-wrap2">
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={10} duration={5} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Years of experience</p>
      </div>
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={15} duration={5} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Countries Reached</p>
      </div>
      <div className="aximo-counter-data2">
        <h2>
          <span className="aximo-counter">
            <CountUp end={98} duration={5} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p>Client Satisfaction Score</p>
      </div>
    </div>
  );
}

export default AboutCounter;
