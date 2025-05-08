import ServiceCard from "./ServiceCard";

import { Link } from "react-router-dom";
const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Robotics & AI Curriculum",
    description:
      "A future-ready program powered by Boxmind Academy, designed for K–12 students.",
    link: "program/robotics-ai-curriculum",
  },
  {
    id: crypto.randomUUID(),
    title: "Skills & Competences Curriculum",
    description:
      "Our Skills & Competences Curriculum fosters the essential soft skills, leadership traits, and emotional intelligence required for future success.",
    link: "program/skills-Competences-Curriculum",
  },
  {
    id: crypto.randomUUID(),
    title: "ESL English Language Curriculum",
    description:
      "Supports non-native English speakers from Grades 1–12 in acquiring fluency, confidence, and cultural competence in English.",
    link: "program/esl-english-language-curriculum",
  },
];
function Services2() {
  return (
    <div className="section dark-bg3 aximo-section-padding5">
      <div className="container">
        <div className="aximo-section-title light bricolage-font">
          <div className="row">
            <div className="">
              <h2 className="text-center fw-bold">Our Programs</h2>
            </div>
            {/* <div className="col-lg-5 d-flex align-items-center justify-content-end">
              <div className="aximo-title-btn">
                <Link className="aximo-default-btn blue-btn2" to="/service">
                  <span className="aximo-label-up">View All Services</span>
                  <span className="aximo-label-up">View All Services</span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Services2;
