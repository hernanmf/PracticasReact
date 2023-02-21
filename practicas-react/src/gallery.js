import { useState } from "react";
import { sculptureList } from "./data.js";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePrevClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <section>
      <button onClick={handlePrevClick} disabled="tru">
        {" "}
        Anterior{" "}
      </button>
      <button onClick={handleNextClick} disabled>
        {" "}
        Siguiente{" "}
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
    </section>
  );
}
