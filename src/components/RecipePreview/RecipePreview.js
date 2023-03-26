import React from 'react';
import { Card, Grid, Typography, List, ListItem, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material/'

function RecipePreview({ recipeObj }) {

  return (
    <Card sx={{p: 4}}>
        <Grid container>
            <Grid item xs={12} fullwidth="true">
                <Typography fontSize={24} textAlign="center">
                    {recipeObj.title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography textAlign="left">
                    {recipeObj.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>Ingredients</Typography>
                <Grid container>
                    {recipeObj.ingredients.map(item => {
                        return <Grid item xs={6}>
                            <ListItem sx={{ display: 'list-item' }}>
                                {item}
                            </ListItem>
                        </Grid>
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography>Directions</Typography>
                <List>
                    {recipeObj.directions.map(item => {
                        return <ListItem sx={{ display: 'list-item' }}>{item}</ListItem>
                    })}
                </List>
            </Grid>
            <Grid item xs={12}>
                <Typography>Nutrition</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Fat</TableCell>
                            <TableCell align="center">Carbs</TableCell>
                            <TableCell align="center">Protein</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {recipeObj.nutrition.map(item => {
                                return <TableCell align="center">{item}</TableCell>
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    </Card>
  );
}

export default RecipePreview;