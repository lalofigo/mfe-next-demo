
import Image from 'next/image';
import { Inter, Poppins, Roboto, Montserrat } from 'next/font/google';
import albums from './data/albums';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Home() {
  
    return (
      <main className={`${montserrat.className} flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100`}>
      {/* Header fijo */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-800">Álbumes</h1>
          <a
            href="/"
            className="text-blue-500 font-semibold hover:underline transition-colors"
          >
            Volver al Host
          </a>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="mt-20 bg-gray-50 p-6 w-[90%]">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {albums.map((album) => (
              <li
                key={album.title}
                className="flex items-start p-4 hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Imagen del álbum */}
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden shadow-md">
                <Image
                  // src={`${album.cover}`}
                  src={`/${album.cover}`}
                  alt={album.title}
                  width={96} // Tamaño en píxeles (24 * 4)
                  height={96} // Tamaño en píxeles (24 * 4)
                  className="w-full h-full object-cover"
                />
                </div>

                {/* Información del álbum */}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{album.title}</h2>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold">Artista:</span> {album.artist}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold">Año:</span> {album.year}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{album.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
    );
}
