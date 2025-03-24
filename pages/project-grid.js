import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName={"Our Products"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20 fs-1 fw-bold">
                  Explore Our EdTech Products
                </span>
                <h5>
                  Empowering education through AI, robotics, and interactive
                  learning tools.
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid1.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid1.jpg"
                  />
                </div>
                <div className="content">
                  <h4>AI-Powered Learning Apps</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid2.jpg"
                  />
                </div>
                <div className="content">
                  <h4>Interactive Panels & Active Boards</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid3.jpg"
                  />
                </div>
                <div className="content">
                  <h4>Robotics Kits & Learning Tools</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid4.jpg"
                  />
                </div>
                <div className="content">
                  <h4>Online Learning Platforms</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="project-more-btn text-center">
            <Link legacyBehavior href="/services">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                Explore Our Services <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
