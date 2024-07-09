// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const nome = "Maria"
  
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    </div>
  );
  
}

export default App;
