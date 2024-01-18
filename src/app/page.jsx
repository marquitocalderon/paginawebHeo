"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Parte1 from '@/components/home/Parte1';
import Parte2 from '@/components/home/Parte2';
import Parte3 from '@/components/home/Parte3';
import Parte4 from '@/components/home/Parte4';

export default function Page() {
  const [mostrarTodo, setMostrarTodo] = useState(false);

  useEffect(() => {
    // Mostrar el video durante 5 segundos (5000 milisegundos)
    const timeoutId = setTimeout(() => {
      setMostrarTodo(true);
    }, 1800);

    // Limpieza del timeout en caso de que el componente se desmonte antes de que se complete el tiempo
    return () => clearTimeout(timeoutId);
  }, []); // El segundo argumento del useEffect asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      {!mostrarTodo ? (
        // Renderizar el video aquí
        <div className=''>
          <div className="hidden lg:block w-full h-screen overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/bienvenida.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <div className="lg:hidden w-full h-screen overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/bienvenidacelu.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Parte1 />
          <Parte2 />
          <Parte3 />
          <Parte4 />
        </div>
      )}
    </div>
  );
}
