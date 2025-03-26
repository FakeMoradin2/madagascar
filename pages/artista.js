import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Artista() {
  return (
    <div className="min-h-screen bg-green-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/artist.jpg" // Necesitarás agregar esta imagen en la carpeta public
          alt="Erick Manana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center p-4">
            Erick Manana
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 text-white">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold">
              Le "Bob Dylan de Madagascar"
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                  Erick Manana est un chanteur et compositeur malgache de renommée internationale, 
                  souvent décrit comme le « Bob Dylan de Madagascar » pour son influence significative 
                  sur la musique traditionnelle malgache.
                </p>
                
                <h3 className="text-xl font-semibold">Carrière Musicale</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Début de carrière professionnelle en 1982</li>
                  <li>Membre fondateur du groupe Lolo sy ny Tariny</li>
                  <li>Performance historique à l'Olympia de Paris en 2013</li>
                  <li>35 ans de carrière célébrés sur la scène internationale</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Héritage Musical</h3>
                <p className="text-lg">
                  Sa contribution à la musique malgache est inestimable, fusionnant les styles 
                  traditionnels avec des influences contemporaines. Son style unique et sa voix 
                  distinctive ont inspiré de nombreux artistes de la nouvelle génération.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Réalisations</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Reconnaissance internationale comme ambassadeur de la musique malgache</li>
                    <li>Multiples récompenses pour sa contribution à la culture malgache</li>
                    <li>Performance mémorable à l'Olympia de Paris</li>
                    <li>Plus de quatre décennies de carrière musicale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 