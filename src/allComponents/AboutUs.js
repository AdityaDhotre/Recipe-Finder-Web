import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';

const { Title, Text } = Typography;

// Page to introduce the team
const TeamPage = () => {
  return (
    <div>
      
      <div style={{ backgroundColor: '#4d63d1', padding: '20px 0' }}>
        {/* Brief about the company */}
        <Title style={{ color: 'white', textAlign: 'center' }}>Our Energetic Team</Title>
        <Text style={{ color: 'white', textAlign: 'center', display: 'block' }}>
          Embark on the adventure of our exceptional team. Experience our unity as you adjust your browser window.
        </Text>
      </div>

      {/* Introduction to our committed team */}
      <Title level={2} style={{ textAlign: 'center', marginTop: '20px' }}>Meet Our Exceptional Group</Title>

      {/* Introduction to team members */}
      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card>
            <img
              src="/images/James.jpg" // Replace with your image path
              alt="James"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              {/* Profile of James */}
              <Title level={4}>James Anderson</Title>
              <Text strong>CEO & Founder</Text><br/>
              <Text>Leads with innovation, integrity, and strategic prowess, shaping industry excellence.</Text><br/>

              <Text>james@recipefinder.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        {/* Profile of Emily */}
        <Col span={6}>
          <Card>
          <img
              src="/images/Emily.jpg" // Replace with your image path
              alt="Emily"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Emily Parker</Title>
              <Text strong>Art Director</Text><br/>
              <Text>Creates visual narratives with precision and creativity, captivating audiences.</Text><br/>
              <Text>emily@recipefinder.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        {/* Profile of Benjamin */}
        <Col span={6}>
          <Card>
          <img
              src="/images/benjamin.jpg" // Replace with your image path
              alt="Benjamin"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Benjamin Hughes</Title>
              <Text strong>Designer</Text><br/>
              <Text>Merges aesthetics and functionality to create visually appealing solutions.</Text><br/>
              <Text>benjamin@recipefinder.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
          
        </Col>
      </Row>
    </div>
  );
};

export default TeamPage;
