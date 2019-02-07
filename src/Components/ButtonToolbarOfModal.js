import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ButtonToolbarOfModal = (props) => {
  return (
    <>
      <Button variant="secondary" type="submit" form="myForm" value="Submit" onClick={props.addRecipeButModal}>
        {props.addButHeader}
      </Button>
      <Button variant="outline-warning" onClick={props.handleClose}>
        <FontAwesomeIcon icon="times" />
      </Button>
    </>
  );
}

export default ButtonToolbarOfModal;
