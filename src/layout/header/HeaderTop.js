import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="header-top-wrap bgc-secondary">
      <div className="container-fluid">
        <div className="header-top">
          <div className="text">
            <span className="hello">Welcome to Edvisors LLC!</span> Empowering
            Education with AI & EdTech.{" "}
            <Link legacyBehavior href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
