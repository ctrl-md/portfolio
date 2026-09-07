import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCarousel from "./components/ProjectCarousel";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <ProjectCarousel />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
