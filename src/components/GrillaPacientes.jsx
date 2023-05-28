import { Row } from "react-bootstrap";
import CardPaciente from "./CardPaciente";

const GrillaPacientes = ({pacientes, deleteMascota}) => {
  return (
    <Row>
      {
        pacientes.map((paciente, index)=> <CardPaciente key={index} paciente={paciente} deleteMascota={deleteMascota}></CardPaciente>)
      }
    </Row>
  );
};

export default GrillaPacientes;