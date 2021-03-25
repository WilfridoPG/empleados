import React, { useContext, useEffect, useState } from "react";
import Empleado from "./Empleado";
import EmpleadoContext from "../../context/empleados/empleadoContext";

const ListadoEmpleado = () => {
  const empleadoContext = useContext(EmpleadoContext);
  const { empleados, cambioBanderaColor, obtenerEmpleados } = empleadoContext;
  const [buscar, setbuscar] = useState("");
  const [tipoCambio, setTipoCambio] = useState("1");

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const onChangebuscar = (e) => {
    setbuscar(e.target.value);
  };
  let empleadoEncontrado = [];
  if (buscar !== "") {
    empleadoEncontrado = empleados.filter(
      (empleado) =>
        empleado.nombreEmpleado.toLowerCase().includes(buscar.toLowerCase()) ||
        empleado.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase())
    );
  } else {
    empleadoEncontrado = empleados;
  }
  const onChangeTipoCambio = (e) => {
    setTipoCambio(e.target.value);
  };

  return (
    <>
      <ul className="listado-tareas">
        <input
          type="text"
          style={{ width: "100%", height: 50, marginBottom: 10 }}
          onChange={onChangebuscar}
          placeholder="Busca empleado o empresa"
        ></input>

        <li className="tarea ">
          <div></div>
          <p>Nombre empleado</p>
          <div className="estado">
            <p>Empresa</p>
          </div>
          <div style={{ display: "flex" }}>
            <div>Sueldo:</div>

            <div>
              <select value={tipoCambio} onChange={onChangeTipoCambio}>
                <option value="1">MNX</option>
                <option value="2">USD</option>
              </select>
            </div>
          </div>

          <div>
            <p>Total: {empleadoEncontrado.length}</p>
          </div>
        </li>

        {empleadoEncontrado === 0 ? (
          <li className="tarea">
            <p>No hay empleados</p>
          </li>
        ) : (
          empleadoEncontrado.map((empleado, index) => {
            let colorItem = "";
            if (index % 2 === 0) {
              colorItem = "#d0d0d0";
            } else {
              colorItem = "white";
            }
            return (
              <Empleado
                key={empleado.id}
                colorItem={colorItem}
                empleado={empleado}
                tipoCambio={tipoCambio}
              ></Empleado>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ListadoEmpleado;
