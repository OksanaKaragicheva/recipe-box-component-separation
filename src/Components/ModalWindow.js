import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FormInModal from '../Components/FormInModal';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ModalWindow = (props) => {
  return (
    <>
       <Modal show={props.show} onHide={props.handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>{props.modalHeader}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <FormInModal
         onSubmit={props.handleSubmit}
         validated={props.validated}
         title={props.title}
         ingredients={props.ingredients}
         handleTitle={props.handleTitle}
         handleIngredients={props.handleIngredients}
         />
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" type="submit" form="myForm" value="Submit" onClick={props.addRecipeButModal}>
           {props.addButHeader}
         </Button>
         <Button variant="outline-warning" onClick={props.handleClose}>
           <FontAwesomeIcon icon="times" />
         </Button>
       </Modal.Footer>
     </Modal>
    </>
    );


}

  export default ModalWindow;
