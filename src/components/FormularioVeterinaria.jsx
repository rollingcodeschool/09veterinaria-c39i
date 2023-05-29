import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import GrillaPacientes from "./GrillaPacientes";
import { useForm } from "react-hook-form";

const FormularioVeterinaria = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("pacientes")) || [];
  const [pacientes, setPacientes] = useState(tareasLocalStorage);
  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  //llamamos al hook de react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const onSubmit = (data) => {
    console.log("mi submit");
    console.log(data);
    // setPacientes([...pacientes, { mascota, duenio, fecha, hora, sintomas }]);
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
        onSubmit={handleSubmit(onSubmit)}
        className="border border-secondary rounded p-3 mb-4"
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre de mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("mascota", {
              required: "El nombre de la mascota es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la mascota debe tener como minimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message:
                  "El nombre de la mascota debe tener como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.mascota?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un dueño"
            {...register("duenio", {
              required: "El nombre de la dueño es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del dueño debe tener como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre del dueño debe tener como maximo 50 caracteres",
              },
            })}
          />
            <Form.Text className="text-danger">
            {errors.duenio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingrese una fecha"
            onChange={(e) => setFecha(e.target.value.trimStart())}
            value={fecha}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
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
