import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      {/* Versión móvil */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/" className="text-white hover:text-green-400 transition-colors">
                Madagascar
              </Link>
              <Link href="/artista" className="text-white hover:text-green-400 transition-colors">
                Personnage famoso
              </Link>
              <Link href="/vestimenta" className="text-white hover:text-green-400 transition-colors">
              Vêtements Traditionnels
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Versión desktop */}
      <div className="hidden md:flex justify-evenly items-center p-6">
        <Link 
          href="/" 
          className="text-white hover:text-green-400 transition-colors text-4xl"
        >
          Madagascar
        </Link>
        <div className="flex space-x-8">
          <Link
            href="/artista"
            className="text-white hover:text-green-400 transition-colors text-4xl"
          >
            Personnage famoso
          </Link>
          <Link
            href="/vestimenta"
            className="text-white hover:text-green-400 transition-colors text-4xl"
          >
            Vêtements Traditionnels
          </Link>
        </div>
      </div>
    </nav>
  );
}