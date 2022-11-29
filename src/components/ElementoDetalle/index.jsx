import React from 'react'
import '../../styles/elementoDetalle.css'


export function ElementoDetalle({elementoDetalle}) {

  console.log(elementoDetalle)
  return (
    <div className='detalle-container'>
      <div className="card">  
          <p id='numero'>numero</p>
          <p id='masa'>masaAtomica</p>
          <p id='simbolo'>{elementoDetalle.symbol}</p>
          <p id='nombre'>nombre</p>
      </div>
      <div className="info-elemento">
        <ul>
          <li>History</li>
          <li>Atomic Mass</li>
          <li>Atomic NUmber</li>
          <li>density</li>
          <li>Electron Affinity</li>
          <li>Electro Negativity</li>
          <li>Electronic Configuration</li>
          <li>Molar Heat Capacity</li>
        </ul>
      </div>

    </div>
  )
}
