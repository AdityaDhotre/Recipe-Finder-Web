import React, { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button } from 'antd';
import RecipeDetails from './RecipeDetailPage'

const { Meta } = Card;

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState(null);
  
  // API credentials
  const APP_ID = '0d747d19';
  const APP_KEY = '067b3d95722ee33e3c68676b2f8bdaf3';

  // Function to execute recipe search
  const executeSearch = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipeList(response.data.hits);
    } catch (error) {
      console.error('Error occurred while fetching recipes:', error);
    }
  };

  // Function to view recipe details
  const viewDetails = (recipe) => {
    setChosenRecipe(recipe.recipe);
  };

  // Function to navigate back to recipe search
  const navigateBack = () => {
    setChosenRecipe(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Search Input and Button */}
      {!chosenRecipe && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Input
            placeholder="Search for recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '300px', marginRight: '10px' }}
          />
          <Button type="primary" onClick={executeSearch}>Search</Button>
        </div>
      )}

      {/* Display Recipe Cards or Recipe Details */}
      {chosenRecipe ? (
        <RecipeDetails recipe={chosenRecipe} onGoBack={navigateBack} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {recipeList.map(recipe => (
            <Card
              key={recipe.recipe.uri}
              hoverable
              style={{ width: 240, margin: '10px' }}
              cover={<img alt={recipe.recipe.label} src={recipe.recipe.image} />}
            >
              <Meta title={recipe.recipe.label} description={recipe.recipe.source} />
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button type="primary" onClick={() => viewDetails(recipe)}>View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;
