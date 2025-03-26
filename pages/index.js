import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef } from "react";
import Navbar from '../components/Navbar';

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
      <Navbar />
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
      <div className='h-max w-full bg-green-800 relative'>
        {/* Imagen de fondo */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/fondo.jpg"
            alt="Fondo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Degradado oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/75 to-green-950/100"></div>

        {/* Contenido principal */}
        <div className='relative p-5 max-w-7xl mx-auto space-y-8'>
          {/* Primera sección: imagen izquierda, texto derecha */}
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <img
              src='/camaleon.jpg'
              alt='Camaleón'
              className='w-full rounded-lg shadow-xl'
            />
            <div className='text-white space-y-6'>
              <h2 className='text-2xl md:text-3xl font-bold'>Vêtements Traditionnels</h2>
              <div className='space-y-4'>
                <p className='text-sm md:text-base lg:text-lg'>
                  Les vêtements traditionnels de Madagascar varient selon la région et le sexe et sont portés lors de célébrations et d'événements culturels.
                </p>
                
                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>Femmes:</h3>
                  <ul className='list-disc pl-5 space-y-1'>
                    <li>Blouses, pantalons, robes, jumpes assortis</li>
                    <li>"Lamba" assorti, comme la salovana, un tissu cousu et noué sur la poitrine</li>
                    <li>Kisaly, un type de châle qui se porte sur la tête ou sur les épaules</li>
                  </ul>
                </div>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>Hommes:</h3>
                  <ul className='list-disc pl-5'>
                    <li>Chemises à col</li>
                    <li>Pantalons habillés</li>
                    <li>"Flat" (costume Highland masculin)</li>
                  </ul>
                </div>

                <p className='italic mt-4'>
                  Où sont portés les vêtements traditionnels: A la campagne ou dans les quartiers les plus pauvres ou les plus anciens des villes
                </p>
              </div>
            </div>
          </div>

          {/* Segunda sección: texto izquierda, imagen derecha */}
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='text-white space-y-6 md:order-1 order-2'>
              <h2 className='text-2xl md:text-3xl font-bold'>Plats Traditionnels</h2>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>Akoho</h3>
                  <p className='text-sm md:text-base lg:text-lg'>
                    Il se compose de poulet avec du riz cuit avec différentes épices, sur une feuille de laitue.
                  </p>
                </div>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>Lasary voatabia</h3>
                  <p className='text-sm md:text-base lg:text-lg'>
                    Salade de tomates et cevolla, tous coupés en morceaux avec du sel et ail.
                  </p>
                </div>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>Mofo gasy</h3>
                  <p className='text-sm md:text-base lg:text-lg'>
                    Pancake de farine de riz sucré.
                  </p>
                </div>
              </div>
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
            <div className='text-white space-y-6'>
              <h2 className='text-2xl md:text-3xl font-bold'>Expressions Courantes</h2>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <p className='text-sm md:text-base lg:text-lg italic'>"C'est bon, tsara be!"</p>
                  <p className='text-sm md:text-base'>Una mezcla que significa "Está bien, muy bueno!" ("tsara be" es malgache para "muy bueno")</p>
                </div>

                <div className='space-y-2'>
                  <p className='text-sm md:text-base lg:text-lg italic'>"Okie zao, d'accord!"</p>
                  <p className='text-sm md:text-base'>Una combinación de malgache ("zao" que significa "ahora") y francés</p>
                </div>

                <div className='space-y-2'>
                  <p className='text-sm md:text-base lg:text-lg italic'>"Misaotra betsaka, merci!"</p>
                  <p className='text-sm md:text-base'>Usando el agradecimiento en ambos idiomas</p>
                </div>

                <div className='space-y-2'>
                  <p className='text-sm md:text-base lg:text-lg italic'>"Rendez-vous eny amin'ny tsenabe!"</p>
                  <p className='text-sm md:text-base'>"Nos vemos en el mercado!" ("tsenabe" es malgache para "mercado grande")</p>
                </div>
              </div>
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
