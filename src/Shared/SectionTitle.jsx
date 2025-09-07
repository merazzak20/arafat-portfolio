import React from "react";

const SectionTitle = ({ Text }) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#745272] text-transparent bg-clip-text inline-block after:content-[''] after:block after:h-[3px] after:w-20 after:bg-[#AB499A] after:mt-1 ">
        {Text}
      </h1>
    </div>
  );
};

export default SectionTitle;
