import {
  EMPLEADO_PROYECTO,
  AGREGAR_EMPLEADO,
  EMPLEADO_ACTUAL,
  ACTUALIZAR_EMPLEADO,
  BANDERA_COLOR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case EMPLEADO_PROYECTO:
      return {
        ...state,
        empleados: action.payload,
      };
    case AGREGAR_EMPLEADO:
      return {
        ...state,
        empleados: [action.payload, ...state.empleados],
      };
    case EMPLEADO_ACTUAL:
      return { ...state, empleadoSeleccionado: action.payload };
    case ACTUALIZAR_EMPLEADO:
      return {
        ...state,
        empleados: state.empleados.map((empleado) =>
          empleado.id === action.payload.id ? action.payload : empleado
        ),
        empleadoSeleccionado: null,
      };
    case BANDERA_COLOR:
      return { ...state, banderaColor: !state.banderaColor };
    default:
      return state;
  }
};
