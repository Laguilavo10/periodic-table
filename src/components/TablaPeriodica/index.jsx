import React from "react";
import '../../styles/elementos.css'
export function TablaPeriodica(props) {
  return (
    <>
      {/* <div className="colores">
        <div><p className="noble-gas"></p> noble-gas</div>
        <div><p className="nonmetal"></p> nonmetal</div>
        <div><p className="transition-metal"></p> transition-metal</div>
        <div><p className="metalloid"></p> metalloid</div>
        <div><p className="alkali-metal"></p> alkali-metal</div>
        <div><p className="alkaline-earth-metal"></p> alkaline-earth-metal</div>
        <div><p className="metal"></p> metal</div>
        <div><p className="halogen"></p> halogen</div>
        <div><p className="lanthanoid"></p> lanthanoid</div>
        <div><p className="actinoid"></p> actinoid</div>
        <div><p className="post-transition-metal"></p> post-transition-metal</div>
      </div> */}
      <article className="container-tabla">{props.children}</article>
    </>
  );
}
