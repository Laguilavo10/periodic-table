import React from 'react'
import '../../styles/elementoDetalle.css'


export function ElementoDetalle({elementoDetalle}) {
  let grupo = elementoDetalle.groupBlock.split(" ").join("-");
  return (
    <div className='detalle-container'>
      <div className={`card ${grupo}`}>  
          <p id='numero'>{elementoDetalle.atomicNumber}</p>
          <p id='masa'>{elementoDetalle.atomicMass}</p>
          <p id='simbolo'>{elementoDetalle.symbol}</p>
          <p id='nombre'>{elementoDetalle.name}</p>
      </div>
      <div className="info-elemento">
        <ul>
          {/* <li>History: <span>{elementoDetalle.facts}</span></li> */}
          <li>Atomic Mass: <span>{elementoDetalle.atomicMass}</span></li>
          <li>Atomic Number: <span>{elementoDetalle.atomicNumber}</span></li>
          <li>density: <span>{elementoDetalle.density}</span></li>
          <li>Electron Affinity: <span>{elementoDetalle.electronAffinity}</span></li>
          <li>Electro Negativity: <span>{elementoDetalle.electronegativity}</span></li>
          <li>Electronic Configuration: <span>{elementoDetalle.electronicConfiguration}</span></li>
          <li>Molar Heat Capacity: <span>{elementoDetalle.molarHeatCapacity}</span></li>
        </ul>
      </div>

    </div>
  )
}
