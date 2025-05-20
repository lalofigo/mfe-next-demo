import genres from './data/genres.js';
import { Inter, Poppins, Roboto, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });


export default function Home() {
  return (
    <main className={`${montserrat.className} flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100`}>
      {/* Header fijo */}
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-gray-800">Géneros</h1>
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
          {genres.map((genre) => (
            <li
              key={genre.name}
              className="flex flex-col sm:flex-row items-start sm:items-center p-4 hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Badge del género */}
              <div className="flex-shrink-0">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full">
                  {genre.name}
                </span>
              </div>

              {/* Información del género */}
              <div className="ml-0 sm:ml-4 mt-2 sm:mt-0">
                <p className="text-gray-600 text-sm">{genre.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
  );
}