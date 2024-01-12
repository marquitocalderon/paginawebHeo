import React from 'react'
import sectores from "@/components/imagenes/sectores2.png"
import Image from 'next/image'

export default function Parte4() {
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-hidden relative gap-16'>
        <div className=''>
           <h2 className='text-5xl font-bold pl-16 pr-16 py-2 bg-blue-950 text-white'>SECTORES</h2>
        </div>
        <div>
            <Image src={sectores} width={700}></Image>
        </div>
    </div>
  )
}
