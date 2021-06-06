import App from "../App";
import React, {useEffect, useState} from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import FormState from '../data/FormState.js'
import _ from 'lodash';


function MainForm() {

    // Set initial state from array
    const [formContent, setFormContent] = useState(FormState);
    const [formFeedback, setFormFeedback] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i< event.target.length; i++) {

            // Check if target is checkbox
            if (event.target[i].type !== "checkbox") {
                setFormFeedback((prevState) => ({...prevState, [event.target[i].id]: event.target[i].value}));
            }
            else {
                setFormFeedback((prevState) => ({...prevState, [event.target[i].id]: event.target[i].checked}));
            }
        }
    };

    useEffect(() => {
        console.log(formFeedback)
    }, [formFeedback]);

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