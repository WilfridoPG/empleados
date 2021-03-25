import React, { useContext, useState, useEffect } from "react";
import EmpleadoContext from "../../context/empleados/empleadoContext";

const FormEmpleado = () => {
  const empleadoContext = useContext(EmpleadoContext);
  const {
    agregarEmpleado,
    empleadoSeleccionado,
    actualizarEmpleado,
  } = empleadoContext;
  const [dataForm, setdataForm] = useState({
    nombreEmpleado: "",
    nombreEmpresa: "",
    salario: "",
  });
  const { nombreEmpleado, nombreEmpresa, salario } = dataForm;
  //detecta si hay un empleado seleccionado
  useEffect(() => {
    if (empleadoSeleccionado !== null) {
      setdataForm(empleadoSeleccionado);
    } else {
      setdataForm({ nombreEmpleado: "", nombreEmpresa: "", salario: "" });
    }
  }, [empleadoSeleccionado]);

  const onsubmitEmpleado = (e) => {
    e.preventDefault();
    if (nombreEmpleado === "" || nombreEmpresa === "" || salario === "") {
      return;
    }
    //revisar si es edicion o si es nuevo empleado
    if (empleadoSeleccionado === null) {
      agregarEmpleado(dataForm);
    } else {
      actualizarEmpleado(dataForm);
    }

    setdataForm({ nombreEmpleado: "", nombreEmpresa: "", salario: "" });
  };
  const onChangeValues = (e) => {
    setdataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="formulario">
      <form onSubmit={onsubmitEmpleado}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Empleado"
            name="nombreEmpleado"
            onChange={onChangeValues}
            value={nombreEmpleado}
          />
        </div>
        <br></br>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            disabled={empleadoSeleccionado !== null ? true : false}
            placeholder="Empresa"
            name="nombreEmpresa"
            onChange={onChangeValues}
            value={nombreEmpresa}
          />
        </div>
        <br></br>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Salario"
            name="salario"
            onChange={onChangeValues}
            value={salario}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-submit btn-block btn-agregar-empleado"
            style={{
              border: "1px solid green",
              color: "green",
              backgroundColor: "rgba(255,255,255,.5)",
            }}
            placeholder="Nombre Empleado"
            value={
              empleadoSeleccionado !== null
                ? "Editar Empleado"
                : "Agregar Empleado"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default FormEmpleado;
