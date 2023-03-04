import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Tabbar from './components/Tabbar';
import About from './pages/About';
import Berita from './pages/Berita';
import Daftar from './pages/Daftar';
import { DetaiBerita } from './pages/DetaiBerita';
import Galeri from './pages/Galeri';
import Home from './pages/Home';
import Umrah from './pages/Umrah';

export const viewportContext = createContext({});

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={width}>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetaiBerita />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/paket-umrah" element={<Umrah />} />
        <Route path="/daftar-umrah" element={<Daftar />} />
      </Routes>
      {width > 640 ? <Footer /> : <Tabbar />}
    </viewportContext.Provider>
  );
}

export default App;
