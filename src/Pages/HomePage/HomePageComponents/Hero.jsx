import React from "react";
import Container from "../../../Shared/Container";
import me from "../../../assets/me.png";

const Hero = () => {
  return (
    <section className="relative max-md:px-2 text-white text-sm bg-top bg-no-repeat">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center md:pl-[7%]">
          {/* left */}
          <div className="left mt-6 lg:mt-0 w-full">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
              This is Arafat Khan
            </h1>
            <p className="text-slate-300 md:text-base max-md:px-2 text-center max-w-2xl mt-3">
              Unlock potential with tailored strategies designed for success.
              Simplify challenges, maximize results, and stay ahead in the
              competitive market.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-2 mt-8 text-sm">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#AB499A] hover:bg-[#d031b6] transition rounded-full"
              >
                Contact Me !
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5"
              >
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
              </a>
            </div>
          </div>

          {/* right */}
          <div className="right w-full flex justify-center items-center">
            <div className="relative w-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0E010C]/50 rounded-xl z-10"></div>
              {/* Image */}
              <img
                className="w-full mx-auto rounded-xl relative z-0 hidden lg:block"
                src={me}
                alt="Arafat Khan"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
