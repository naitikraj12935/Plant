
import React from 'react'
import Navbar from '../Components/Nevbar'
import Plantdetail from './Plantdetail'

export default function page({params}) {
   
    console.log(params.plantid)

  return (
    <div className="  min-h-screen relative flex flex-col items-center gap-8 bg-cover overflow-y-scroll overflow-x-hidden" style={{backgroundImage: 'url(/Bg-plant.jpg)',backgroundAttachment: 'fixed'}}>
      <Navbar/>
      <Plantdetail plantid={params.plantid}/>
     
    </div>
  )
}
