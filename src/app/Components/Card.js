import React from 'react';
import Image from 'next/image';

const Test = () => {
  return (
    <div className='flex flex-col justify-center items-center w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-green-100 p-6 rounded-lg shadow-lg hover:translate-x-4 hover:translate-y-4 duration-500 hover:bg-orange-400'>
      <div className="relative w-40 h-40 mb-4 hover:translate-x-4 hover:translate-y-4 duration-500">
        <Image src="/sunflower.jpg" layout="fill" objectFit="cover" alt='image'/>
      </div>
      <h2 className="text-xl font-semibold">Sunflower</h2>
      <p className="text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos ipsam nesciunt placeat doloribus fugiat.
      </p>
    </div>
  );
}

export default Test;
