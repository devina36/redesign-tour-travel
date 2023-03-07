import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { viewportContext } from '../App';

const active =
  'relative w-fit before:absolute before:w-full before:rounded-full before:h-1 before:bg-myYellow before:-bottom-1';
const noactive =
  'relative w-fit hover:before:absolute hover:before:w-full hover:before:h-1 hover:before:rounded-full hover:before:bg-myYellow hover:before:-bottom-1 hover:before:animate-slideLeft';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const width = useContext(viewportContext);
  const isHome = useMatch('/');

  const listenScrollEvent = () => {
    if (isHome) {
      window.scrollY > 70 ? setHeaderColor(true) : setHeaderColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

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
      {isHome && width > 640 ? (
        <marquee direction="left" className="bg-myYellow text-white -mb-2 py-1 lg:order-first">
          Breaking News: Bidang PHU Tinjau Travel Umrah PT Krakatau Citra Indonesia Pekanbaru
        </marquee>
      ) : (
        ''
      )}

      <header
        className={` ${
          !isHome
            ? ' bg-white/50 backdrop-blur top-0 sm:sticky'
            : `transition-all sm:fixed duration-200 ease-in-out ${
                headerColor ? 'bg-white/50 backdrop-blur shadow-md top-0' : 'bg-transparent top-8'
              }`
        } w-full bg-transparent z-50 bg-opacity-80`}
      >
        <nav className="container mx-auto lg:px-8 px-4 pt-2 sm:py-4 flex justify-center flex-col sm:flex-row sm:justify-between flex-wrap sm:items-center">
          <div className="flex justify-center items-center flex-col">
            <img src={logo} alt="logo" className=" h-[50px] sm:h-16 w-fit " />
            {width < 640 && <h1 className="text-xs">Pelayanan berkualitas adalah prioritas kami</h1>}
          </div>

          {/* menu dekstop */}
          {width > 1023 && (
            <div className=" hidden lg:inline">
              <ul className="flex gap-7">
                <li
                  className={`font-medium text-xs  sm:text-base text-black ${
                    !isHome ? 'sm:text-black' : `${headerColor ? 'sm:text-black' : 'sm:text-white'}`
                  }`}
                >
                  <NavLink to="/" className={({ isActive }) => (isActive ? active : noactive)}>
                    Home
                  </NavLink>
                </li>
                <li
                  className={`font-medium text-xs  sm:text-base text-black ${
                    !isHome ? 'sm:text-black' : `${headerColor ? 'sm:text-black' : 'sm:text-white'}`
                  }`}
                >
                  <NavLink to="/berita" className={({ isActive }) => (isActive ? active : noactive)}>
                    Berita
                  </NavLink>
                </li>
                <li
                  className={`font-medium text-xs  sm:text-base text-black ${
                    !isHome ? 'sm:text-black' : `${headerColor ? 'sm:text-black' : 'sm:text-white'}`
                  }`}
                >
                  <NavLink to="/paket-umrah" className={({ isActive }) => (isActive ? active : noactive)}>
                    Paket Umrah
                  </NavLink>
                </li>
                <li
                  className={`font-medium text-xs  sm:text-base text-black ${
                    !isHome ? 'sm:text-black' : `${headerColor ? 'sm:text-black' : 'sm:text-white'}`
                  }`}
                >
                  <NavLink to="/galeri" className={({ isActive }) => (isActive ? active : noactive)}>
                    Galeri
                  </NavLink>
                </li>
                <li
                  className={`font-medium text-xs  sm:text-base text-black ${
                    !isHome ? 'sm:text-black' : `${headerColor ? 'sm:text-black' : 'sm:text-white'}`
                  }`}
                >
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
              className="lg:hidden bg-myGreen text-white order-last py-1 px-3 rounded-lg border-2 border-myYellow active:bg-myYellow active:text-white "
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

          <div
            className={`text-xs text-center text-myGreen mt-2 lg:hidden flex justify-center gap-[5px] ${
              !isHome ? 'sm:text-myGreen' : `${headerColor ? 'sm:text-myGreen' : 'sm:text-white'}`
            }`}
          >
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
