import { Link } from "react-router-dom";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon, link } }) {
  return (
    <div
      className="aximo-iconbox-wrap"
      style={{
        boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`${link}`} className="aximo-icon">
          <img src={ArrowRightImg} alt="arrow right" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
