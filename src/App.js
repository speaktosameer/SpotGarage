import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Service from './components/Serve/Service';
import Choose from './components/Choose/Choose'
import Faq from './components/Faq/Faq';
import Recognition from "./components/Recognition/Recognition"

function App() {
  return (
    <div>
      < Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Choose/>
      <Recognition/>
      <Faq/>
    </div>
  );
}

export default App;
