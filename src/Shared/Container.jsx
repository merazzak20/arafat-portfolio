import React, { Children } from "react";

const Container = ({ Children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-14 sm:px-10 px-6">
      {Children}
    </div>
  );
};

export default Container;
