import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import About from './pages/About';
import Berita from './pages/Berita';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/berita" element={<Berita />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
