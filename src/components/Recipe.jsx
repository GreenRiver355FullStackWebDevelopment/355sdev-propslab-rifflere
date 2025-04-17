import { Card, CardContent, CardHeader, List, ListItem, ListItemText, Divider } from '@mui/material';

const Recipe = ({name, ingredients, instructions}) => {
    return (
        <Card variant="outlined" sx={{maxWidth:"20%", bgcolor:"bisque"}}>
            <CardContent>
                <CardHeader title={name} />
                <List>
                    {
                        ingredients.map(ingredient => 
                            <ListItem disablePadding>
                              <ListItemText primary={ingredient} />
                            </ListItem>
                        )
                    }
                </List>

                <ol>
                    {
                        instructions.map(instruction => 
                            <li>{instruction}</li>
                        )
                    }
                </ol>
            </CardContent>
            
        </Card>
    )
}

export default Recipe;