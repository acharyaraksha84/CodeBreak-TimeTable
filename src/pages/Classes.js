import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Classes.css'; // Optional for custom styles

const mockClasses = [
  { id: 1, name: '4-A', year: '2nd Year' },
  { id: 2, name: '4-B', year: '2nd Year' },
  { id: 3, name: '4-C', year: '2nd Year' },
  { id: 4, name: '6-A', year: '3rd Year' },
  { id: 5, name: '6-B', year: '3rd Year' },
];

const Classes = () => {
  return (
    <Container fluid className="py-5 mt-5 px-5">
      {/* Flexbox to center the heading */}
      <Row className="d-flex justify-content-center align-items-center mb-5">
        <Col>
          <h2 className="text-primary fw-bold text-center">Department Classes</h2>
        </Col>
      </Row>

      <Row className="g-4">
        {mockClasses.map((cls) => (
          <Col md={4} key={cls.id}>
            <Card className="shadow-lg h-100 text-center p-3" style={{ minHeight: '220px' }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="fs-3 fw-bold mb-2">{cls.name}</Card.Title>
                <Card.Text className="text-muted fs-5 mb-4">{cls.year}</Card.Text>
                <div>
                  <Link to={`/classes/${cls.name.toLowerCase()}`}>
                    <Button variant="outline-primary" size="md" className="me-2">View Timetable</Button>
                  </Link>
                  <Link to={`/classes/${cls.name.toLowerCase()}/edit`}>
                    <Button variant="primary" size="md">Edit</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-end mt-4">
        <Link to="/classes/new">
          <Button variant="success" size="lg">+ Add New Class</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Classes;
