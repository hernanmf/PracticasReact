import { useState } from "react";

export function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);

  if (isSent) {
    return <h1>¡Gracias!</h1>;
  } else {
    // eslint-disable-next-line
    const [message, setMessage] = useState("");
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
          alert("¡Gracias!");
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
