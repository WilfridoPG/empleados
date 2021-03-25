import React, { useReducer } from "react";
import EmpleadoContext from "./empleadoContext";
import EmpleadoReducer from "./empleadoReducer";
import {
  EMPLEADO_PROYECTO,
  AGREGAR_EMPLEADO,
  EMPLEADO_ACTUAL,
  ACTUALIZAR_EMPLEADO,
  BANDERA_COLOR,
} from "../../types";
import { v4 as uuidv4 } from "uuid";
const EmpleadoState = (props) => {
  const empleados = [
    {
      id: 1,
      nombreEmpleado: "Wilfrido Perez Gomez",
      nombreEmpresa: "Google",
      salario: "50000.4567",
    },
    {
      id: 2,
      nombreEmpleado: "Jorge Perez Gomez",
      nombreEmpresa: "Facebook",
      salario: "900.789",
    },
    {
      id: 3,
      nombreEmpleado: "Ana Garcia Hernandez",
      nombreEmpresa: "Youtube",
      salario: "80000.452",
    },
    {
      id: 4,
      nombreEmpleado: "Juan Sanchez Cruz",
      nombreEmpresa: "Uber",
      salario: "5000",
    },
  ];
  //estado inicial de la aplicacion
  const initialState = {
    empleados: [],
    empleadoSeleccionado: null,
    banderaColor: true,
  };

  const [state, dispatch] = useReducer(EmpleadoReducer, initialState);
  //funciones obtener los empleados
  const obtenerEmpleados = () => {
    dispatch({ type: EMPLEADO_PROYECTO, payload: empleados });
  };
  //nuevo empleado
  const agregarEmpleado = (empleado) => {
    empleado.id = uuidv4();
    dispatch({ type: AGREGAR_EMPLEADO, payload: empleado });
  };
  //extraer el empleado actual
  const guardarEmpleadoActual = (empleado) => {
    dispatch({ type: EMPLEADO_ACTUAL, payload: empleado });
  };
  //edita modifica un empleado
  const actualizarEmpleado = (empleado) => {
    dispatch({ type: ACTUALIZAR_EMPLEADO, payload: empleado });
  };
  //pinta color alternado
  const cambioBanderaColor = () => {
    dispatch({ type: BANDERA_COLOR });
  };
  return (
    <EmpleadoContext.Provider
      value={{
        empleados: state.empleados,
        empleadoencontrado: state.empleadoencontrado,
        empleadoSeleccionado: state.empleadoSeleccionado,
        banderaColor: state.banderaColor,
        obtenerEmpleados,
        agregarEmpleado,
        guardarEmpleadoActual,
        actualizarEmpleado,
        cambioBanderaColor,
      }}
    >
      {props.children}
    </EmpleadoContext.Provider>
  );
};

export default EmpleadoState;
