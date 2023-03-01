import React, { useContext } from 'react';
import { viewportContext } from '../App';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineCube,
  HiOutlinePhoto,
  HiOutlineUserGroup,
  HiHome,
  HiNewspaper,
  HiCube,
  HiPhoto,
  HiUserGroup,
} from 'react-icons/hi2';

const active = ' flex flex-col justify-center items-center relative w-fit';
const noactive = ' flex flex-col justify-center items-center relative w-fit';

const Tabbar = () => {
  const width = useContext(viewportContext);
  return (
    <footer className=" sticky  bottom-0 px-10 py-4 bg-white">
      <ul className="flex flex-row  justify-between ">
        <li>
          <NavLink to="/" end>
            {({ isActive }) => (
              <div className="flex min-w-[50px] h-[36px] flex-col w justify-center items-center">
                <span
                  className={
                    isActive
                      ? 'absolute -top-5 p-2 rounded-full text-white bg-myYellow transition-all duration-200 ease-in-out'
                      : 'absolute top-4 text-black transition-all duration-200 ease-in-out'
                  }
                >
                  {isActive ? <HiHome size={32} /> : <HiOutlineHome size={20} />}
                </span>
                <span className={isActive ? 'flex items-end h-full text-myYellow' : 'flex items-end h-full text-black'}>
                  Home
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/berita">
            {({ isActive }) => (
              <div className="flex min-w-[50px] h-[36px] flex-col w justify-center items-center">
                <span
                  className={
                    isActive
                      ? 'absolute -top-5 p-2 rounded-full text-white bg-myYellow transition-all duration-200 ease-in-out'
                      : 'absolute top-4 text-black transition-all duration-200 ease-in-out'
                  }
                >
                  {isActive ? <HiNewspaper size={32} /> : <HiOutlineNewspaper size={20} />}
                </span>
                <span className={isActive ? 'flex items-end h-full text-myYellow' : 'flex items-end h-full text-black'}>
                  Berita
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/paket-umrah">
            {({ isActive }) => (
              <div className="flex min-w-[50px] h-[36px] flex-col w justify-center items-center">
                <span
                  className={
                    isActive
                      ? 'absolute -top-5 p-2 rounded-full text-white bg-myYellow transition-all duration-200 ease-in-out'
                      : 'absolute top-4 text-black transition-all duration-200 ease-in-out'
                  }
                >
                  {isActive ? <HiCube size={32} /> : <HiOutlineCube size={20} />}
                </span>
                <span className={isActive ? 'flex items-end h-full text-myYellow' : 'flex items-end h-full text-black'}>
                  Umrah
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/galeri">
            {({ isActive }) => (
              <div className="flex min-w-[50px] h-[36px] flex-col w justify-center items-center">
                <span
                  className={
                    isActive
                      ? 'absolute -top-5 p-2 rounded-full text-white bg-myYellow transition-all duration-200 ease-in-out'
                      : 'absolute top-4 text-black transition-all duration-200 ease-in-out'
                  }
                >
                  {isActive ? <HiPhoto size={32} /> : <HiOutlinePhoto size={20} />}
                </span>
                <span className={isActive ? 'flex items-end h-full text-myYellow' : 'flex items-end h-full text-black'}>
                  Galeri
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/tentang-kami">
            {({ isActive }) => (
              <div className="flex min-w-[50px] h-[36px] flex-col w justify-center items-center">
                <span
                  className={
                    isActive
                      ? 'absolute -top-5 p-2 rounded-full text-white bg-myYellow transition-all duration-200 ease-in-out'
                      : 'absolute top-4 text-black transition-all duration-200 ease-in-out'
                  }
                >
                  {isActive ? <HiUserGroup size={32} /> : <HiOutlineUserGroup size={20} />}
                </span>
                <span className={isActive ? 'flex items-end h-full text-myYellow' : 'flex items-end h-full text-black'}>
                  About
                </span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Tabbar;
