import React, { useContext, useState, useEffect } from "react";
import EmpleadoContext from "../../context/empleados/empleadoContext";
import camera from "../camera/camera";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Empleado = ({ empleado, tipoCambio, colorItem }) => {
  const empleadoContext = useContext(EmpleadoContext);
  const { guardarEmpleadoActual } = empleadoContext;
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    camera.startCamera();
  }, []);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const usdSalario = empleado.salario / 21.5;
  const salarioColor = empleado.salario < 10000 ? "red" : "green";
  const seleccionEmpleado = (empleado) => {
    guardarEmpleadoActual(empleado);
  };

  return (
    <>
      <li className=" empleado" style={{ backgroundColor: colorItem }}>
        <div style={{ cursor: "pointer" }}>
          <img
            width="100"
            src="./icon/photo-camera.png"
            onClick={openModal}
          ></img>
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Captura una foto</h2>
        <div className="contentarea">
          <h1>Using Javascript to capture Photo</h1>
          <div className="camera">
            <video id="video">Video stream not available.</video>
          </div>
          <div>
            <button id="startbutton">Take photo</button>
          </div>
          <canvas id="canvas"></canvas>
          <div className="output">
            <img id="photo" alt="The screen capture will appear in this box." />
          </div>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};

export default Empleado;
