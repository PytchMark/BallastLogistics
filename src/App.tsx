import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './routes/Home';
import Containers from './routes/Containers';
import Financing from './routes/Financing';
import About from './routes/About';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ballast-950 text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/containers" element={<Containers />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
