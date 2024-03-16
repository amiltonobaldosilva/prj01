import './App.css';
import HelloWord from './components/helloword';
import Pessoa from './components/pessoa';
import Logo from './imgs/milogo.jpg'

function App() {
  const miolo="Obaldo"
  return (
    <div className="App">
      <h1>Meu primeiro Projeto, {miolo}</h1>
      <h3>Criando componentes!</h3>
      <HelloWord />
      <Pessoa 
      nome="Amilton Obaldo da Silva" 
      telefone="62994407707" 
      idade="47" 
      foto={Logo} />
    </div>
  );
}

export default App;
