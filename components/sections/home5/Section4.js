"use client";
import Link from "next/link";

export default function Section4() {
  return (
    <>
      <section className="section-box box-all-in-one box-grow">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 mb-30">
              <h2 className="display-2 neutral-1000 fw-bold text-center">
                <span className="text-background">
                  <span className="text-linear-3">Edvisors</span>
                </span>{" "}
                programs
              </h2>
            </div>
            <div className="col-lg-5 mb-30">
              <h5 className="heading-5 neutral-700">
                Take your curriculum to another level
              </h5>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-lg-5">
              <Link href="robotics-and-ai-curriculum">
                <div
                  className="card-design"
                  style={{
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="card-image">
                    <img
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/droid.png"
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="heading-2 mb-30">
                      AI & Robotics Curriculum:
                    </h3>
                    <p className="heading-5 card-desc">
                      A future-ready program powered by Boxmind Academy,
                      designed for K–12 students.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-7">
              <Link href="skills-competences">
                <div
                  className="card-design card-design-style2"
                  style={{
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="card-image">
                    <img
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/worldwide.png"
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="heading-2 mb-30">
                      Global Life Competencies Curriculum:
                    </h3>
                    <p className="heading-5 card-desc">
                      Our Global Life Competencies Curriculum fosters the
                      essential soft skills, leadership traits, and emotional
                      intelligence required for future success.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <Link href="esl-english-language">
                <div
                  className="card-design card-design-style3"
                  style={{
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="card-image">
                    <img
                      alt="Nivia"
                      src="/assets/imgs/page/homepage6/esl-alternative-cirriculum-small-scale-logo-1_ver_1-removebg-preview.png"
                    />
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
              </Link>
            </div>
            <div className="col-lg-1" />
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
            </div> */}
            {/* <div className="col-xl-4 col-lg-6">
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
              Ready to elevate your programs with our expert solutions?
              <br className="d-none d-lg-block" />
              <Link
                className="link-green"
                href="https://wa.me/13138881754"
                target="_blank"
              >
                Get in touch
              </Link>{" "}
              today to get started!
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
