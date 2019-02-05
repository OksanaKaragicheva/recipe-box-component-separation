import React from 'react';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

const FormInModal = (props) => {
 return (
     <Form
     id="myForm"
       noValidate
       validated={props.validated}
       onSubmit={e => props.onSubmit(e)}
     >
         <Form.Group controlId="validationCustom01">
           <Form.Label>Recipe title</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="Recipe title"
           />
           <Form.Control.Feedback type="invalid">This field must not be empty!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group controlId="validationCustom02">
           <Form.Label>Ingredients</Form.Label>
           <Form.Control
             required
             as="textarea"
             type="text"
             placeholder="Ingredients"
           />
           <Form.Control.Feedback type="invalid">This field must not be empty!</Form.Control.Feedback>
         </Form.Group>
     </Form>
   );
 }
 export default FormInModal;
