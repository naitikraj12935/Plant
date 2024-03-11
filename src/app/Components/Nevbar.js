"use client"
import React, { useState } from 'react';
import Toogle from './Toogle';
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col text-black w-full justify-between items-center px-10 py-10 bg-white'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='drop-shadow-sm text-4xl' style={{textShadow:'1px 1px 1px green'}}>PLANTOPIA</div>
        <div className='hidden w-1/2 justify-around items-center lg:flex xl:flex '>
          <div>Home</div>
          <div>About</div>
          <div>
            <button className='bg-green-300 p-2 rounded-xl hover:scale-90'>
              Login/Signup
            </button>
          </div>
        </div>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: "200px", backgroundColor: "white", padding: "20px",zIndex:50 }}
        >
          <Toogle />
        </motion.nav>
        <button onClick={toggleSidebar} className=" fixed lg:hidden xl:hidden top-8 right-4 bg-gray-300 p-2 rounded-full">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}