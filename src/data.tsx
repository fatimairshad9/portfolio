export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
    name: string;
    percent: number;
    color: string;
}

export const portfolioData = {
  name: "Alex Vexler",
  tagline: "Building the future, one elegant component at a time.",
  roles: ["Frontend Developer", "UX Engineer", "Full-Stack Trainee", "React Specialist"],
  about: "I am a passionate and results-driven software engineer with 5 years of experience in creating highly responsive and scalable web applications. My expertise lies in the modern JavaScript ecosystem, specifically React, TypeScript, and state management via Zustand/Redux. I focus on bridging the gap between design and development, ensuring exceptional user experiences and robust code architecture. My goal is to leverage technology to solve complex business problems effectively.",
  skills: [
    { name: "React / TypeScript", percent: 95, color: "bg-purple-500" },
    { name: "Node.js / Express", percent: 80, color: "bg-green-500" },
    { name: "Tailwind CSS / Ant Design", percent: 90, color: "bg-blue-500" },
    { name: "Database (PostgreSQL/Mongo)", percent: 75, color: "bg-red-500" },
    { name: "CI/CD & Cloud", percent: 70, color: "bg-yellow-500" },
  ] as Skill[],
  projects: [
    {
      title: "Enterprise Dashboard Platform",
      description: "Developed a mission-critical data visualization platform using React, D3.js, and a GraphQL API. Improved data load times by 40% through custom memoization and caching strategies. Implemented a dynamic theme system with Ant Design.",
      technologies: ["React", "TypeScript", "Ant Design", "GraphQL", "D3.js"],
      image: "https://placehold.co/600x400/362f4b/a78bfa?text=DASHBOARD+CONCEPT",
    },
    {
      title: "E-Commerce Microservice",
      description: "Built the customer-facing front end for a scalable e-commerce site. Integrated with multiple microservices via Node.js backend. Focused on core web vitals resulting in a 30% reduction in bounce rate on mobile devices.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
      image: "https://placehold.co/600x400/362f4b/a78bfa?text=ECOMMERCE+UI",
    },
    {
      title: "Personal AI Assistant Interface",
      description: "Designed and implemented a sophisticated, conversational chat interface for an internal AI tool. Used real-time WebSocket communication and complex state management to handle multi-turn interactions.",
      technologies: ["React", "Zustand", "WebSockets", "Styled Components"],
      image: "https://placehold.co/600x400/362f4b/a78bfa?text=AI+INTERFACE",
    },
  ],
  experience: [
    {
      date: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Innovatech Solutions",
      description: "Led the development of the main SaaS product UI, mentoring 3 junior developers and establishing code standards. Introduced React Hooks best practices.",
    },
    {
      date: "2019 - 2022",
      title: "Frontend Engineer",
      company: "WebCraft Studio",
      description: "Key contributor to client projects, specializing in converting complex PSD designs into high-fidelity, semantic HTML/CSS and efficient React components.",
    },
    {
      date: "2018 - 2019",
      title: "Software Developer Intern",
      company: "TechNexus Labs",
      description: "Assisted the backend team in developing RESTful APIs and maintained database schemas.",
    },
  ],
};