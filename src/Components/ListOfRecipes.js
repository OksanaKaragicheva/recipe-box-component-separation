import React from 'react';

import Recipe from '../Components/Recipe';

const ListOfRecipes = (props) => {
  console.log(props.recipes);
  return (
    <>
      {props.recipes.map((recipe, index) => {
        return (
          <Recipe
          key={index}
          recipe={recipe}
          index={index}
          handleCollapse={props.handleCollapse}
          openCardForEdit={props.openCardForEdit}
          delete={props.delete}/>
        )
      })
      }
    </>
  );
}

  export default ListOfRecipes;
