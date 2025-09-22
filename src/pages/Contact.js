import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Card, Button } from 'antd';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import './Contact.css';

export default function Contact() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              I'd love to hear from you! Feel free to reach out through email.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="contact-card">
              <div className="contact-content">
                <div className="contact-icon">
                  <MailOutlined />
                </div>
                <div className="contact-details">
                  <h2 className="contact-heading">Email Me</h2>
                  <div className="contact-email-container">
                    <p className="contact-email">max[Lastname]011 [AT] gmail [DOT] com</p>
                    <p className="contact-email-note">
                      Replace brackets with symbols: [Lastname] with your last name, [AT] with @, [DOT] with .
                    </p>
                  </div>
                  <p className="contact-description">
                    Send me an email and I'll get back to you as soon as possible.
                  </p>
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    size="large"
                    onClick={() => {
                      // Create the actual email when clicked
                      const email = 'maxnicholson011@gmail.com';
                      window.location.href = `mailto:${email}`;
                    }}
                    className="contact-button"
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="contact-card message-card">
              <h2 className="message-heading">Let's Connect!</h2>
              <p className="message-text">
                Whether you have a question, want to collaborate, or just want to say hello,
                I'm always open to connecting with interesting people, projects and feedback.
              </p>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
}