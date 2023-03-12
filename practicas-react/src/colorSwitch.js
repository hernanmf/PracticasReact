export function ColorSwitch() {
  const onChangeColor = () => {
    let arrayColor = [
      "white",
      "black",
      "red",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
      "orange",
      "gray",
    ];
    let color = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = arrayColor[color];
  };

  return (
    <div>
      <button onClick={onChangeColor}>Cambiar color</button>
      <h1>Clicks en la página: 0</h1>
    </div>
  );
}
