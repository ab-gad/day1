import './App.css';
import Head from './compnents/Head';
import About from './compnents/About';
import Skills from './compnents/Skills';
import Portfolio from './compnents/Portfolio';
import Footer from './compnents/Footer';

function App() {
  return (
    <div className="App">
      <Head />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
