import React from 'react';
import { Link } from 'react-router-dom'; // Routing import
import { Typography, List } from 'antd'; // Ant Design's Typography and List components
import '../App.css'; // Custom styles import

const { Title, Paragraph } = Typography; // Extract Typography components

const Home = () => {
  const theme = 'dark'; // Theme variable, currently unused

  return (
    <div data-testid="home-component">
      {/* Top section */}
      <div style={{ backgroundColor: '#4d63d1', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>Welcome to the Recipe Finder!</Title>
      </div>

      {/* Core content section */}
      <div className="container"> {/* Styling container div */}
        <div className="overlay"> {/* Styling overlay div */}
          <div className="text"> {/* Styling text div */}
            <Typography> {/* Component for text structure */}

              {/* Introductory paragraph */}
              <Paragraph className="paragraph">
                Recipe Radar is a groundbreaking culinary tool aimed at transforming how users find and explore recipes.
                Unlike conventional recipe platforms, Recipe Radar uses sophisticated AI algorithms to generate personalized recipe suggestions based on individual tastes, dietary needs, and cooking patterns.
              </Paragraph>

              {/* Feature list */}
              <Title level={2}>Key Features:</Title>
              <List
                bordered
                dataSource={[
                  'Tailored Recommendations',
                  'Intelligent Search Capabilities',
                  'Dietary and Allergen Filters',
                  'Interactive Cooking Guide',
                ]}
                renderItem={item => <List.Item className="list">{item}</List.Item>} // Each feature as a list item
              />

              {/* Start exploring section */}
              <Title level={2}>Explore Now:</Title>
              <Paragraph className="paragraph">
                Begin by exploring our features
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
