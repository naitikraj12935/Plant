"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Plantdetail({ plantid }) {
    const [details, setDetails] = useState(null); // Initialize details as null

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`https://perenual.com/api/species/details/${plantid}?key=sk-vFqJ65f5a9697b1604754`);
                console.log(response.data.default_image);
                setDetails(response?.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchdata();
    }, []);
        
    console.log('data', details);

    // Check if details is still null (initial state)
    if (!details) {
        return <div>Loading...</div>; // Return loading indicator or placeholder
    }

    // Array of URLs
  

    return (
        <div>
          
    <div className='flex flex-col  items-center  h-auto pb-8  w-[500px]  bg-white  rounded-xl shadow-lg hover:translate-x-4 hover:translate-y-4 duration-500 hover:bg-orange-400'>
      <div className="relative w-full h-72 mb-4 rounded-xl  ">
        <Image src={details?.default_image?.original_url} layout="fill" objectFit="cover" alt='image'/>
      </div>
      <h2 className="text-xl font-semibold text-green-400 text-center">{details.common_name}</h2>
      
    </div> 
                
          
        </div>
    );
}
