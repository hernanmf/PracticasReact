import { useState } from "react";
import { sculptureList } from "./data.js";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(0);
  const [btnPrevActivo, setBtnPrevActivo] = useState(false);
  const [btnNextActivo, setBtnNextActivo] = useState(
    sculptureList.length === 1 ? false : true
  );

  function handleNextClick() {
    setBtnPrevActivo(true);
    setIndex(index + 1);
    if (index + 1 === sculptureList.length - 1) {
      /* se pone lenght -1 porque cuando se hace el click en el 11 se tiene q inactivar el boton siguiente */
      setBtnNextActivo(false);
    }
  }

  function handlePrevClick() {
    setBtnNextActivo(true);
    setIndex(index - 1);
    if (index - 0 === 1) {
      setBtnPrevActivo(false);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!btnPrevActivo}>
        Anterior
      </button>
      <button onClick={handleNextClick} disabled={!btnNextActivo}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} Detalles
      </button>
      {showMore && <p> {sculpture.description} </p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
