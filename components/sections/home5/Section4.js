import Link from "next/link";

export default function Section4() {
  return (
    <>
      <section className="section-box box-all-in-one">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 mb-30">
              <h2 className="display-2 neutral-1000 fw-bold text-center">
                Our Programs
              </h2>
            </div>
            <div className="col-lg-5 mb-30">
              <h5 className="heading-5 neutral-700">
                Take your online presence to the next level.
              </h5>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-lg-5">
              <div className="card-design">
                <div className="card-image">
                  <img
                    alt="Nivia"
                    src="/assets/imgs/page/homepage6/ready.png"
                  />
                </div>
                <div className="card-info">
                  <h3 className="heading-2 mb-30">Robotics & AI Curriculum:</h3>
                  <p className="heading-5 card-desc">
                    A future-ready program powered by Boxmind Academy, designed
                    for K–12 students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card-design card-design-style2">
                <div className="card-image">
                  <img
                    alt="Nivia"
                    src="/assets/imgs/page/homepage6/integration.png"
                  />
                </div>
                <div className="card-info">
                  <h3 className="heading-2 mb-30">
                    Skills & Competences Curriculum:
                  </h3>
                  <p className="heading-5 card-desc">
                    Our Skills & Competences Curriculum fosters the essential
                    soft skills, leadership traits, and emotional intelligence
                    required for future success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card-design card-design-style3">
                <div className="card-image">
                  <img alt="Nivia" src="/assets/imgs/page/homepage6/fast.png" />
                </div>
                <div className="card-info">
                  <h3 className="heading-3 mb-30">
                    ESL English Language Curriculum:
                  </h3>
                  <p className="heading-5 card-desc">
                    Supports non-native English speakers from Grades 1–12 in
                    acquiring fluency, confidence, and cultural competence in
                    English.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-6">
              <div className="card-design card-design-style4">
                <div className="card-image">
                  <img
                    alt="Nivia"
                    src="/assets/imgs/page/homepage6/design.png"
                  />
                </div>
                <div className="card-info">
                  <h3 className="heading-3 mb-30">Professional design</h3>
                  <p className="heading-5 card-desc">
                    Take your online presence to the next level with my expert
                    web design and content creation services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="card-design card-design-style5">
                <div className="card-image">
                  <img
                    alt="Nivia"
                    src="/assets/imgs/page/homepage6/power.png"
                  />
                </div>
                <div className="card-info">
                  <h3 className="heading-3 mb-30">
                    Powerful software to help your business scale super fast.
                  </h3>
                </div>
              </div>
            </div> */}
          </div>
          <div className="text-center">
            <h4>
              Boost your sales with our platform.
              <br className="d-none d-lg-block" />
              <Link className="link-green" href="#">
                Contact us
              </Link>{" "}
              now for a quote
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
