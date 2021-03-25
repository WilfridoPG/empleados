import React from "react";

import FormEmpleado from "../empleado/FormEmpleado";
import ListadoEmpleado from "../empleado/ListadoEmpleado";
const Layout = () => {
  return (
    <div>
      <header className="app-header">
        <p className="nombre-usuario">Lista de empleados</p>
      </header>
      <main>
        <FormEmpleado></FormEmpleado>
        <div className="contenedor-tareas">
          <ListadoEmpleado></ListadoEmpleado>
        </div>
      </main>
    </div>
  );
};

export default Layout;
