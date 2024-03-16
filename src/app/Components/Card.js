"use client"
import React from 'react';
import Image from 'next/image';

const PlantCard = ({plant}) => {

  return (
    <div className='flex flex-col  items-center w-full h-auto pb-8  lg:w-1/3 xl:w-1/4 bg-white  rounded-xl shadow-lg hover:translate-x-4 hover:translate-y-4 duration-500 hover:bg-orange-400'>
      <div className="relative w-full h-48 mb-4 rounded-xl  ">
        <Image src={plant?.default_image?.original_url} layout="fill" objectFit="cover" alt='image'/>
      </div>
      <h2 className="text-xl font-semibold text-green-400 text-center">{plant.common_name}</h2>
      
    </div>
  );
}

export default PlantCard;
