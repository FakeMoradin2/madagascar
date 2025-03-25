import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Error al reproducir el video:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-screen opacity-75">
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/MadagascarHer.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold text-center font-sans border-black">
            MADAGASCAR
          </h1>
        </div>
      </div>
      <div className='h-max w-full bg-green-800'>
        <div className='p-5 max-w-7xl mx-auto space-y-8'>
          {/* Primera sección: imagen izquierda, texto derecha */}
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <img
              src='/camaleon.jpg'
              alt='Camaleón'
              className='w-full rounded-lg shadow-xl'
            />
            <div className='text-white space-y-4'>
              <p className='text-sm md:text-base lg:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Segunda sección: texto izquierda, imagen derecha */}
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='text-white space-y-4 md:order-1 order-2'>
              <p className='text-sm md:text-base lg:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src='/comida-madagascar.jpg'
              alt='comida'
              className="w-full rounded-lg shadow-xl md:order-2 order-1"
            />
          </div>

          {/* Tercera sección: imagen izquierda, texto derecha */}
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <img
              src='/Flag_of_Madagascar.svg'
              alt='bandera'
              className='w-full rounded-lg shadow-xl'
            />
            <div className='text-white space-y-4'>
              <p className='text-sm md:text-base lg:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Sección del mapa */}
          <div className='w-full rounded-lg overflow-hidden shadow-xl'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7602573.6661152645!2d43.06008570741067!3d-18.929299272844806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21d1a4e3ea238545%3A0x5244e3c1977b1388!2sMadagascar!5e0!3m2!1ses!2ses!4v1709901234567!5m2!1ses!2ses"
              className='w-full h-[300px] md:h-[400px] lg:h-[500px]'
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
