import React from "react";

const Cardcolor = (props) => {
  return (
    <div className="col-sm-12 col-md-4 mt-4 card">
      <div className="card-body">
        <h5 className="card-title">{props.dato}</h5>
        <p
          className="card-text cuadrado"
          style={{ backgroundColor: props.colorIngresado }}
        ></p>
        <button
          className="btn btn-primary"
          onClick={() => props.borrarColor(props.dato)}
        >Borrar</button>
        
      </div>
    </div>
  );
};

export default Cardcolor;
