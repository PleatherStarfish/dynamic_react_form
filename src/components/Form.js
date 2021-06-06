import App from "../App";
import React, {useEffect, useState} from "react";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import FormState from '../data/FormState.js'
import _ from 'lodash';
import moment from 'moment'


function MainForm() {

    // Set initial state from array
    const [formContent, setFormContent] = useState(FormState);
    const [formFeedback, setFormFeedback] = useState({});
    const [formGroups, setFormGroups] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i< event.target.length; i++) {

            // Check if target is checkbox
            if (event.target[i].type == "date") {
                setFormFeedback((prevState) => ({...prevState, [event.target[i].id]: moment(event.target[i].value, 'YYYY-MM-DD').toDate()}));
            } else if (event.target[i].type !== 'checkbox') {
                setFormFeedback((prevState) => ({...prevState, [event.target[i].id]: event.target[i].value}));
                console.log('date')
            }
            else {
                setFormFeedback((prevState) => ({...prevState, [event.target[i].id]: event.target[i].checked}));
            }
        }
    };

    useEffect(() => {
        const formGroupsToRender = formContent.map((value, index) => (
            <>
                {(!_.has(value, 'conditional') || value.conditional.show_if(formFeedback[value.conditional.name])) &&

                <Form.Group controlId={value.name}>

                    {value.type !== "checkbox"
                        ? <Form.Label className="main-form-label sr-only">{value.human_label}</Form.Label>
                        : <Form.Label className="main-form-label">{value.human_label}</Form.Label>}

                    <Form.Control type={value.type} placeholder={value.human_label} />
                </Form.Group>
                }

            </>
        ));
        setFormGroups([...formGroupsToRender])
        console.log(formFeedback)

    }, [formFeedback]);

    return (
        <>
        <Form onSubmit={handleSubmit}>
            {formGroups.length > 0 ? formGroups : <Alert key="wait-alert" variant="primary">Please wait a moment while we look up your form.</Alert>}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}




export default MainForm;