import React, { useContext, useEffect } from "react";
import EmpleadoContext from "../../context/empleados/empleadoContext";

const Empleado = ({ empleado, tipoCambio, colorItem }) => {
  const empleadoContext = useContext(EmpleadoContext);
  const { guardarEmpleadoActual } = empleadoContext;
  const usdSalario = empleado.salario / 21.5;
  const salarioColor = empleado.salario < 10000 ? "red" : "green";
  const seleccionEmpleado = (empleado) => {
    guardarEmpleadoActual(empleado);
  };

  return (
    <>
      <li className=" empleado" style={{ backgroundColor: colorItem }}>
        <div style={{ cursor: "pointer" }}>
          <img width="100" src="./icon/photo-camera.png"></img>
        </div>
        <p>{empleado.nombreEmpleado}</p>
        <div className="estado">
          <p>{empleado.nombreEmpresa}</p>
        </div>
        <div className="acciones">
          {tipoCambio === "1" ? (
            <div style={{ color: salarioColor }}>
              $
              {new Intl.NumberFormat().format(
                parseFloat(empleado.salario).toFixed(2)
              )}{" "}
              MXN
            </div>
          ) : (
            <div>
              {new Intl.NumberFormat().format(
                parseFloat(usdSalario.toFixed(2))
              )}{" "}
              USD
            </div>
          )}
        </div>
        <div className="acciones">
          <button
            type="button"
            style={{
              border: "1px solid green",
              color: "green",
              backgroundColor: "rgba(255,255,255,.5)",
            }}
            className="btn btn-editar-empleado"
            onClick={() => seleccionEmpleado(empleado)}
          >
            Editar
          </button>
        </div>
      </li>
    </>
  );
};

export default Empleado;
