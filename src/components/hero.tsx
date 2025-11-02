import React from "react";
import { ReactTyped } from "react-typed";
import { Button } from "antd";

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
          // background: "black",
        color: "white",
      }}
    >

      {/* Name */}
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Hello, I am</h1>

      {/* Typing Animation */}
      <h2 style={{ fontSize: "1.8rem", marginTop: "10px" }}>
        <ReactTyped
  strings={[
    "Fatima Irshad",
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
    "QA Engineer",
  ]}
  typeSpeed={60}
  backSpeed={40}
  loop
/>

      </h2>

      {/* Button */}
      <Button
        type="primary"
        size="large"
        style={{
                  background: "linear-gradient(90deg, #7B2FF7, #F107A3)",
                  border: "none",
                  marginTop: 10,
                }}
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View My Work
      </Button>
    </div>
  );
};

export default Hero;
