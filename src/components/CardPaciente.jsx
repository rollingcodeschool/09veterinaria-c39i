import { Col, Card, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const CardPaciente = ({ paciente, deleteMascota }) => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card >
        <Card.Body>
          <Card.Title>{paciente.mascota}</Card.Title>
          <hr />
          <Card.Text>
            Dueño: {paciente.duenio}
            <br />
            Fecha: {paciente.fecha} Hora: {paciente.hora}
            <br />
            Sintomas: {paciente.sintomas}
          </Card.Text>
          <div className="text-end">
            <Button variant="danger" onClick={()=> deleteMascota(paciente)}>
              Borrar <XCircle />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPaciente;
