import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import GrillaPacientes from "./GrillaPacientes";
import { useForm } from "react-hook-form";

const FormularioVeterinaria = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("pacientes")) || [];
  const [pacientes, setPacientes] = useState(tareasLocalStorage);
  // const [mascota, setMascota] = useState("");
  // const [duenio, setDuenio] = useState("");
  // const [fecha, setFecha] = useState("");
  // const [hora, setHora] = useState("");
  // const [sintomas, setSintomas] = useState("");
  //llamamos al hook de react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const onSubmit = (data) => {
    console.log("mi submit");
    console.log(data);
    setPacientes([...pacientes, data]);
    reset();
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
            {...register("fecha", {
              required: "La fecha es un dato obligatorio",
              pattern:{
                value: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
                message: 'Debe ingresar una fecha valida'
              }
            })}
          />
         <Form.Text className="text-danger">
            {errors.fecha?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            placeholder="Ingrese una hora"
            {...register("hora", {
              required: "La hora es un dato obligatoria",
              pattern:{
                value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                message: 'Debe ingresar una hora valida hh:mm'
              }
            })}
          />
           <Form.Text className="text-danger">
            {errors.hora?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Ingrese los sintomas"
            {...register("sintomas", {
              required: "Los sintomas son un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "Los sintomas como minimo deben contener 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "Los sintomas como maximo deben contener 100 caracteres",
              },
            })}
          />
           <Form.Text className="text-danger">
            {errors.sintomas?.message}
          </Form.Text>
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
