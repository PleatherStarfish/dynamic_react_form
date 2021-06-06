import App from "../App";
import React, {useState} from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import FormState from '../data/FormState.js'


function MainForm() {

    // Set initial state from array
    const [formContent, setFormContent] = useState(FormState);

    const formGroupsToRender = formContent.map((value, index) => (
        <>
            <Form.Group controlId={value.name}>
                <Form.Label className="main-form-label sr-only">{value.human_label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.human_label}/>
            </Form.Group>
        </>
    ));

    return (
        <Form>
            {formGroupsToRender.length > 0 ? formGroupsToRender : <Alert key="wait-alert" variant="primary">Please wait a moment while we look up your form.</Alert>}
        </Form>
    )
}




export default MainForm;