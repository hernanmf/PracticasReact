import { useState } from "react";

export function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSent = (e) => {
    if (!isSent) {
      e.preventDefault();
      alert(`Sending: "${message}"`);
      setIsSent(true);
      alert("¡Gracias!");
    } else {
      alert("Su mensaje ya fue enviado. ¡Gracias!");
    }
  };

  return (
    <form onSubmit={handleSent}>
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
