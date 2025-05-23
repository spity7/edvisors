import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function BreadCrumb({ title }) {
  return (
    <div className="aximo-breadcrumb">
      <div className="container">
        <h1
          className="post__title"
          style={{
            background:
              "linear-gradient(90deg, #0088ff 0%, #92FE9D 50%, #fe0000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h1>
        <nav className="breadcrumbs">
          {/* <ul className="rt-mb-20">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page"> {title}</li>
          </ul> */}
          <p
            className="text-white f-size-30 font-semibold mt-4"
            // style={{
            //   background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            🚀 Check Our Robotics Website:{" "}
            <a
              href="https://boxmindacademy.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition-colors duration-300"
              style={{
                background: "linear-gradient(90deg, #048aff 0%, #58f7ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              boxmindacademy.ai{" "}
              <FaExternalLinkAlt
                style={{ display: "inline", marginLeft: "5px" }}
              />
            </a>
          </p>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
