import { useState, useEffect } from "react";
import { TablaPeriodica } from "./components/TablaPeriodica";
import { ElementoTabla } from "./components/ElementoTabla";
import { ElementoDetalle } from "./components/ElementoDetalle";
import { API, options } from "./API";
import "./styles/elementos.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [elementoDetalle, setElementoDetalle] = useState("");
  const [element, setElement] = useState("");

  useEffect(() => {
    fetch(API, options)
      .then((response) => response.json())
      .then((response) => {
        setElement(response);
        setLoading(false);
      })
      .catch((err)=>(alert('Error')))
  }, []);

  let tabla = loading ? (
    <p style={{color:"white"}}>Estamos cargando</p>
  ) : (
    <div className="tabla-periodica">
      <ElementoDetalle
        elementoDetalle={elementoDetalle || element[0]}>
      </ElementoDetalle>
      <TablaPeriodica>
        {element.map((e, index) => (
          <ElementoTabla
            info={e}
            key={index}
            index={index + 1}
            elementoDetalle ={elementoDetalle || element[0]}
            setElementoDetalle={setElementoDetalle}
          />
        ))}
      </TablaPeriodica>
    </div>
  )

  return (
    <>
      <h1>Periodic Table</h1>
       {tabla} 
    </>
  );
}

export default App;
