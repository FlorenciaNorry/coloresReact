import React, { Fragment, useState, useEffect } from "react";
import ListaColores from "./ListaColores";

const Administrarcolores = (props) => {
  
  const square = {background: "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)"}
  let coloresLocalStorage = JSON.parse(localStorage.getItem('arregloColores'));
  if(!coloresLocalStorage){
    coloresLocalStorage = [];
  }
  const [colores, setColores] = useState(coloresLocalStorage);
  const [colorIngresado, setcolorIngresado] = useState("");

  useEffect(() =>{
    localStorage.setItem('arregloColores',JSON.stringify(colores))
  },[colores]);

  const guardarTarea = (e) => {
    setcolorIngresado(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, colorIngresado]);
    setcolorIngresado("");
  };

  const borrarColor = (nombre) => {
    let arregloModificado = colores.filter((dato) => dato !== nombre);
    setColores(arregloModificado);
  }

  return (
    <Fragment>
      <section className="container">
        <form
          className="mt-4 bordes shadow bg-body rounded"
          onSubmit={handleSubmit}
        >
          <h4 className="p-2">Administrar Colores</h4>
          <section className="color2 p-2">
            <div className="row mx-2 d-flex align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-2 cuadrado" style={square}></div>
              <div className="col-sm-12 col-md-6 col-lg-10">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese un color"
                  onChange={guardarTarea}
                  value={colorIngresado}
                />
              </div>
            </div>
          </section>
          <section className="d-flex justify-content-end ">
            <button className="btn btn-info m-2 shadow rounded" type="submit">
              Guardar
            </button>
          </section>
        </form>
      </section>
      <section className="container">
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
      </section>
    </Fragment>
  );
};

export default Administrarcolores;
