import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Team from './components/Team';
import Tracks from './components/Tracks';

function App() {
  return (
    <>
      <div className="font-family overflow-x-hidden">
        <Nav />

        <Hero />

        <About />
        <Tracks />
        <Events />
        <Team />
        <Gallary />
        <Footer />
      </div>
    </>
  );
}

export default App;
