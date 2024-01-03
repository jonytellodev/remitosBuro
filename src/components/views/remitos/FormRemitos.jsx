import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormRemitos = () => {
  return (
    <Form className="container-fluid d-flex flex-column gap-2 align-items-center">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="d-flex gap-1 align-items-center">
            <Form.Label>Pedido N°</Form.Label>
            <Form.Control
              type="text"
              value={"001"}
              className="w-50"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="d-flex gap-1 align-items-center">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
            type="date"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>

      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormRemitos;
