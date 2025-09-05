import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-top bg-no-repeat">
      {/* Community Badge */}
      <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 rounded-full border border-green-900 bg-green-700/15 text-xs">
        <div className="flex items-center">
          <img
            className="size-7 rounded-full border-3 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2">Join community of 1m+ founders</p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Unlock Growth with Proven Business Solutions
      </h1>
      <p className="text-slate-300 md:text-base max-md:px-2 text-center max-w-2xl mt-3">
        Unlock potential with tailored strategies designed for success. Simplify
        challenges, maximize results, and stay ahead in the competitive market.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2 mt-8 text-sm">
        <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 transition rounded-full">
          Get Started
        </button>
        <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5">
          <span>Learn More</span>
          <svg
            className="mt-0.5"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25.5 4.75 4l-3.5 3.5"
              stroke="currentColor"
              strokeOpacity=".4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-14 mt-14 max-md:px-2">
        {/* Example logo */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
          alt="logo"
          className="h-8 opacity-80"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react"
          className="h-8 opacity-80"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="tailwind"
          className="h-8 opacity-80"
        />
      </div>
    </section>
  );
};

export default Hero;
