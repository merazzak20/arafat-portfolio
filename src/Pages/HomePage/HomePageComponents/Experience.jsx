import { Chrono } from "react-chrono";

const Experience = () => {
  const items = [
    {
      title: "2021",
      cardTitle: "Frontend Developer",
      cardDetailedText: "Worked on React projects.",
    },
    {
      title: "2022",
      cardTitle: "Full Stack Developer",
      cardDetailedText: "Built MERN applications.",
    },
    {
      title: "2023",
      cardTitle: "Freelancer",
      cardDetailedText: "Worked with global clients.",
    },
  ];

  return (
    <div style={{ height: "600px" }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default Experience;
