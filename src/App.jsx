import { recipes } from './data/data.js'
import { RecipeContainer } from './components/RecipeContainer.jsx'
import {Typography } from '@mui/material'

function App() {

  return (
    <>
      <Typography component="h1" variant="h4"></Typography>
      <h1> Family Recipes </h1>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App
