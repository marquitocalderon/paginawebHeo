"use client";
import React, { Fragment, useState } from "react";
import fotoDark from "@/components/imagenes/heologoazul.png";
import fotoLight from "@/components/imagenes/logocompleto4.webp";
import Image from "next/image";
export default function Navbar() {
  // Agrega un estado para controlar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú
  const tocarBoton = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Fragment>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white dark:bg-black">
        <a className="text-3xl font-bold leading-none" href="/">
          <Image
            className="hidden dark:block max-lg:-ml-7"
            src={fotoLight}
            width={150}
            alt="fotoheo"
          />
          <Image
            className="block dark:hidden max-lg:-ml-7"
            src={fotoDark}
            width={150}
            alt="fotoheo"
          />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3 dark:text-white"
            onClick={tocarBoton}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 ${
            menuVisible ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              INICIO
            </a>
          </li>

          <li>
          <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              SOMOS HEO
            </a>
          </li>

          <li>
          <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              SERVICIOS
            </a>
          </li>

          <li>
          <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              POLITICAS HEO
            </a>
          </li>

          <li>
          <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              CONTACTO
            </a>
          </li>

          <li>
          <a
              className="text-sm text-blue-950 hover:text-blue-500 font-bold dark:text-white max-xl:text-xs hover:border-b-2 hover:border-blue-500  transition duration-300 ease-in-out"
              href="/"
            >
              BLOG
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green-500 hover:bg-green-400 text-sm text-white font-bold  rounded-xl transition duration-200"
          href="#"
        >
          WhatsAppp
        </a>
      </nav>

      <div
        className={`navbar-menu relative z-50 ${
          menuVisible ? "block" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={fotoDark} width={150} className="max-lg:-ml-7" alt="fotoheo"></Image>
            </a>
            <button onClick={tocarBoton} className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-500 hover:bg-blue-500 hover:text-blue-600 rounded"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="block p-4 text-sm font-semibold text-gray-500 hover:bg-blue-500 hover:text-blue-600 rounded"
                  href="#home2"
                >
                  Home2
                </a>
              </li>
              {/* ... Resto del código ... */}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose  text-center  font-semibold bg-green-500 hover:bg-green-400 text-sm text-white  rounded-xl"
                href="#"
              >
                WhatsApp
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
