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
                  className="btn btn-border-brand-4 text-linear-3"
                  href="/about"
                >
                  About Us
                </Link>
                <h3 className="heading-2 neutral-0 mt-20 mb-20">
                  Empower Your Growth with Proven Digital Solutions
                </h3>
                <p className="text-lg neutral-200 mb-35">
                  Since 2010, Edvisors has been building powerful digital
                  experiences — from responsive websites to custom CRM tools —
                  helping schools, real estate agencies, and nonprofits thrive
                  online.
                </p>
                <div className="card-lead-list">
                  <div className="item-lead">
                    <div className="card-lead">
                      <div className="card-image">
                        <img
                          src="/assets/imgs/page/homepage3/discover.svg"
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
                          src="/assets/imgs/page/homepage3/discover.svg"
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
                  Whether you're looking to streamline your operations, engage
                  your audience, or boost your brand, Edvisors brings two
                  decades of expertise to every project. Let us transform your
                  ideas into impact.
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
