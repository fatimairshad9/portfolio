import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Divider, Button, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

interface CaseStudyData {
  title: string;
  role: string;
  company: string;
  duration: string;
  techStack: string;
  overview: string;
  contribution: string[];
  challenges: string;
  outcome: string;
  link: string;
}

const caseStudies: Record<string, CaseStudyData> = {
  akrio: {
    title: "Akrio — Accounting Platform for SMEs",
    role: "Front-End Developer & QA Engineer",
    company: "More Than Accountant",
    duration: "1.5+ Years",
    techStack: "React, Next.js, Prisma, PostgreSQL, Ant Design, AWS, Cypress, Postman, Jira",
    overview:
      "Akrio is a web-based accounting platform designed for SMEs, offering automation of financial processes through OCR technology and real-time data synchronization. I contributed as both a Front-End Developer and QA Engineer to ensure the platform was not only visually seamless but also functionally reliable and bug-free.",
    contribution: [
      "Developed responsive, interactive dashboards using React and Ant Design.",
      "Integrated real-time synchronization for accounting and document data.",
      "Conducted manual testing and wrote beginner-level automation test scripts.",
      "Collaborated closely with backend developers to verify API responses and data integrity.",
      "Managed QA processes —understanding requirments, writing test cases, logging bugs, and verifying fixes.",
    ],
    challenges:
      "Ensuring application stability during OCR extraction and real-time synchronization while maintaining consistent UI/UX performance.",
    outcome:
      "Delivered a stable, high-performance platform that improved SMEs' financial workflow accuracy and reduced manual effort, ensuring quality through structured testing and QA validation.",
    link: "https://akrio.com/auth/signin",
  },
  hrms: {
    title: "HRMS — Human Resource Management System",
    role: "Front-End & Back-End Developer",
    company: "More Than Accountant",
    duration: "1 Year",
    techStack: "React, Node.js, Express, PostgreSQL, Ant Design",
    overview:
      "HRMS automates employee management, attendance tracking, and HR workflows within the organization.",
    contribution: [
      "Built complete CRUD modules for employees, departments, and payroll.",
      "Developed both front-end (React) and back-end (Node.js + Express) logic.",
      "Integrated PostgreSQL database for secure data storage and management.",
      "Implemented authentication, role-based access control, and protected routes.",
      "Optimized performance and ensured smooth UI experience across all modules.",
    ],
    challenges:
      "Building and securing APIs while maintaining efficient data flow between front-end and database.",
    outcome:
      "Improved HR efficiency through automation, reducing manual workload and enhancing data visibility across departments.",
    link: "#",
  },

  employeeManagement: {
    title: "Employee Management System",
    role: "Full Stack Developer",
    company: "Personal Project",
    duration: "—",
    techStack: "React, Node.js, Express, MongoDB",
    overview:
      "A personal project to practice full-stack development concepts by building a role-based employee management application.",
    contribution: [
      "Developed both front-end and back-end from scratch.",
      "Created authentication system (login, signup, JWT) and role-based routing.",
      "Implemented CRUD operations for employee data with secure APIs.",
      "Used MongoDB for flexible data modeling and storage.",
      "Focused on learning data flow, API integration, and full-stack logic.",
    ],
    challenges:
      "Implementing secure role-based authorization and managing data consistency between client and server.",
    outcome:
      "Built a fully functional full-stack project demonstrating strong understanding of authentication, CRUD logic, and access management.",
    link: "#",
  },
};

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const data = caseStudies[id || ""];

  if (!data) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <Title level={3}>Case study not found.</Title>
        <Button type="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f9fafb, #eef3f9)",
        padding: "80px 20px",
      }}
    >
      <Card
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px",
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
          style={{ marginBottom: 24, borderRadius: 24 }}
        >
          Back
        </Button>

        <Title level={2} style={{ marginBottom: 12 }}>
          {data.title}
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 15 }}>
          <strong>Role:</strong> {data.role} <br />
          <strong>Company:</strong> {data.company} <br />
          <strong>Duration:</strong> {data.duration} <br />
          <strong>Tech Stack:</strong> {data.techStack}
        </Paragraph>

        <Divider />

        <Title level={3}>Overview</Title>
        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          {data.overview}
        </Paragraph>

        <Title level={3}>My Contribution</Title>
        <ul style={{ lineHeight: 1.8, fontSize: 15, color: "#444" }}>
          {data.contribution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Title level={3}>Challenges</Title>
        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          {data.challenges}
        </Paragraph>

        <Title level={3}>Outcome</Title>
        <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
          {data.outcome}
        </Paragraph>

        <Divider />

        {data.link !== "#" && (
          <Paragraph>
            🔗{" "}
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1677ff", fontWeight: 500 }}
            >
              Visit Project
            </a>
          </Paragraph>
        )}
      </Card>
    </motion.div>
  );
};

export default CaseStudy;
