import React from "react";
import { Card, Typography } from "antd";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Paragraph } = Typography;

const blogs = [
  {
    slug: "api-integration",
    image: "/api-integration.jpg",
    date: "Oct 22, 2024",
    title: "Integrating APIs in React — Clean Patterns and Error Handling",
    description:
      "Learn how to integrate APIs cleanly in React and manage errors effectively.",
  },
  {
    slug: "react-mistakes",
    image: "/react-mistakes.png",
    date: "Oct 18, 2024",
    title: "10 Common Mistakes Beginners Make in React (How to Fix Them)",
    description:
      "Avoid common pitfalls in React development and follow best practices for cleaner code.",
  },
  {
    slug: "component-reusability",
    image: "/component-reusability.png",
    date: "Oct 12, 2024",
    title: "How I Improved My Component Reusability in React",
    description:
      "Learn how to write modular and reusable components that scale across projects.",
  },
  {
    slug: "postman-tips",
    image: "/postman-tips.png",
    date: "Oct 30, 2024",
    title: "Postman Tips Every QA Engineer Should Know",
    description:
      "Speed up your API testing workflow with these essential Postman tips and automation tricks.",
  },
  {
    slug: "qa-chrome-extensions",
    image: "/qa-chrome-extensions.jpg",
    date: "Oct 30, 2024",
    title: "Top 10 Chrome Extensions for QA Testers",
    description:
      "Discover top Chrome extensions to boost testing and debugging efficiency.",
  },
];

const BlogsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="blogs"
      style={{
        padding: "60px 15px",
        background: "linear-gradient(to right, #f9f9ff, #f0faff)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Title
          level={2}
          style={{
            marginBottom: 10,
            fontSize: "clamp(22px, 4vw, 32px)",
          }}
        >
          Blogs
        </Title>

        <Paragraph
          style={{
            color: "#888",
            marginBottom: 40,
            fontSize: "clamp(14px, 2vw, 16px)",
            padding: "0 10px",
          }}
        >
          Explore my latest articles about React, front-end and quality assurance
          development best practices.
        </Paragraph>

        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ padding: "0 10px" }}
            >
              <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
                <Card
                  hoverable
                  cover={
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  }
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    margin: "10px 0",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-6px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Paragraph style={{ fontSize: 13, color: "#888" }}>
                    {blog.date}
                  </Paragraph>
                  <Title
                    level={4}
                    style={{
                      marginBottom: 8,
                      fontSize: "clamp(16px, 3vw, 20px)",
                    }}
                  >
                    {blog.title}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "clamp(13px, 2vw, 15px)",
                      color: "#666",
                    }}
                  >
                    {blog.description}
                  </Paragraph>
                </Card>
              </Link>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogsSection;
