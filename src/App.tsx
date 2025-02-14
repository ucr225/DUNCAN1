import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header className="header">
        <h2>Aplicación de Duncan</h2>
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </header>
      <h3>Inicio de Sesion en Duncan</h3>
    <div>
        
      <label htmlFor="email">Usuario</label>
        <input type="email" id="email" name="email" />
      <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
      <button>Iniciar Sesion</button>
      </div>

      <footer className="footer">
        Duncan ® 2025. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
