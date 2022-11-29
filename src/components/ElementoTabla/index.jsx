import React from "react";
import "../../styles/elementos.css";
import "../../styles/ordenElementos.css";


export function ElementoTabla(props) {
  console.log(props.elementoDetalle)
  let grupo = props.info.groupBlock.split(" ").join("-");
  let isSelect = props.elementoDetalle.name == props.info.name
  return (
    <li className={`${grupo} elemento ${isSelect && 'seleccion'}`} title={props.info.name} onClick={()=>(props.setElementoDetalle(props.info))}>
      <span>{props.index}</span>
      {props.info.symbol}
    </li>
  );
}
