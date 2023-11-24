// Skill.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../../src/App.css'; // Tus estilos personalizados

const Skill = () => {
  const handleButtonClick = (level) => {
    console.log("Selected level:", level);
    // Aquí puedes añadir la lógica que necesites al hacer clic en el botón
  };

  const levels = [
    'Pre A1', 'Pre A1.2', 'Pre A1.3', 'A1', 'A1.2', 'A1.3',
    'A2', 'A2.2', 'A2.3', 'B1', 'B1.2', 'B1.3'
  ];

  return (
    <Container fluid="md" className="skill-container">
      <Row className="justify-content-center mb-3">
        <Col xs={12} md={8} lg={6}>
          <input type="search" className="form-control mb-4" placeholder="What do you want to search?" />
        </Col>
      </Row>
      <Row className="justify-content-center g-3">
        {levels.map((level, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <Button
              variant="primary"
              className="language-level-button"
              onClick={() => handleButtonClick(level)}
            >
              {level}
            </Button>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6}>
          <Button
            variant="outline-primary"
            className="language-level-button"
            onClick={() => handleButtonClick('unknown')}
          >
            I am not sure what language level to work with, what should I do?
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
