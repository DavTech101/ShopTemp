import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; {year} DavShop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
