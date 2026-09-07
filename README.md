# Disquería Stgo

## Descripción

E-commerce de una disquería que vende CDs. El sitio muestra un catálogo de discos con su portada y contraportada, artista, categoría musical y precio en pesos chilenos, y permite elegir la cantidad de unidades de cada CD.

Proyecto desarrollado en React + TypeScript para la tarea "Componentes Custom para E-commerce". En esta entrega no hay backend: los productos se simulan con un archivo local (`src/data/products.ts`).

## Componentes creados

Cada componente está en su propia carpeta dentro de `src/components/`, con su archivo `.tsx` y su `.css`.

- **Header**: barra superior con aviso de envíos, logo de la tienda, menú de navegación e ícono de carrito.
- **Hero**: banner principal con título, subtítulo, imagen de fondo y botón. Recibe todo su contenido por props.
- **Button**: botón reutilizable con variantes `primary` y `secondary`. Recibe texto, URL, color y target por props.
- **ProductList**: recibe el arreglo de productos por props y renderiza un `ProductCard` por cada uno usando `map` y `key`.
- **ProductCard**: muestra nombre, artista, categoría, precio e imágenes del CD. Recibe el producto por props y maneja estado con `useState` para el carrusel de imágenes (portada / contraportada) y el selector de cantidad.
- **Footer**: logo y texto de derechos reservados.

## Simulación de datos

`src/data/products.ts` exporta la interfaz `Product` y un arreglo de 8 CDs. Cada producto tiene:

```ts
{
  id: number
  name: string
  artist: string
  category: string
  price: number
  images: string[]   // portada y contraportada
}
```

## Instrucciones para ejecutar el proyecto

Requisitos: Node.js 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/javierfigueroaaaby/disqueria-stgo.git
cd disqueria-stgo

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abrir `http://localhost:5173` en el navegador.

Otros comandos:

```bash
npm run build     # compila TypeScript y genera la versión de producción en /dist
npm run preview   # sirve la versión de producción localmente
npm run lint      # ejecuta ESLint
```

## Tecnologías usadas

- React 19
- TypeScript
- Vite
- CSS (un archivo por componente + estilos globales en `index.css`)
- ESLint
- Git y GitHub

## Capturas de pantalla

### Vista general del e-commerce

![Vista general del e-commerce](./screenshots/captura-sitio-completo.png)

### Tarjeta de producto

![Tarjeta de producto con carrusel de imágenes y selector de cantidad](./screenshots/captura-card.png)

## Estructura del proyecto

```
src/
├── assets/
│   └── img/            # portadas, contraportadas, logo y hero
├── components/
│   ├── Button/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── ProductCard/
│   └── ProductList/
├── data/
│   └── products.ts     # datos simulados
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Flujo de trabajo con Git

El desarrollo se hizo de forma progresiva: una rama por componente, integrada a `main` mediante Pull Request.

- `feature/componente_header`
- `feature/componente_footer`
- `feature/componente_button`
- `feature/componente_hero`
- `feature/componente_productcard`
- `feature/componente_productlist`
- `style/estilos_generales`

## Autor

Javier Figueroa
