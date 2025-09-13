import './App.css';

import TelaProvider from './context/TelaProvider';
import Navbar from './components/Navbar';
import Painel from './components/Painel';

function App() {

  return (
    <TelaProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Painel />
      </main>
      <footer>Developed by Tatiana Pina</footer>
    </TelaProvider>
  );
}

export default App;