import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <a
    href={link}
    className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:brightness-105 transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </a>
  );
}