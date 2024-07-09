// import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';

function App() {
  const nome = "Maria"
  
  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  );
  
}

export default App;
