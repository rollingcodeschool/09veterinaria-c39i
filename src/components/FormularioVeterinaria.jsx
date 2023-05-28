import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import GrillaPacientes from "./GrillaPacientes";

const FormularioVeterinaria = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("pacientes")) || [];
  const [pacientes, setPacientes] = useState(tareasLocalStorage);
  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, { mascota, duenio, fecha, hora, sintomas }]);
    e.target.reset();
  };

  const deleteMascota = (namemascota) => {
    let _pacientes = pacientes.filter((item) => {
      return item.mascota !== namemascota.mascota;
    });
    setPacientes(_pacientes);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="border border-secondary rounded p-3 mb-4"
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre de mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setMascota(e.target.value.trimStart())}
            value={mascota}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un dueño"
            onChange={(e) => setDuenio(e.target.value.trimStart())}
            value={duenio}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una fecha"
            onChange={(e) => setFecha(e.target.value.trimStart())}
            value={fecha}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una hora"
            onChange={(e) => setHora(e.target.value.trimStart())}
            value={hora}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Ingrese los sintomas"
            onChange={(e) => setSintomas(e.target.value.trimStart())}
            value={sintomas}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle /> Agregar
        </Button>
      </Form>
      <GrillaPacientes
       
        pacientes={pacientes}
        deleteMascota={deleteMascota}
      ></GrillaPacientes>
    </div>
  );
};

export default FormularioVeterinaria;
