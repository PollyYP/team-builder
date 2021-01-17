import React, { useState } from "react";
import "./Forms.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Forms(props) {
  const defaultState = { name: "", email: "", role: "" };
  const [newForm, setNewForm] = useState(defaultState);

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setForms(newForm);
  };

  return (
    <div className="forms">
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="Please type your name here"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Please type your email here"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Role
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Please type your role here"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Forms;
