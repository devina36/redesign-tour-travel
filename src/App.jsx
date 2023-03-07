import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CardPaket from './components/CardPaket';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Tabbar from './components/Tabbar';
import { About, Berita, Daftar, DetailBerita, DetailGaleri, Galeri, Umrah, Home } from './pages';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/galeri/:id" element={<DetailGaleri />} />
        <Route path="/paket-umrah" element={<Umrah />}>
          <Route index element={<CardPaket />} />
          <Route path="vip" element={<CardPaket />} />
          <Route path="vvip" element={<CardPaket />} />
        </Route>
        <Route path="/daftar-umrah" element={<Daftar />} />
      </Routes>
      {width > 640 ? <Footer /> : <Tabbar />}
    </viewportContext.Provider>
  );
}

export default App;
