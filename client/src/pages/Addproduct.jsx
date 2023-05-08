import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom';

function Addproduct() {
  const [ten, setTen] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/add', { ten, link, type });
      console.log(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h3 className="text-center">Đăng ký sản phẩm</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Tên</Form.Label>
              <Form.Control type="text" placeholder="Tam Quoc dien nghia" value={ten} onChange={(e) => setTen(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Van, ...." value={type} onChange={(e) => setType(e.target.value)} />
            </Form.Group>
            <Button  className="login-button" onClick={handleSubmit} style={{margin:'10px'}}>Xác nhận</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Addproduct;
