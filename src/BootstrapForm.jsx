import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

const BootstrapForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    complaintID: "",
    locationID: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <Container className='mt-4'>
      <h2>React Bootstrap Form</h2>
      {submitted && (
        <Alert variant='success'>Form submitted successfully!</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your address'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} className='mb-3' controlId='formLocationID'>
            <Form.Label>Location ID</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Location ID'
              name='locationID'
              value={formData.locationID}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} className='mb-3' controlId='formComplaintID'>
            <Form.Label>Complaint ID</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Complaint ID'
              name='complaintID'
              step='1'
              value={formData.complaintID}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BootstrapForm;
