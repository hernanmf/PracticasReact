export function BotonSaludo() {
  function handleClick() {
    alert(`Hola, ` + prompt("¿Cuál es tu nombre?"));
  }

  return <button onClick={handleClick}>Saludar</button>;
}
