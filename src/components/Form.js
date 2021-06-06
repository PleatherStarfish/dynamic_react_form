import App from "../App";
import React, {useState} from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import FormState from '../data/FormState.js'


function MainForm() {

    // Set initial state from array
    const [formContent, setFormContent] = useState(FormState);

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i< event.target.length; i++) {

            // Check if target is checkbox
            if (event.target[i].type !== "checkbox") {
                console.log(event.target[i].value)
            }
            else {
                console.log(event.target[i].checked)
            }
        }
    };

    const formGroupsToRender = formContent.map((value, index) => (
        <>
            <Form.Group controlId={value.name}>

                {value.type !== "checkbox"
                    ? <Form.Label className="main-form-label sr-only">{value.human_label}</Form.Label>
                    : <Form.Label className="main-form-label">{value.human_label}</Form.Label>}

                <Form.Control type={value.type} placeholder={value.human_label}/>
            </Form.Group>
        </>
    ));

    return (
        <Form onSubmit={handleSubmit}>
            {formGroupsToRender.length > 0 ? formGroupsToRender : <Alert key="wait-alert" variant="primary">Please wait a moment while we look up your form.</Alert>}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}




export default MainForm;