import React from "react";
import Container from "../../../Shared/Container";
import me from "../../../assets/me.png";
import SectionTitle from "../../../Shared/SectionTitle";

const About = () => {
  return (
    <div className="text-white mb-5" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* left */}
          <div className="left">
            <img className="w-11/12 mx-auto" src={me} alt="" />
          </div>

          {/* right */}
          <div className="right w-full">
            <div className="title mb-10">
              <SectionTitle
                text={"About Me"}
                subTitle={"A Glimpse Into My Journey."}
              ></SectionTitle>
            </div>
            <div className="info bg-zinc-800/70 p-5 rounded-md border border-[#65275b74]">
              <p className="text-justify">
                Final-year Computer Science student at UT Dallas (graduating Dec
                2025). Internship experience at BlueCiate (SMSNXT) as a Frontend
                Developer Intern.{" "}
                <span className="bg-[#AB499A]">
                  Skilled in MERN stack, Java, Python, SQL, and C++
                </span>
                . Built multiple full-stack applications including reservation,
                rental management, and DBMS projects. Looking for entry-level
                Software Engineering roles.
              </p>
              <br />
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aut expedita, deleniti voluptates hic facilis quam aperiam
                dicta. Assumenda quidem adipisci sit. Porro eos aperiam itaque,
                dicta, fuga, error velit corporis quod totam doloremque ipsa
                aspernatur quibusdam recusandae laudantium asperiores.
              </p>
              <br />
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aut expedita, deleniti voluptates hic facilis quam aperiam
                dicta. Assumenda quidem adipisci sit. Porro eos aperiam itaque,
                dicta, fuga, error velit corporis quod totam doloremque ipsa
                aspernatur quibusdam recusandae laudantium asperiores.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
