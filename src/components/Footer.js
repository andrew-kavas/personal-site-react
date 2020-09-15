import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return(
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Andrew Kavas
          </Col>
          <Col clssName="d-flex justify-content-end p-0" md={3}>
            This site was made by Andrew Kavas
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;