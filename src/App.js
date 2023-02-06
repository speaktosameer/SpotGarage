import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Service from './components/Serve/Service';

function App() {
  return (
    <div>
      < Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
    </div>
  );
}

export default App;
