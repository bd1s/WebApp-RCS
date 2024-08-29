import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DemandeTable from './DemandeTable';
import DemandeForm from './DemandeForm';

const DemandesPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={isFormVisible ? 8 : 12}>
          <DemandeTable />
        </Col>
        {isFormVisible && (
          <Col xs={4}>
            <DemandeForm />
          </Col>
        )}
      </Row>
      <Button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </Button>
    </Container>
  );
};

export default DemandesPage;
