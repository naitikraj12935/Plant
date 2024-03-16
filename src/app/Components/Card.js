"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const PlantCard = ({plant}) => {

  return (
    <Link href={`/${plant.id}`}>
    <div className='flex flex-col  items-center  h-auto pb-8 w-[400px] bg-white  rounded-xl shadow-lg hover:translate-x-4 hover:translate-y-4 duration-500 hover:bg-orange-400'>
      <div className="relative w-full h-48 mb-4 rounded-xl  ">
        <Image src={plant?.default_image?.original_url} layout="fill" objectFit="cover" alt='image'/>
      </div>
      <h2 className="text-xl font-semibold text-green-400 text-center">{plant.common_name}</h2>
      
    </div>
    </Link>
  );
}

export default PlantCard;
