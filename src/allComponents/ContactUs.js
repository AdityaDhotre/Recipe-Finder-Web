import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col } from 'antd';

const { Title } = Typography;

// Component for the Contact Us page
const ReachUsPage = () => {
  // State variables for storing form data and server response
  const [contactData, updateContactData] = useState('');
  const [responseFromServer, updateResponseFromServer] = useState('');

  // Function to handle form submission
  const processFormSubmission = () => {
    updateResponseFromServer('Thanks for contacting us! We will respond soon.');
    // Add logic here to process form submission
  };

  return (
    <div>
      {/* Section for contact */}
      <div className="about-section" style={{ backgroundColor: '#4d63d1'}}>
        {/* Heading */}
        <Title level={2} className="text-center font-weight-bold my-4">
          Connect With Us
        </Title>
        {/* Description */}
        <p className="text-center w-responsive mx-auto mb-5">
          Got any questions or concerns? Feel free to reach out. Our team is ready to help.
        </p>
      </div>
      <br />
      {/* Form for contact */}
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          {/* Form */}
          <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                {/* Input for name */}
                <Form.Item label="Your name" htmlFor="name">
                  <Input
                    id="name"
                    value={contactData}
                    onChange={(e) => updateContactData(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                {/* Input for email */}
                <Form.Item label="Your email" htmlFor="email">
                  <Input id="email" />
                </Form.Item>
              </div>
            </div>
            {/* Input for subject */}
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Subject" htmlFor="subject">
                  <Input id="subject" />
                </Form.Item>
              </div>
            </div>
            {/* Input for message */}
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Your message" htmlFor="message">
                  <Input.TextArea id="message" rows={2} />
                </Form.Item>
              </div>
            </div>
            {/* Button for form submission */}
            <Row justify="center">
              <Col>
                <Button type="primary" onClick={processFormSubmission}>
                  Send
                </Button>
              </Col>
            </Row>
            <div className="status"></div>
          </Form>
        </div>
        {/* Information for contact */}
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>New York, NY 10001, USA</p>
            </li>
            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 984 217 89</p>
            </li>
            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@recipefinder.com</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Message from server */}
      <h2 style={{ textAlign: 'center', color: 'green', marginTop: '20px' }}>{responseFromServer}</h2>
    </div>
  );
};

export default ReachUsPage;
