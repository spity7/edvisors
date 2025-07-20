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
                <div className="row">
                  <div className="accordion-item col-md-6">
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
                        What is Edvisors and what does it offer?
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
                          Edvisors is an educational solutions company dedicated
                          to transforming K–12 learning through innovative
                          programs and services, including AI, robotics, EdTech
                          integration, and global skills development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item col-md-6">
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
                        Who can benefit from Edvisors' services?
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
                        We serve K–12 schools, international academies,
                        ministries of education, educators, and students around
                        the world.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="accordion-item col-md-6">
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
                        What is the Robotics & AI Curriculum at Edvisors?
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
                        It's a hands-on, progressive K–12 program powered by
                        Boxmind Academy, integrating robotics kits, AI tools,
                        and real-world projects to build 21st-century tech
                        skills.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item col-md-6">
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
                        At what age or grade can students start the Robotics &
                        AI program?
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
                        The program is designed for Grades 1–12 with content
                        tailored for elementary, middle, and high school levels.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="accordion-item col-md-6">
                    <h2
                      className="accordion-header"
                      id="flush-headingFive"
                      onClick={() => handleClick(5)}
                    >
                      <button
                        className={
                          isActive.key == 5
                            ? "accordion-button "
                            : "accordion-button collapsed"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        What skills will students gain from the Robotics & AI
                        program?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 5
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      id="flush-collapseFive"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFAQS"
                    >
                      <div className="accordion-body">
                        Students will learn to build and code robots, apply AI
                        concepts like voice and image recognition, and solve
                        real-world problems using design thinking.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item col-md-6">
                    <h2
                      className="accordion-header"
                      id="flush-headingSix"
                      onClick={() => handleClick(6)}
                    >
                      <button
                        className={
                          isActive.key == 6
                            ? "accordion-button "
                            : "accordion-button collapsed"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        What does the Skills & Competences Curriculum cover?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 6
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      id="flush-collapseSix"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFAQS"
                    >
                      <div className="accordion-body">
                        It focuses on soft skills like critical thinking,
                        leadership, emotional intelligence, ethics, and global
                        citizenship through interactive, project-based learning.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="accordion-item col-md-6">
                    <h2
                      className="accordion-header"
                      id="flush-headingSeven"
                      onClick={() => handleClick(7)}
                    >
                      <button
                        className={
                          isActive.key == 7
                            ? "accordion-button "
                            : "accordion-button collapsed"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Is the ESL Curriculum aligned with global standards?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 7
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      id="flush-collapseSeven"
                      aria-labelledby="flush-headingSeven"
                      data-bs-parent="#accordionFAQS"
                    >
                      <div className="accordion-body">
                        Yes, it follows CEFR and WIDA guidelines, supporting
                        non-native speakers in mastering reading, writing,
                        speaking, and listening.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item col-md-6">
                    <h2
                      className="accordion-header"
                      id="flush-headingEight"
                      onClick={() => handleClick(8)}
                    >
                      <button
                        className={
                          isActive.key == 8
                            ? "accordion-button "
                            : "accordion-button collapsed"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                      >
                        Does Edvisors prepare students for English proficiency
                        exams?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 8
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      id="flush-collapseEight"
                      aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFAQS"
                    >
                      <div className="accordion-body">
                        Yes, our ESL program supports students aiming for TOEFL
                        Junior, IELTS, and similar global exams.
                      </div>
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
