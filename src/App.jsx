import Navbar from './components/Navbar';
import Painel from './components/Painel';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Painel />
      </main>
      <footer>
        Developed by Tatuína
      </footer>
    </>
  );
}

export default App;