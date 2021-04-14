import React from "react";
import Cardcolor from "./Cardcolor";

const ListaColores = (props) => {
  return (
    <div className="row">
        {
            props.colores.map((color,indice)=> <Cardcolor key={indice} dato={color} colorIngresado={color} borrarColor={props.borrarColor}></Cardcolor>)
        }
        
    </div>
  );
};

export default ListaColores;
