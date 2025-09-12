import React from "react";
import { Mirage } from "ldrs/react";
import "ldrs/react/Mirage.css";

const Loader = () => {
  return (
    // Default values shown
    <Mirage size="60" speed="2.5" color="white" />
  );
};

export default Loader;
