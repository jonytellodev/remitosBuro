import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Accordion from 'react-bootstrap/Accordion';

const TablaTrabajos = () => {
  return (
    <>
      <section>
        <h4>Ultimos trabajos</h4>
        <Table responsive="md">
          <thead>
            <tr>
              <th>N° Trabajo</th>
              <th>Operario</th>
              <th>Cliente</th>
              <th>Fecha Recepcion</th>
              <th>Tipo de Trabajo</th>
              <th>Estado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Operario 1</td>
              <td>Imprecont</td>
              <td>04/01/2024</td>
              <td>Medio Corte</td>
              <td>En Proceso</td>
              <td>
                <Button variant="secondary"> Ver Mas</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default TablaTrabajos;
