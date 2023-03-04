import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { viewportContext } from '../App';

const active =
  'relative w-fit before:absolute before:w-full before:rounded-full before:h-1 before:bg-myYellow before:-bottom-1';
const noactive =
  'relative w-fit hover:before:absolute hover:before:w-full hover:before:h-1 hover:before:rounded-full hover:before:bg-myYellow hover:before:-bottom-1 hover:before:animate-slideLeft';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const width = useContext(viewportContext);

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', localeMatcher: 'best fit' };

  const formatMasehi = new Intl.DateTimeFormat('id', options);
  const masehi = formatMasehi.format(date);
  const formatHijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', options);
  const hijri = formatHijri.format(date);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <header className="w-full top-0 sm:sticky bg-transparent sm:bg-white/80 z-50 backdrop-blur bg-opacity-80">
        <nav className="container mx-auto lg:px-8 px-4 pt-2 sm:py-4 flex justify-center flex-col sm:flex-row sm:justify-between flex-wrap sm:items-center">
          <div className="flex justify-center items-center flex-col">
            <img src={logo} alt="logo" className=" h-[50px] sm:h-16 w-fit " />
            {width < 640 && <h1 className="text-xs">Pelayanan berkualitas adalah prioritas kami</h1>}
          </div>

          {/* menu dekstop */}
          {width > 1023 && (
            <div className=" hidden lg:inline">
              <ul className="flex gap-7">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? active : noactive)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/berita" className={({ isActive }) => (isActive ? active : noactive)}>
                    Berita
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/paket-umrah" className={({ isActive }) => (isActive ? active : noactive)}>
                    Paket Umrah
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/galeri" className={({ isActive }) => (isActive ? active : noactive)}>
                    Galeri
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tentang-kami" className={({ isActive }) => (isActive ? active : noactive)}>
                    Tentang Kami
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* button tablet or daftar umrah */}
          {width > 640 && width < 1024 ? (
            <button
              onClick={handleMobile}
              className="lg:hidden text-myYellow order-last py-1 px-3 rounded-lg border-2 border-[#003300] active:bg-[#003300] active:text-white "
            >
              <FiMenu size={30} />
            </button>
          ) : (
            <Link to="/daftar-umrah">
              <button className="bg-myYellow px-5 py-2 text-white font-semibold rounded-lg hidden lg:inline">
                Daftar Umrah
              </button>
            </Link>
          )}

          <div className="text-xs text-center text-myGreen mt-2 lg:hidden flex justify-center gap-[5px]">
            <p>{hijri}</p>
            <span className="text-sm text-myYellow">|</span>
            <p>{masehi}</p>
          </div>
        </nav>
      </header>

      {/* menu tablet */}
      {width > 640 && (
        <nav
          className={` fixed flex flex-col top-0 lg:hidden z-[99] bg-[#003300]/90 h-screen w-[250px] px-5 py-8 transition-all duration-300 ease-in-out ${
            mobile ? 'right-0' : '-right-[250px]'
          }`}
        >
          <button className="text-white self-end mb-8" onClick={handleMobile}>
            <FiX size={26} />
          </button>

          <ul className="flex flex-col gap-7">
            <li>
              <NavLink onClick={handleMobile} to="/" className={({ isActive }) => (isActive ? active : noactive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobile} to="/galeri" className={({ isActive }) => (isActive ? active : noactive)}>
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMobile}
                to="/paket-umrah"
                className={({ isActive }) => (isActive ? active : noactive)}
              >
                Paket Umrah
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobile} to="/berita" className={({ isActive }) => (isActive ? active : noactive)}>
                Berita
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={handleMobile}
                to="/tentang-kami"
                className={({ isActive }) => (isActive ? active : noactive)}
              >
                Tentang Kami
              </NavLink>
            </li>
          </ul>
          <button className="mt-8 bg-myYellow w-full px-3 py-3 text-white font-semibold rounded-lg ">
            Daftar Umrah
          </button>
        </nav>
      )}

      {width > 640 && width < 1024
        ? mobile && (
            <div
              className="fixed z-[89] lg:hidden left-0 bg-slate-900/50 w-screen top-0 h-screen backdrop-blur"
              onClick={handleMobile}
            />
          )
        : ''}
    </>
  );
};

export default Navbar;
