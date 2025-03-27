import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Vestimenta() {
  const vestimentas = [
    {
      id: 1,
      name: "Lamba",
      description: "Traditional Malagasy cloth worn as a shawl or dress",
      image: "/ejemplo-1.jpg"
    },
    {
      id: 2,
      name: "Malabary",
      description: "Traditional dress worn by Malagasy women",
      image: "/ejemplo-2.jpg"
    },
    {
      id: 3,
      name: "Akanjobe",
      description: "Traditional men's garment for special occasions",
      image: "/ejemplo-3.jpg"
    },
    {
      id: 4,
      name: "Salaka",
      description: "Traditional loincloth worn by men",
      image: "/ejemplo-4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-green-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center p-4">
              Vêtements Traditionnels Malgaches
            </h1>
          </div>
        </div>
      </div>

      {/* Clothing Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vestimentas.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            L'importance des Vêtements Traditionnels
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Les vêtements traditionnels malgaches sont bien plus que de simples habits. 
            Ils représentent l'histoire, la culture et l'identité du peuple malgache, 
            transmises de génération en génération.
          </p>
        </div>
      </div>
    </div>
  );
}