import Card from './components/Card';

import { Inter, Poppins, Roboto, Montserrat } from 'next/font/google';

// Configuración de las fuentes
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <main className={`${montserrat.className} flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100`}>
      <h1 className={`${poppins.className} text-4xl font-bold mb-12 text-gray-800`}>
        Aplicación Host
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
          title="Álbumes"
          description="Explora todos los álbumes disponibles."
          image="/albums.png"
          link="/albums"
        />
        <Card
          title="Artistas"
          description="Descubre a tus artistas favoritos."
          image="/artistas.png"
          link="/artists"
          
        />
        <Card
          title="Géneros"
          description="Explora géneros musicales diversos."
          image="/generos.png"
          link="/genres"
          
        />
      </div>
    </main>
  );
}