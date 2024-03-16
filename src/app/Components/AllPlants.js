"use client"
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import PlantCard from './Card'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
export default function AllPlants() {
    const [data,setdata]=useState([]);
    const [err,seterr]=useState('');
    const [pageno,setpageno]=useState(1);
    const handleclickl=()=>{
         if(pageno!=1)
         {
            setpageno((prev)=>prev-1);
         }
    }
    const handleclickr=()=>{
        
           setpageno((prev)=>prev+1);
        
   }
    useEffect(()=>{
         const fetchdata= async()=>{
            try{
                const response=await axios.get(`https://perenual.com/api/species-list?key=sk-vFqJ65f5a9697b1604754&page=${pageno}`);
               
                    console.log(response);
                  setdata(response.data.data);
                
            }
            catch(error){
                console.log(error);
            }
            
         }
         fetchdata();
    },[pageno])
  return (
    <div className='flex flex-col w-full items-center'>
    <div className='flex flex-row flex-wrap w-full p-8 justify-center items-center gap-4 lg:gap-7 xl:gap-10'>
       {
  data.length > 0 && data.map((d) => (
    <PlantCard plant={d} key={d.id} />
  ))
}

    </div>
    <div className='flex flex-row gap-1'>
        <button className={`container text-black p-2 ${pageno==1 ? 'bg-white' : 'bg-green-400'} `} onClick={handleclickl} disabled={pageno==1}><SlArrowLeft/></button>
        <button className='container bg-green-400 text-black p-2' onClick={handleclickr}><SlArrowRight/></button>
    </div>
    </div>
  )
}
