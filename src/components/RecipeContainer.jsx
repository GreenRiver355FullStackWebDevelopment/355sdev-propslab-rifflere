import {Typography, Grid} from '@mui/material'
import Recipe from './Recipe.jsx'

export const RecipeContainer = ({recipes}) => {
    return (
        <Grid container alignItems="center" justifyContent="space-around">
            {
                recipes.map((recipe, index) => (
                    <Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions}/>
                )
            )}
        </Grid>
    )
}

export default RecipeContainer;