import React from "react";
import { Card, Typography, Button } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const projects = [
  {
    title: "Akrio - Accounting Platform",
    subtitle: "Front-End Development",
    description:
      "Developed a web-based accounting platform for SMEs with advanced OCR, real-time synchronization, and document history tracking using React, Next.js, Prisma, and PostgreSQL.",
    image: "/Akirologo.jpg",
    link: "/case-studies/akrio",
  },
  {
    title: "HRMS - Human Resource Management System",
    subtitle: "Full Stack Development",
    description:
      "Built and maintained an HRMS system at More Than Accountant, handling both front-end and back-end tasks including employee management, payroll tracking, and data integration.",
    image: "/hrms-logo.png",
    link: "/case-studies/hrms",
  },
  {
    title: "Employee Management System",
    subtitle: "Full Stack Development",
    description:
      "Created a role-based access management system as a personal project to strengthen my understanding of front-end and back-end integration, focusing on authentication and authorization flows.",
    image: "/Connect.png",
    link: "/case-studies/employeeManagement",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "60px 10px",
        background: "linear-gradient(to right, #f9f9ff, #f0faff)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ marginBottom: 40, color: "#111" }}>
          My Projects
        </Title>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              style={{
                flex: "1 1 300px",
                maxWidth: 350,
                minWidth: 280,
              }}
            >
              <Card
                hoverable
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  background: "white",
                  padding: "16px",
                }}
                cover={
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                }
              >
                <div style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#888",
                      letterSpacing: 1,
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </Text>

                  <Title
                    level={4}
                    style={{ marginTop: 8, marginBottom: 10, color: "#111" }}
                  >
                    {project.title}
                  </Title>

                  <Paragraph
                    style={{
                      fontSize: 14,
                      color: "#555",
                      lineHeight: 1.6,
                      minHeight: 70,
                    }}
                  >
                    {project.description}
                  </Paragraph>
                </div>

                <Button
                  type="default"
                  shape="round"
                  href={project.link}
                  target="_blank"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: 12,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Case Study <ArrowRightOutlined />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
