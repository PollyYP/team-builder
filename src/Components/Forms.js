import React, { useState } from "react";
import "./Forms.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Forms(props) {
  const defaultState = { name: "", email: "", role: "" };
  const [inputText, setInputText] = useState(defaultState);

  const handleChange = (event) => {
    setInputText({ ...inputText, [event.target.name]: event.target.value });
  };

  const addTeam = () => {
    props.setTeams((savedTeamMember) => {
      return [...savedTeamMember, inputText];
    });
  };

  return (
    <div>
      <h3>Team Member Application</h3>
      <Form className="forms">
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              placeholder="Please type your name here"
              onChange={handleChange}
              value={inputText.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              placeholder="Please type your email here"
              onChange={handleChange}
              value={inputText.email}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleRole" sm={2}>
            Role
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="role"
              placeholder="Please type your role here"
              onChange={handleChange}
              value={inputText.role}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={addTeam}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Forms;
