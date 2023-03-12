import { Profile } from "./Componente-desafio4";

function App({ isLoggedIn }) {
  return (
  <>
  <h1>My Application</h1>
      {if (isLoggedIn){<Profile />} } 
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);