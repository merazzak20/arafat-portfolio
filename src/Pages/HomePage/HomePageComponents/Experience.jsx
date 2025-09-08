import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";
import Container from "../../../Shared/Container";

const Experience = () => {
  return (
    <div className="my-10">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle
            text={"Experience"}
            subTitle={"Projects That Define My Skills"}
          />
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            date="2023 - Present"
            iconStyle={{ background: "#AB499A", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
            <p>Building responsive React applications with Tailwind CSS.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            date="2020 - 2023"
            iconStyle={{ background: "#AB499A", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              BSc in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University Name
            </h4>
            <p>Studied software development and web technologies.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;
