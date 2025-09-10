import React from "react";
import Hero from "./HomePageComponents/Hero";
import About from "./HomePageComponents/About";
import Projects from "./HomePageComponents/Projects";
import Experience from "./HomePageComponents/Experience";
import Skills from "./HomePageComponents/Skills";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
};

export default Home;
