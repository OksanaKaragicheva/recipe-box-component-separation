import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ButtonToolbarOfRecipe = (props) => {
  return (
    <Modal.Footer style={{"marginTop": "10px"}}>
      <Button variant="info" onClick={() => props.openCardForEdit(props.index)}>
        <FontAwesomeIcon icon="pencil-alt" />
      </Button>
      <Button variant="danger" onClick={() => props.delete(props.index)}>
        <FontAwesomeIcon icon="trash-alt" />
      </Button>
    </Modal.Footer>
  );
}

export default ButtonToolbarOfRecipe;
