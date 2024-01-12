"use client";
import React, { Fragment, useRef } from "react";
import foto from "@/components/imagenes/fotoinicio.jpg";
import Image from "next/image";
import { useIsVisible } from "../UseVisible";

export default function Parte1() {

  const pc = useRef();
  const celular = useRef();
  const siestaVisiblePc = useIsVisible(pc, { threshold: 0.5 }); // Adjust threshold as needed
  const siestaVisibleCelular = useIsVisible(celular); // Adjust threshold as needed

  return (
    <Fragment>
      <section className="flex justify-center items-center h-[82vh]  overflow-hidden max-lg:hidden">
        <div className={`w-1/2 transition-all ease-in duration-500 ${siestaVisiblePc ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`} ref={pc}>
          <div className="flex flex-col justify-center items-start px-16 h-[82vh]">
            <span className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-950">
              HEO ASESORIAS Y CONSULTORÍA
            </span>
            <h2 className="mb-5 font-sans font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none dark:text-white">
              Empresa 100%{" "}
              <span className="text-blue-950 dark:text-white">peruana</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
              Brindamos servicios de asesoría y consultoría empresarial en el
              mercado sanmartinense, brindamos un servicio personalizado,
              eficiente y de confiabilidad con los estándares de calidad que
              nuestros clientes necesitan, bajo la responsabilidad de un equipo
              técnico especializado de profesionales.
            </p>
          </div>
        </div>
        <div  className={`w-1/2 transition-all ease-in duration-500 ${siestaVisiblePc ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`} ref={pc}>
          <div className="flex justify-center items-center h-[82vh] px-7">
            <Image src={foto} className="w-full rounded-sm"></Image>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center overflow-hidden max-lg:block lg:hidden">
        <div className={`h-full transition-all ease-in duration-500 ${siestaVisibleCelular ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`} ref={celular}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4">
              <span className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-950">
              HEO ASESORIAS Y CONSULTORÍA
            </span>
            <h2 className="mb-5 font-sans font-bold tracking-tight text-gray-900 max-lg:text-3xl sm:leading-none dark:text-white">
              Empresa 100%{" "}
              <span className="text-blue-950 dark:text-white">peruana</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
              Brindamos servicios de asesoría y consultoría empresarial en el
              mercado sanmartinense, brindamos un servicio personalizado,
              eficiente y de confiabilidad con los estándares de calidad que
              nuestros clientes necesitan, bajo la responsabilidad de un equipo
              técnico especializado de profesionales.
            </p>
            </div>
            <div className="col-span-1 px-4">
             <Image src={foto}></Image>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
