import { Link } from "react-router-dom";
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
        {/* <nav className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page"> {title}</li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}

export default BreadCrumb;
