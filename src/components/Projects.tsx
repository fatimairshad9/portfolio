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
        padding: "80px 20px",
        background: "linear-gradient(to right, #f9f9ff, #f0faff)",
        margin:'30px'
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: 60,
            color: "#111",
          }}
        >
          My Projects
        </Title>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
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
            >
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-betwween   ",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                 

                }}
                cover={
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "100%",  
                      height: 220,
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#888",
                      letterSpacing: 1,
                      fontSize: 13,
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </Text>

                  <Title
                    level={4}
                    style={{
                      marginTop: 10,
                      marginBottom: 12,
                      color: "#111",
                    }}
                  >
                    {project.title}
                  </Title>

                  <Paragraph
                    style={{
                      fontSize: 15,
                      color: "#555",
                      lineHeight: 1.7,
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
