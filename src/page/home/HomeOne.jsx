import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/new/home/hero";
import Projects from "../../components/home-one/projects";
// import Services from "../../components/home-one/services";
import Services from "../../components/new/home/services";
import Services2 from "../../components/new/home/services2";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import Counter from "../../components/new/home/counter";
import Faq from "../../components/home-five/faq";
import Contact from "../../components/home-three/contact";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "EdTech Solutions",
    description:
      "Empowering schools and educators with tailored educational technology (EdTech) solutions that enhance teaching, learning, and school operations.",
    icon: "icon-design-tools",
    link: "service/ed-tech-solutions",
  },
  {
    id: crypto.randomUUID(),
    title: "AI Solutions",
    description:
      "Delivering cutting-edge Artificial Intelligence (AI) solutions tailored to the needs of educational institutions.",
    icon: "icon-branding",
    link: "service/ai-solutions",
  },
  {
    id: crypto.randomUUID(),
    title: "Educational Consulting",
    description:
      "providing expert educational consulting services to help schools grow, innovate, and excel.",
    icon: "icon-web",
    link: "service/educational-consulting",
  },
  {
    id: crypto.randomUUID(),
    title: "Competitions & Webinars",
    description:
      "We bring students, educators, and thought leaders together to exchange ideas, showcase talents, and engage with global educational trends.",
    icon: "icon-design-thinking",
    link: "service/competitions-webinars",
  },
];

// const teamsData = [
//   {
//     id: crypto.randomUUID(),
//     name: "Andrew Mark",
//     designation: "Creative Director",
//     img: Team1Img,
//   },
//   {
//     id: crypto.randomUUID(),
//     name: "Jack Taylor",
//     designation: "Senior Designer",
//     img: Team2Img,
//   },
//   {
//     id: crypto.randomUUID(),
//     name: "Martine Joy",
//     designation: "Project Manager",
//     img: Team3Img,
//   },
//   {
//     id: crypto.randomUUID(),
//     name: "Adam Straw",
//     designation: "Web Developer",
//     img: Team4Img,
//   },
// ];

function HomeOne() {
  return (
    <>
      <Hero />
      <Counter />
      <Services services={servicesData} />
      <Services2 />
      <Faq />
      <Contact />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <WhyChooseUs /> */}
      {/* <Testimonial /> */}
      {/* <AutoSlider /> */}
      {/* <Teams teams={teamsData} /> */}
    </>
  );
}

export default HomeOne;
