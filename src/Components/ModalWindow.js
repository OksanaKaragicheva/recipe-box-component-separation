import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormInModal from '../Components/FormInModal';
import ButtonToolbarOfModal from '../Components/ButtonToolbarOfModal';

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
         <ButtonToolbarOfModal
          addButHeader={props.addButHeader}
          addRecipeButModal={props.addRecipeButModal}
          handleClose={props.handleClose}
         />
       </Modal.Footer>
     </Modal>
    </>
  );
}

export default ModalWindow;
