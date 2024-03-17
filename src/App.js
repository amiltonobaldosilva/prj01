import './App.css';
import HelloWord from './components/helloword';
import Pessoa from './components/pessoa';
import Logo from './imgs/milogo.jpg';



function App() {
  document.title = 'EFG - DESENVOLVIMENTO WEB';
  const miolo="Amilton Obaldo"
   
  return (
    <div className="App">
      <h1>Técnico Desenvolvimento Web e Mobile, {miolo}</h1>
      <h2>Página desenvolvida em React Js!</h2>
      <HelloWord />
      <Pessoa 
      aluno="Amilton Obaldo da Silva" 
      professor="Heberson Miliano Miliano" 
      escola="EFG - Escola do Futuro de Goiás" 
      trabalho="Página Simples em Html e Css"
      logomi={Logo} />
    </div>
  );
}

export default App;