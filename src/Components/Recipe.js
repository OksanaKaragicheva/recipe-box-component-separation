import React from 'react';
import ButtonToolbarOfRecipe from '../Components/ButtonToolbarOfRecipe';

import { Button } from 'react-bootstrap';
//import { ButtonToolbar } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

const Recipe = (props) => {
  return (
    <div>
     <Button
      onClick={() => props.handleCollapse(props.index)}
      aria-controls={`collapse${props.index}`}
      aria-expanded={JSON.parse(props.recipe.isRecipeCollapsed)}
      variant="secondary"
      block
      style={{"marginTop": "5px", "marginBottom": "10px"}}
     >
       {props.recipe.title}
     </Button>
     <Collapse in={JSON.parse(props.recipe.isRecipeCollapsed)}>
       <div id={`collapse${props.index}`}>
         {props.recipe.ingredients}
       <ButtonToolbarOfRecipe
        index={props.index}
        openCardForEdit={props.openCardForEdit}
        delete={props.delete}
       />
       </div>
     </Collapse>
    </div>
  );
}

export default Recipe;
