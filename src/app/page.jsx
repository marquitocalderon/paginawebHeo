import Navbar from '@/components/Navbar'
import Parte1 from '@/components/home/Parte1'
import Parte2 from '@/components/home/Parte2'
import Parte3 from '@/components/home/Parte3'
import Parte4 from '@/components/home/Parte4'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Parte1></Parte1>
      <Parte2></Parte2>
      <Parte3></Parte3>
      <Parte4></Parte4>
    </div>
  )
}
