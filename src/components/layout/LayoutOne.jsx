import { Outlet } from "react-router-dom";
import Footer from "../home-five/footer";
import Header from "../home-three/header";
function LayoutOne() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutOne;
