# mfe-next
Creando un Micro-Frontend con Next.js 15: Host y 3 Remotos

 

Esta implementación utilizará la característica de Multi-Zones de Next.js

Las Multi-Zones son una aproximación a los micro-frontends que separan una aplicación grande en aplicaciones Next.js más pequeñas, donde cada una sirve un conjunto específico de rutas. Esto permite desarrollar y desplegar cada aplicación de forma independiente.

 

Estructura del proyecto

 

Vamos a crear la siguiente estructura:

 

- **Host**: Aplicación principal en `/`

- **Remoto 1**: Aplicación para blog en `/albums`

- **Remoto 2**: Aplicación para dashboard en `/artists`

- **Remoto 3**: Aplicación para tienda en `/genres`

 

## Paso 1: Crear la aplicación Host

 

Primero, creemos la aplicación principal que servirá como host:

 



npx create-next-app@latest host-app

cd host-app



 

Cuando te pregunte, selecciona:

 

- TypeScript: Sí

- ESLint: Sí

- Tailwind CSS: Sí

- `src/` directory: No

- App Router: Sí

- Import alias: No

 

 

## Paso 2: Crear las aplicaciones remotas

 

Ahora, creemos las tres aplicaciones remotas. Repite este proceso para cada una:

 



# Ejemplo: Para el artists

npx create-next-app@latest artist-app



 

Usa las mismas configuraciones que para la aplicación host.

 

## Paso 3: Configurar las aplicaciones remotas

 

Para cada aplicación remota, necesitamos configurar un `assetPrefix` para evitar conflictos con los assets estáticos .

 

### Para artists-app

 

Crea o modifica `next.config.js`:

 

```javascript

/** @type {import('next').NextConfig} */

const nextConfig = {

  assetPrefix: '/artists',

}

 

module.exports = nextConfig

```

 

Lo mismo para los otros 2 remotos

 

## Paso 4: Crear contenido básico para cada aplicación

 

Vamos a crear páginas simples para cada aplicación para demostrar la funcionalidad.

 

Ver el código.
 

## Paso 5: Configurar el enrutamiento en la aplicación host

 

Ahora, configuremos el enrutamiento en la aplicación host para dirigir las solicitudes a las aplicaciones remotas. Modifica `next.config.js` en la aplicación host:

 

/** @type {import('next').NextConfig} */

const nextConfig = {

  async rewrites() {

    return [

      // Rutas para artists-app

      {

        source: "/artists",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/artists`,

      },

      {

        source: "/artists/:path*",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/blog/:path*`,

      },

      {

        source: "/artists-static/:path*",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/artists-static/:path*`,

      },

 

      // Rutas para albums-app
      //Hacer lo mismo que arriba modificando la ruta

      

 

      // Rutas para genres-app
      //Hacer lo mismo que arriba modificando la ruta
      
    ]

  },

  eslint: {

    ignoreDuringBuilds: true,

  },

  typescript: {

    ignoreBuildErrors: true,

  },

  images: {

    unoptimized: true,

  },

}

 

module.exports = nextConfig

 

## Paso 6: Configurar las rutas base en las aplicaciones remotas

 

Para cada aplicación remota, necesitamos configurar la ruta base. Modifica `next.config.js` en cada aplicación remota:

 

/** @type {import('next').NextConfig} */

const nextConfig = {

  async rewrites() {

    return [

      // Rutas para artists-app

      {

        source: "/artist",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/artists`,

      },

      {

        source: "/blog/:path*",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/artists/:path*`,

      },

      {

        source: "/artists-static/:path*",

        destination: `${process.env.ARTISTS_DOMAIN || "http://localhost:3001"}/artists-static/:path*`,

      },

 

      // Rutas para albums-app
       //Hacer lo mismo que arriba modificando la ruta
      

      // Rutas para genres-app
       //Hacer lo mismo que arriba modificando la ruta
      

    ]

  },

  eslint: {

    ignoreDuringBuilds: true,

  },

  typescript: {

    ignoreBuildErrors: true,

  },

  images: {

    unoptimized: true,

  },

  assetPrefix: "/artists",

  basePath: "/artists",

}

 

module.exports = nextConfig

 

## Paso 7: Ejecutar las aplicaciones

 

Para probar localmente, necesitamos ejecutar cada aplicación en un puerto diferente:

 



# Terminal 1 - Host app

cd host-app

npm run dev -- -p 3000

 

# Terminal 2 - Artists app

cd artists-app

npm run dev -- -p 3001

 

# Terminal 3 - Albums app

cd albums-app

npm run dev -- -p 3002

 

# Terminal 4 - Genres app

cd genres-app

npm run dev -- -p 3003

```

 

## Paso 8: Probar la integración

 

Ahora puedes acceder a:

 

- `http://localhost:3000` - Aplicación host

- `http://localhost:3000/artists` - Aplicación de artists

- `http://localhost:3000/albums` - Aplicación de albums

- `http://localhost:3000/genres` - Aplicación de genres

 

 

## Consideraciones importantes

 

1. **Enlaces entre zonas**: Para enlaces entre diferentes zonas, usa etiquetas `<a>` en lugar del componente `<Link>` de Next.js .

2. **Compartir código**: Puedes compartir código entre zonas usando paquetes NPM o un monorepo .

3. **Despliegue**: En producción, cada aplicación se despliega por separado, y las variables de entorno (`ALBUMS_DOMAIN`, `ARTISTS_DOMAIN`, `GENRES_DOMAIN`) deben apuntar a los dominios de producción.

