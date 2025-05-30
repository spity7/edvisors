"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section7() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section className="section-box box-faqs-4">
        <div className="container">
          <div className="box-faqs-inner">
            <div className="text-center">
              {" "}
              <span className="btn btn-brand-4-sm fw-bold">
                Frequently Asked Questions
              </span>
              <h2 className="heading-2 mb-20 mt-20">
                Do you have any questions?
              </h2>
            </div>
            <div className="box-faqs-inner-4">
              <div
                className="accordion accordion-flush accordion-style-2"
                id="accordionFAQS"
              >
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingOne"
                    onClick={() => handleClick(1)}
                  >
                    <button
                      className={
                        isActive.key == 1
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is Edvisors and who is it for?
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseOne"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      <p>
                        Edvisors is a modern educational platform designed for
                        students, educators, and institutions seeking
                        innovative, tech-driven learning experiences. Whether
                        you're looking to enhance your teaching, streamline
                        administration, or access high-quality learning tools,
                        Edvisors has something for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingTwo"
                    onClick={() => handleClick(2)}
                  >
                    <button
                      className={
                        isActive.key == 2
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Do I need technical skills to use Edvisors tools?
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseTwo"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      Not at all. Edvisors is built to be user-friendly and
                      intuitive. Our dashboard and tools are designed for easy
                      navigation — no coding or advanced tech skills required.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingThree"
                    onClick={() => handleClick(3)}
                  >
                    <button
                      className={
                        isActive.key == 3
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Can Edvisors support remote and hybrid learning?
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseThree"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      Yes. Edvisors provides powerful features that support
                      online, in-person, and hybrid learning environments —
                      including real-time collaboration, progress tracking, and
                      resource sharing.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="flush-headingFour"
                    onClick={() => handleClick(4)}
                  >
                    <button
                      className={
                        isActive.key == 4
                          ? "accordion-button "
                          : "accordion-button collapsed"
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      How does Edvisors help improve learning outcomes?
                    </button>
                  </h2>
                  <div
                    className={
                      isActive.key == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    id="flush-collapseFour"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      Through AI-driven insights, personalized feedback, and
                      adaptive learning tools, Edvisors helps educators tailor
                      their approach and students stay on track — leading to
                      better engagement and improved results.
                    </div>
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
