"use client"
import React, { Fragment, useRef } from "react";
import asesorias from "@/components/imagenes/asesorias1.png";
import outsorcin from "@/components/imagenes/fotosourcin.jpg";
import gestion from "@/components/imagenes/gestion1.png";
import Image from "next/image";
import { useIsVisible } from "../UseVisible";
export default function Parte3() {
  const pc = useRef();
  const celular = useRef();
  const siestaVisiblePc = useIsVisible(pc, { threshold: 0.5 }); // Adjust threshold as needed
  const siestaVisibleCelular = useIsVisible(celular); // Adjust threshold as needed
  return (
    <Fragment>
    <div className={`flex flex-col justify-center  h-screen relative max-lg:hidden transition-all ease-in duration-500 ${siestaVisiblePc ? "opacity-100" : "opacity-0" }`} ref={pc}>
      <div className="px-16 mb-3 ">
        <span className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-blue-950 text-start">
          SERVICIOS HEO
        </span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 shadow w-full px-16">
          <div className="card1 flex rounded">
            <div className="w-4/5 bg-white dark:text-white dark:bg-black text-black relative">
            <div className="flex flex-col gap-4 justify-between items-start px-5 mt-5">
              <h2 className="font-bold text-base">ASESORÍA Y CONSULTORÍA EMPRESARIAL</h2>
              <p className="pr-6">Nuestra misión es proporcionar soluciones personalizadas y de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos y superar sus desafíos de manera efectiva.</p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>
            </div>
            </div>
            <div className="w-1/3 max-xl:w-1/2">
              <Image src={asesorias} height={210} className="rounded"></Image>
            </div>
          </div>
        </div>
        <div className="col-span-12 shadow w-full px-16">
          <div className="card1 flex rounded">
            <div className="w-4/5 bg-white dark:text-white dark:bg-black text-black relative">
            <div className="flex flex-col gap-4 justify-between items-start px-5 mt-5">
              <h2 className="font-bold text-base">OUTSOURCING Y TERCERIZACIÓN</h2>
              <p className="pr-6">Nuestro enfoque es optimizar la eficiencia, reducir costos y gestionar tareas especializadas y estratégicas para impulsar el éxito de nuestros clientes.</p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>
            </div>
            </div>
            <div className="w-1/3 max-xl:w-1/2">
              <Image src={outsorcin} height={210} className="rounded"></Image>
            </div>
          </div>
        </div>

        <div className="col-span-12 shadow w-full px-16">
          <div className="card1 flex rounded">
            <div className="w-4/5 bg-white dark:text-white dark:bg-black text-black relative">
            <div className="flex flex-col gap-4 justify-between items-start px-5 mt-5">
              <h2 className="font-bold text-base">GESTIÓN DE PROYECTOS B2B</h2>
              <p className="pr-6">Identificamos y financiamos proyectos de alta rentabilidad en sectores que garanticen un buen rendimiento en el corto y mediano plazo.</p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>
            </div>
            </div>
            <div className="w-1/3 max-xl:w-1/2">
              <Image src={gestion} height={210} className="rounded"></Image>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <section className="flex justify-center items-center overflow-hidden max-lg:block lg:hidden ">
        <div className={`h-full transition-all ease-in duration-500 ${siestaVisibleCelular ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`} ref={celular}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4">
              <div className="flex gap-1 mb-3">
                <span className="text-2xl font-bold"> </span>
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-blue-950" />
                  <span className="relative text-white text-2xl font-bold ">
                    SERVICIOS
                  </span>
                </span>
              </div>
              <p className="pr-5 mb-2 text-base text-gray-700 md:text-lg dark:text-white">
                <strong>ASESORÍA Y CONSULTORÍA EMPRESARIAL</strong>
              </p>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
              Nuestra misión es proporcionar soluciones personalizadas y de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos y superar sus desafíos de manera efectiva.
              </p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>

              <Image className="rounded mt-6" src={asesorias}></Image>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 -mt-8">
              <div className="flex gap-1 mb-3">
                <span className="text-2xl font-bold"> </span>
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-blue-950" />

                </span>
              </div>
              <p className="pr-5 mb-2 text-base text-gray-700 md:text-lg dark:text-white">
                <strong>OUTSOURCING Y TERCERIZACIÓN</strong>
              </p>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
              Nuestro enfoque es optimizar la eficiencia, reducir costos y gestionar tareas especializadas y estratégicas para impulsar el éxito de nuestros clientes.
              </p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>

              <Image className="rounded mt-6" src={outsorcin}></Image>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 -mt-8">
              <div className="flex gap-1 mb-3">
                <span className="text-2xl font-bold"> </span>
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-blue-950" />

                </span>
              </div>
              <p className="pr-5 mb-2 text-base text-gray-700 md:text-lg dark:text-white">
                <strong>GESTIÓN DE PROYECTOS B2B</strong>
              </p>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
              Identificamos y financiamos proyectos de alta rentabilidad en sectores que garanticen un buen rendimiento en el corto y mediano plazo.
              </p>
              <a href="/" className="px-4 py-2 bg-blue-950 hover:bg-blue-800 text-white mb-2">MAS INFORMACION</a>

              <Image className="rounded mt-6" src={gestion}></Image>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
