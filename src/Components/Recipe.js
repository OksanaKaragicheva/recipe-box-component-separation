import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
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
       <ButtonToolbar style={{"marginTop": "10px"}}>
         <Button variant="info" onClick={() => props.openCardForEdit(props.index)}>
           <FontAwesomeIcon icon="pencil-alt" />
         </Button>
         <Button variant="danger" onClick={() => props.delete(props.index)}>
           <FontAwesomeIcon icon="trash-alt" />
         </Button>
       </ButtonToolbar>
       </div>
    </Collapse>
   </div>
  );
}

export default Recipe;
