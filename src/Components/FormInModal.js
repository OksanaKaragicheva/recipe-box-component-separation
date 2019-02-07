import React from 'react';

import { Form } from 'react-bootstrap';

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
             value={props.title}
             onChange={props.handleTitle}
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
             value={props.ingredients}
             onChange={props.handleIngredients}
           />
           <Form.Control.Feedback type="invalid">This field must not be empty!</Form.Control.Feedback>
         </Form.Group>
     </Form>
   );
 }
 export default FormInModal;
