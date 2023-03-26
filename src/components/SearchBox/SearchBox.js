import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material/'
import axios from 'axios';

function SearchBox({ onQuery }) {
  const [query, setQuery] = useState("https://www.allrecipes.com/recipe/14685/slow-cooker-beef-stew-i/");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleScrapeClick = async () => {
    const response = await axios.get(`http://localhost:3030/recette/AllRecipes?link=${query}`);
    console.log(response.data);
    onQuery(response.data)
  };

  return (
      <Box display="flex" flexDirection="row" alignItems="stretch" gap={1}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Link"
          variant="filled"
          onChange={handleQueryChange}
          multiline={false}
          fullWidth={true}
        />
        <Button variant="contained" onClick={handleScrapeClick}>Scrape</Button>
      </Box>
  );
}

export default SearchBox;