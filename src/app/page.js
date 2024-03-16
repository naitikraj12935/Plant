"use client"
import Navbar from "./Components/Nevbar";
import Input from "./Components/Input";
import Test from "./Components/Card";
import { useState } from "react";
import "./globals.css";
import AllPlants from "./Components/AllPlants";
export default function Home() {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const [Activechar,setActiveChar]=useState('A');

  return (
    <div className="  min-h-screen relative flex flex-col items-center gap-8 bg-cover" style={{backgroundImage: 'url(/Bg-plant.jpg)',backgroundAttachment: 'fixed'}}>
      <Navbar />
      <Input />
      <h1 className="text-black font-extrabold text-xl" style={{textShadow:'0.5px 0.5px 0.5px orange'}} >poPular plAnts</h1>
      <AllPlants/>
     <h1 className="text-black font-extrabold text-xl" style={{textShadow:'0.5px 0.5px 0.5px orange'}} >fiNd plAnts wiTh thEir first leTTer</h1>
      <ul className="flex gap-2 flex-row flex-wrap py-10 px-8 lg:px-24 xl:px-48 justify-center">
        {alphabet.map(letter => (
          <li key={letter} className={`text-blue-500 cursor-pointer border-2 py-2 px-4 ${Activechar===letter ? 'bg-green-300':null}  `}
          onClick={()=>setActiveChar(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
