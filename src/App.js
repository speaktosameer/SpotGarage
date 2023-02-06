import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Service from './components/Serve/Service';
import Choose from './components/Choose/Choose'

function App() {
  return (
    <div>
      < Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Choose/>
    </div>
  );
}

export default App;
