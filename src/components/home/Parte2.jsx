"use client";
import Image from "next/image";
import React, { Fragment, useRef } from "react";
import "./estilos.css";
import gerentes from "@/components/imagenes/gerentesomoheo.jpg";
import { useIsVisible } from "../UseVisible";
export default function Parte2() {
  const pc = useRef();
  const celular = useRef();
  const siestaVisiblePc = useIsVisible(pc, { threshold: 0.5 }); // Adjust threshold as needed
  const siestaVisibleCelular = useIsVisible(celular); // Adjust threshold as needed

  return (
    <Fragment>
      <section className="flex justify-center items-center h-screen relative max-lg:hidden">
        <div
          className={`w-1/2 overflow-hidden transition-all ease-in duration-500 ${
            siestaVisiblePc
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          ref={pc}
        >
          {/* <div className="px-16 flex justify-center items-center h-screen slider position"></div> */}
          <div className="px-16">
            <Image className="rounded" src={gerentes}></Image>
          </div>
        </div>
        <div className={`w-1/2 overflow-hidden transition-all ease-in duration-500 ${
            siestaVisiblePc
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          ref={pc}>
          <div className="flex flex-col justify-center items-start h-screen px-16">
            <div className="flex gap-1 mb-3">
              <span className="text-2xl font-bold">SOMOS </span>
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-blue-950" />
                <span className="relative text-white text-2xl font-bold">
                  HEO
                </span>
              </span>
            </div>
            <div className="mb-4">
              <p>
                Somos una empresa de{" "}
                <strong> consultoría personalizada </strong> enfocada en la
                asesoría de proyectos para empresas en sus diferentes áreas.
              </p>
              <p>
                Brindamos <strong>soporte profesional y estratégico </strong>{" "}
                que su empresa necesita para el logro de sus objetivos.
              </p>
            </div>
            <a
              href="/"
              className="px-4 py-2 bg-blue-950 text-white hover:bg-blue-800"
            >
              MAS INFORMACIÓN
            </a>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center overflow-hidden max-lg:block lg:hidden mt-10">
        <div className={`h-full transition-all ease-in duration-500 ${siestaVisibleCelular ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`} ref={celular}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4">
              <div className="flex gap-1 mb-3">
                <span className="text-2xl font-bold">SOMOS </span>
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-blue-950" />
                  <span className="relative text-white text-2xl font-bold">
                    HEO
                  </span>
                </span>
              </div>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
                Somos una empresa de{" "}
                <strong> consultoría personalizada </strong> enfocada en la
                asesoría de proyectos para empresas en sus diferentes áreas.
              </p>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-white">
                Brindamos <strong>soporte profesional y estratégico </strong>{" "}
                que su empresa necesita para el logro de sus objetivos.
              </p>

              <Image className="rounded" src={gerentes}></Image>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
