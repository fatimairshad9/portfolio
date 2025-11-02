import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Front-End Development",
    description:
      "I build modern, responsive, and optimized web interfaces using React, Next.js, and Ant Design. My focus is on performance, accessibility, and delivering a smooth user experience across all devices.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "I ensure application reliability through manual and automation testing. I focus on identifying bugs, improving functionality, and maintaining product quality throughout the development lifecycle.",
  },
  {
    title: "Back-End Development",
    description:
      "I develop scalable and secure server-side applications using Node.js and Express, with efficient database management through PostgreSQL. I also work on API development and system integration to support robust front-end experiences.",
  },
];


// Animation when card enters viewport
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesSection: React.FC = () => {
  return (
    <div id="services" style={{ padding: "80px 5px", background: "linear-gradient(to right, #f9f9ff, #f0faff)", margin:'30px' }}>
      <Row gutter={[60, 40]} align="middle" justify="center">
        {/* LEFT SIDE */}
        <Col xs={24} md={10}>
          <Title level={1} style={{ fontWeight: 700 }}>
            What I do?
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#6b7280" }}>
           I specialize in building clean, responsive, and user-friendly web applications using modern technologies like React, Next.js, and Ant Design. Alongside front-end development, I ensure product quality through manual and automation testing, delivering reliable and efficient solutions. My goal is to create seamless digital experiences that combine functionality, performance, and design precision.
          </Paragraph>
          <Paragraph style={{ fontSize: "16px", color: "#6b7280" }}>
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </Paragraph>
          <Button
            type="primary"
            shape="round"
            size="large"
            href="#contact"
            style={{
              background: "linear-gradient(90deg, #7B2FF7, #F107A3)",
              border: "none",
              marginTop: 20,
            }}
          >
            Say Hello!
          </Button>
        </Col>

        {/* RIGHT SIDE */}
        <Col xs={24} md={12}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                // variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  hoverable
                  style={{
                    borderRadius: 18,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                    border: "none",
                    padding: "24px",
                    background: "white",
                    transition: "box-shadow 0.3s ease",
                  }}
                  bodyStyle={{ padding: "10px 24px" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget.style.boxShadow =
                      "0 10px 32px rgba(123, 47, 247, 0.25)"))
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.05)"))
                  }
                >
                  <Title
                    level={4}
                    style={{
                      marginBottom: 12,
                      color: "#1E1E1E",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Title>
                  <Paragraph style={{ color: "#555", margin: 0 }}>
                    {service.description}
                  </Paragraph>
                </Card>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
