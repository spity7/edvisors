import Link from "next/link";
import { Fragment } from "react";
import HiddenSidebar from "../HiddenSidebar";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const Header3 = () => {
  return (
    <Fragment>
      <header className="main-header header-three menu-white menu-absolute">
        <HeaderTop />
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/Logo Edvisors - white.png"
                        alt="Logo"
                        title="Logo"
                        width={"240"}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-auto clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <HiddenSidebar />
    </Fragment>
  );
};
export default Header3;
