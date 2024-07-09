// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const nome = "Maria"
  
  return (
    <div className="App">
      <Frase />
      <HelloWorld />
      <DigaMeuNome nome = "Cristovão" />
      <DigaMeuNome nome = "João" />
      <DigaMeuNome nome = {nome} />
      <Pessoa nome="Rocha" idade="28" profissao="Programador" foto="https:/via.placeholder.com/150"/>
      <List />
    </div>
  );
  
}

export default App;
