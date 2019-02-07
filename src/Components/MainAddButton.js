import React from 'react';

import { Button } from 'react-bootstrap';

const MainAddButton = (props) => {
  return (
    <>
     <div id="mainAddButton">
       <Button variant="dark" onClick={props.handleShow} size="lg" block>
         Add Recipe
       </Button>
     </div>
    </>
  );
}

  export default MainAddButton;
