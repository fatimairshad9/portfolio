import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, message as antdMessage } from "antd";
import { motion } from "framer-motion";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const { Title, Paragraph } = Typography;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    emailjs
      .send(
        "service_lfkaf8k",
        "template_g7af4fo",
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "Tqu2WChP1aC6bAeVd"
      )
      .then(
        () => {
          antdMessage.success("Message sent successfully!");
          form.resetFields();
          setLoading(false);
        },
        () => {
          antdMessage.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      style={{
        padding: "60px 15px",
        background: "linear-gradient(to right, #f9f9ff, #f0faff)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ width: "100%", maxWidth: 600 }}
      >
        <Card
          bordered={false}
          style={{
            borderRadius: 20,
            padding: "30px 20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <Title level={2} style={{ color: "#1890ff", fontSize: "1.8rem" }}>
              Get In Touch
            </Title>
            <Paragraph style={{ color: "#555", fontSize: "0.95rem" }}>
              Have a question, idea, or opportunity? Let’s connect!
            </Paragraph>
          </div>

          <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your name"
                size="large"
                style={{ borderRadius: 8 }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter your email"
                size="large"
                style={{ borderRadius: 8 }}
              />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Write your message..."
                rows={5}
                style={{ borderRadius: 8 }}
              />
            </Form.Item>

            <Form.Item style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                shape="round"
                style={{
                  width: "100%",       // full width on small screens
                  maxWidth: 220,       // limit width on larger screens
                  padding: "0 20px",   // padding for text
                  whiteSpace: "nowrap", // prevent text from breaking
                }}
                loading={loading}
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactSection;
