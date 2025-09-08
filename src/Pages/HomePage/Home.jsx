import React from "react";
import Hero from "./HomePageComponents/Hero";
import About from "./HomePageComponents/About";
import Projects from "./HomePageComponents/Projects";
import Experience from "./HomePageComponents/Experience";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
};

export default Home;
