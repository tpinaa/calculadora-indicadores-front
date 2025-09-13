import Navbar from './components/Navbar';
import Painel from './components/Painel';
import './App.css';
import FormularioParametro from './components/FormularioParametro';
import FormularioIndicador from './components/FormularioIndicador';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Painel />
        <FormularioParametro/>
        <FormularioIndicador/>
      </main>
      <footer>
        Developed by Tatiana Pina
      </footer>
    </>
  );
}

export default App;