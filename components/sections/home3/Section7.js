"use client";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";

export default function Section7() {
  return (
    <>
      <section className="section-box box-lead">
        <div className="container">
          <div className="box-lead-inner">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <Link
                  className="btn btn-border-brand-4 text-linear-3 fw-bold"
                  href="/about"
                  style={{
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  About Us
                </Link>
                <h3 className="heading-2 neutral-0 mt-20 mb-20">
                  Empowering Education with AI & EdTech Programs
                </h3>
                <p className="text-lg neutral-200 mb-35">
                  Edvisors LLC is dedicated to revolutionizing education through
                  innovative AI-powered programs, cutting-edge curricula, and
                  strategic consulting for institutions worldwide.
                </p>
                <div className="card-lead-list">
                  <div className="item-lead">
                    <div className="card-lead">
                      <div className="card-image">
                        <img
                          src="/assets/imgs/page/homepage3/digital.svg"
                          alt="Edvisors"
                        />
                      </div>
                      <div className="card-info">
                        <h3 className="text-22-bold">10+</h3>
                        <p className="text-md neutral-200">
                          Years of experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-lead">
                    <div className="card-lead">
                      <div className="card-image">
                        <img
                          src="/assets/imgs/page/homepage3/internet.svg"
                          alt="Edvisors"
                        />
                      </div>
                      <div className="card-info">
                        <h3 className="text-22-bold">15+</h3>
                        <p className="text-md neutral-200">Countries Reached</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg neutral-200">
                  From custom K-12 international curricula and robotics programs
                  to smart EdTech platforms and accreditation services, we help
                  schools, educators, and organizations harness the future of
                  learning.
                </p>
              </div>
              <div className="col-lg-6 mb-30 text-center text-lg-end">
                <div className="box-border-linear-3 linear-3">
                  <div className="box-border-linear-3-inner">
                    <img
                      src="/assets/imgs/page/homepage3/img-lead.png"
                      alt="Edvisors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
