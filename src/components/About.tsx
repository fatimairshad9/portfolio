import React from "react";
import { Card, Typography, Button, Divider, Row, Col, Image } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const AboutSection: React.FC = () => {
  return (
    <div
      id="about"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(to right, #f9f9ff, #f0faff)",
        margin: "30px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Card
          bordered={false}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderRadius: 20,
            padding: "40px 30px",
            boxShadow: "0 10px 32px rgba(0,0,0,0.08)",
            background: "white",
          }}
        >
          <Row gutter={[30, 30]} align="middle" justify="center">
            {/* LEFT — Image Section */}
            <Col xs={24} sm={10} style={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/person.jpg"
                  alt="Fatima Irshad"
                  style={{
                    width: "80%",
                    maxWidth: 260,
                    height: "auto",
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                  preview={false}
                />
              </motion.div>
            </Col>

            {/* RIGHT — About Text Section */}
            <Col xs={24} sm={14}>
              <Title
                level={2}
                style={{
                  color: "#7B2FF7",
                  marginBottom: 20,
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                About Me
              </Title>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
                I am a dedicated <b>Front-End Developer</b> and <b>QA Engineer</b> with a strong focus on building responsive, user-centered web applications and ensuring high product quality through thorough testing and automation. Currently, I’m part of More Than Accountant, contributing for over 1.5 years to intuitive interfaces and reliable system performance.
              </Paragraph>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
                My journey into tech began with a creative foundation in <b>design</b>, which naturally evolved into web development as I discovered my passion for coding and problem-solving. Over time, I’ve expanded my skills from PHP, HTML, CSS, Bootstrap, and JavaScript to modern frameworks like React, Next.js, and Ant Design for elegant, scalable UI.
              </Paragraph>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
                Driven by curiosity and a commitment to <b>continuous growth</b>, I aim to bridge the gap between design, development, and quality assurance to deliver seamless, high-performing digital experiences.
              </Paragraph>

              <Divider style={{ borderColor: "#eee" }} />

              <div style={{ textAlign: "center" }}>
                <Button
  type="primary"
  size="large"
  shape="round"
  href="#contact"
  style={{
    background: "linear-gradient(90deg, #7B2FF7, #F107A3)",
    border: "none",
    marginTop: 10,
    width: "100%",      // full width within column
    maxWidth: 220,      // max width on larger screens
    padding: "0 20px",  // horizontal padding for text
    whiteSpace: "nowrap" // prevent text from wrapping
  }}
>
  Let’s Connect
</Button>

              </div>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutSection;
