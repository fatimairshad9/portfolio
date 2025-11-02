import React from "react";
import { Card, Typography, Button, Divider, Row, Col, Image } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const AboutSection: React.FC = () => {
  return (
       <div id="about" style={{ padding: "80px 5px", background: "linear-gradient(to right, #f9f9ff, #f0faff)", margin:'30px' }}>

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
            padding: "50px",
            boxShadow: "0 10px 32px rgba(0,0,0,0.08)",
            background: "white",
          }}
        >
          <Row gutter={[40, 40]} align="middle">
            {/* LEFT — Image Section */}
            <Col xs={24} md={10} style={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/person.jpg" // 👈 your image path (add your photo in public/profile.jpg)
                  alt="Fatima Irshad"
                  width={260}
                  height={260}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                  preview={false}
                />
              </motion.div>
            </Col>

            {/* RIGHT — About Text Section */}
            <Col xs={24} md={14}>
              <Title
                level={2}
                style={{
                  color: "#7B2FF7",
                  marginBottom: 20,
                }}
              >
                About Me
              </Title>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
                I am a dedicated <b>Front-End Developer</b> and <b>QA Engineer</b> with a strong focus on building responsive, user-centered web applications and ensuring high product quality through thorough testing and automation. Currently, I’m part of More Than Accountant, where I have been contributing for over 1.5 years to the development of intuitive interfaces and reliable system performance.
              </Paragraph>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
              My journey into tech began with a creative foundation in <b>design</b>, which naturally evolved into web development as I discovered my passion for coding and problem-solving. Over time, I’ve expanded my skills from basic web technologies like PHP, HTML, CSS, Bootstrap, and JavaScript to modern frameworks such as React and Next.js, along with Ant Design for creating elegant, scalable UI components.
              </Paragraph>

              <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
               Driven by curiosity and a commitment to <b>continuous growth</b>, I aim to bridge the gap between design, development, and quality assurance to deliver seamless and high-performing digital experiences.
              </Paragraph>

              <Divider style={{ borderColor: "#eee" }} />

              <Button
                type="primary"
                size="large"
                shape="round"
                href="#contact"
                style={{
                  background: "linear-gradient(90deg, #7B2FF7, #F107A3)",
                  border: "none",
                  marginTop: 10,
                }}
              >
                Let’s Connect
              </Button>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutSection;
