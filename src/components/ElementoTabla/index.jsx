import React from "react";
import "../../styles/elementos.css";
import "../../styles/ordenElementos.css";


export function ElementoTabla(props) {
  let grupo = props.info.groupBlock.split(" ").join("-");
  return (
    <li className={`${grupo} elemento`} title={props.info.name} onClick={()=>(props.setElementoDetalle(props.info))}>
      <span>{props.index}</span>
      {props.info.symbol}
    </li>
  );
}
