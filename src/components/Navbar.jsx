import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { viewportContext } from '../App';

const active =
  'relative w-fit before:absolute before:w-full before:rounded-full before:h-1 before:bg-[#dc8c00] before:-bottom-1';
const noactive =
  'relative w-fit hover:before:absolute hover:before:w-full hover:before:h-1 hover:before:rounded-full hover:before:bg-[#dc8c00] hover:before:-bottom-1 hover:before:animate-slideLeft';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const width = useContext(viewportContext);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <header className="w-full top-0 sm:sticky bg-transparent sm:bg-white z-50 backdrop-blur bg-opacity-80">
        <nav className="container mx-auto lg:px-8 px-4 py-5">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" className=" h-[50px] sm:h-16 w-auto " />

            {/* menu dekstop */}
            {width > 1024 && (
              <div className=" hidden lg:inline">
                <ul className="flex gap-7">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? active : noactive)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tentang-kami" className={({ isActive }) => (isActive ? active : noactive)}>
                      Tentang Kami
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/paket-umrah" className={({ isActive }) => (isActive ? active : noactive)}>
                      Paket Umrah
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/berita" className={({ isActive }) => (isActive ? active : noactive)}>
                      Berita
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galeri" className={({ isActive }) => (isActive ? active : noactive)}>
                      Galeri
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {/* button daftar umrah */}
            <button className="bg-[#dc8c00] px-3 py-2 text-white font-semibold rounded-lg sm:hidden lg:inline">
              Daftar Umrah
            </button>

            {/* button tablet */}
            {width > 640 && width < 1024 ? (
              <button
                onClick={handleMobile}
                className="lg:hidden text-[#dc8c00] py-1 px-3 rounded-lg border-2 border-[#003300] active:bg-[#003300] active:text-white "
              >
                <FiMenu size={30} />
              </button>
            ) : (
              ''
            )}
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
              <NavLink to="/" className={({ isActive }) => (isActive ? active : noactive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang-kami" className={({ isActive }) => (isActive ? active : noactive)}>
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to="/paket-umrah" className={({ isActive }) => (isActive ? active : noactive)}>
                Paket Umrah
              </NavLink>
            </li>
            <li>
              <NavLink to="/berita" className={({ isActive }) => (isActive ? active : noactive)}>
                Berita
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeri" className={({ isActive }) => (isActive ? active : noactive)}>
                Galeri
              </NavLink>
            </li>
          </ul>
          <button className="mt-8 bg-[#dc8c00] w-full px-3 py-2 text-white font-semibold rounded-lg ">
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
