import { useState, useEffect } from "react";
import { TablaPeriodica } from "./components/TablaPeriodica";
import { ElementoTabla } from "./components/ElementoTabla";
import { ElementoDetalle } from "./components/ElementoDetalle";
import "./styles/elementos.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [elementoDetalle, setElementoDetalle] = useState("");
  const [element, setElement] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dc06300e98msh901821df3b6f5e9p169d2bjsn4f2da76977b3",
        "X-RapidAPI-Host": "periodictable.p.rapidapi.com",
      },
    };
    fetch("https://periodictable.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        setElement(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  let tabla = loading ? (
    <p style={{color:"white"}}>Estamos cargando</p>
  ) : (
    <div className="tabla-periodica">
      <ElementoDetalle
        elementoDetalle={elementoDetalle || element[0]}
      ></ElementoDetalle>
      <TablaPeriodica>
        {element.map((e, index) => (
          <ElementoTabla
            info={e}
            key={index}
            index={index + 1}
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
