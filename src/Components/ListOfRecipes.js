import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

const ListOfRecipes = (props) => {
  return (
    <>
        <Button
          onClick={props.handleCollapse}
          aria-controls="example-collapse-text"
          aria-expanded={props.open}
        >
          click
        </Button>
        <Collapse in={props.open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            <ButtonToolbar>
              <Button variant="info">
                <FontAwesomeIcon icon="pencil-alt" />
              </Button>
              <Button variant="danger">
                <FontAwesomeIcon icon="trash-alt" />
              </Button>
            </ButtonToolbar>
          </div>
         </Collapse>
         <Button
           onClick={props.handleCollapse}
           aria-controls="example"
           aria-expanded={props.open}
         >
           click
         </Button>
         <Collapse in={props.open}>
           <div id="example">
             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
             terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
             labore wes anderson cred nesciunt sapiente ea proident.
             <ButtonToolbar>
               <Button variant="info">
                 <FontAwesomeIcon icon="pencil-alt" />
               </Button>
               <Button variant="danger">
                 <FontAwesomeIcon icon="trash-alt" />
               </Button>
             </ButtonToolbar>
           </div>
          </Collapse>
      </>
    );


}

  export default ListOfRecipes;
