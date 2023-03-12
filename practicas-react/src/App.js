import "./App.css";
import { Gallery } from "./gallery.js";
import { Form } from "./form.js";
import { FeedbackForm } from "./FeedBackForm";
import { BotonSaludo } from "./botonSaludo";
import { LightSwitch } from "./LightSwitch";
import { ColorSwitch } from "./colorSwitch";

function App() {
  return (
    <>
      <Gallery />
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <br />
      <FeedbackForm />
      <br />
      <br />
      <br />
      <BotonSaludo />
      <br />
      <br />
      <br />
      <LightSwitch />
      <br />
      <br />
      <br />
      <ColorSwitch />
    </>
  );
}

export default App;
