import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import Title from '../Title/Title';
import { Grid } from '@mui/material'
import RecipePreview from '../RecipePreview/RecipePreview';

function App() {

  const [recipeObj, setRecipeObj] = useState()

  return (
    <Grid 
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={30}
    >
      <Grid item xs={12}>
        <Title/>
      </Grid>
      <Grid item xs={12} width="60%">
        <SearchBox onQuery={setRecipeObj}/>
      </Grid>
      {
        recipeObj && 
        <Grid item xs={4} width="75%">
          <RecipePreview recipeObj={recipeObj}></RecipePreview>
        </Grid>
      }
    </Grid>
  );
}

export default App;
