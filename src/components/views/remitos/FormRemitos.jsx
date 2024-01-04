import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from 'react-bootstrap/Accordion';
import "./FormRemitos.css";

const FormRemitos = () => {
  return (
    <>
     <Accordion defaultActiveKey="0" className="container colorAccordion">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Nueva orden de trabajo</Accordion.Header>
        <Accordion.Body>
          
      <Form className="mt-1 container">
        <Row>
          <Col>
            <Form.Group className="">
              <Form.Label>Pedido N°</Form.Label>
              <Form.Control type="text" value={"001"}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Cliente</Form.Label>
              <Form.Control type="text" className=""></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Fecha de Recepción</Form.Label>
              <Form.Control type="date"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span>Hora de recepción</span>
              </Form.Label>
              <Form.Control type="time"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Group>
              <Form.Select>
                <option>Sector</option>
                <option value="1">Digital</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select>
                <option>Tipo de Trabajo</option>
                <option value="1">Solo impresion</option>
                <option value="2">Medio Corte</option>
                <option value="3">Corte IECHO</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select>
                <option>Modo de Color</option>
                <option value="1">Full Color</option>
                <option value="2">Blanco y Negro</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nombre del Archivo"
                className=""
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Check
                type={"radio"}
                name="Duplex"
                id="simpleFaz"
                label="Simple Faz"
              />
              <Form.Check
                type={"radio"}
                name="Duplex"
                id="dobleFaz"
                label="Doble Faz"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select>
                <option>Material</option>
                <option value="1">Ilustracion 300 gramos</option>
                <option value="2">Ilustracion 170 gramos</option>
                <option value="3">Ilustracion 115 gramos</option>
                <option value="4">Autoadhesivo</option>
                <option value="5">Opalina 240 gramos</option>
                <option value="6">Material del cliente</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Cantidad A4 (multiplicar x2/x4)</Form.Label>
              <Form.Control type="number" className=""></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Comentarios</Form.Label>
              <Form.Control type="text" className=""></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Select>
                <option value="1" className="bg-info">En Proceso</option>
                <option value="2" className="bg-warning">En Pausa</option>
                <option value="3" className="bg-danger text-white">Cancelado</option>
                <option value="4" className="bg-success text-white">Finalizado / En facturacion</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha y Hora Finalizacion</Form.Label>
              <Form.Control type="datetime-local"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Operario 1</Form.Label>
              <Form.Select>
                <option value="1">Elija Operario</option>
                <option value="2">Carlos Avellaneda</option>
                <option value="3">Diego Martinez</option>
                <option value="4">Jonathan Tello</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Operario 2</Form.Label>
              <Form.Select>
                <option value="1">N/A</option>
                <option value="2">Carlos Avellaneda</option>
                <option value="3">Diego Martinez</option>
                <option value="4">Jonathan Tello</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Operario 3</Form.Label>
              <Form.Select>
                <option value="1">N/A</option>
                <option value="2">Carlos Avellaneda</option>
                <option value="3">Diego Martinez</option>
                <option value="4">Jonathan Tello</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Button type="submit" className="bg-success">
            Grabar Pedido
          </Button>
        </Row>
          <hr />
      </Form>
      <section className="mt-3 mb-3 d-flex justify-content-center">
        <Button type="exit" className="bg-danger w-50">
          Salir
        </Button>
      </section>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
};

export default FormRemitos;
