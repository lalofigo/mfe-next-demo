import Image from "next/image";
import { Inter, Poppins, Roboto, Montserrat } from 'next/font/google';
import artists from './data/artists';
import { groupArtistsByInitial } from './utils/groupArtist';
// Configuración de las fuentes
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });


export default function Home() {
  const groupedArtists = groupArtistsByInitial(artists);

    return (
      <main className={`${montserrat.className} flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100`}>
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-gray-800">Artistas</h1>
        <a
          href="/"
          className="text-blue-500 font-semibold hover:underline transition-colors"
        >
          Volver al Host
        </a>
      </div>
    </header>
      {/* <h1 className={`${poppins.className} text-4xl font-bold mb-12 text-gray-800`}>
        Artistas
      </h1> */}
        <div className="bg-gray-50 p-6 w-[90%]">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {Object.keys(groupedArtists).sort().map((letter) => (
                    <div key={letter}>
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-700">{letter}</h2>
                        </div>
                        {groupedArtists[letter].map((artist) => (
                            <div key={artist.name} className="flex items-center p-4 transition-all duration-200 hover:bg-gray-100 hover:scale-105 rounded-md">
                                <Image width={48} height={48} className="w-12 h-12 rounded-full mr-4" src={artist.image} alt={artist.name} />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{artist.name}</h3>
                                    <p className="text-gray-500 text-sm font-semibold">{artist.genre}</p>
                                    <p className="text-gray-600 text-sm mt-1">{artist.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
      </main>
    );
}
