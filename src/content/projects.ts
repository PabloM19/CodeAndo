import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "01-landing-personal",
    title: "Landing Personal",
    order: 1,
    durationMin: 45,
    tags: ["HTML", "CSS", "Layout"],
    briefMd: `# Landing Personal

## Objetivo
Crea una landing page personal que presente tu perfil profesional de forma clara y atractiva. Practicarás estructura semántica HTML5, layout responsive con CSS Grid/Flexbox, y diseño visual coherente.

## Estructura sugerida
- \`<header>\` con \`<nav>\` de navegación
- \`<main>\` con secciones:
  - Hero section (\`<section class="hero">\`) con nombre y título
  - Sección "Sobre mí" (\`<section id="sobre-mi">\`)
  - Sección "Habilidades" (\`<section id="habilidades">\`) con lista
- \`<footer>\` con links sociales

## Requisitos
- HTML semántico: header, nav, main, section, footer
- Diseño responsive mobile-first (breakpoint 768px mínimo)
- Estados \`:hover\` visibles en links y botones
- Estados \`:focus-visible\` con outline visible (2px mínimo)
- Variables CSS para colores principales
- Tipografía legible (system-ui, line-height 1.5+)

## Tips
- Usa CSS Grid para el layout general y Flexbox para componentes pequeños
- Añade \`scroll-behavior: smooth\` para navegación suave
- Considera usar \`clamp()\` para tamaños de fuente responsive
- Usa \`max-width\` en contenedores para legibilidad
- Añade \`transition\` a elementos interactivos

## Extensiones (opcional)
- Añade un "skip link" (\`<a href="#main">\`) para accesibilidad
- Implementa modo oscuro con \`prefers-color-scheme\`
- Usa \`scroll-margin-top\` para compensar header sticky
- Añade animaciones sutiles con \`@keyframes\` (respetando \`prefers-reduced-motion\`)

## Errores típicos
- Olvidar \`meta viewport\` → la página no será responsive
- Usar \`<div>\` en lugar de elementos semánticos → peor SEO y accesibilidad
- No añadir \`alt\` a imágenes → problemas de accesibilidad
- Focus invisible o muy sutil → usuarios de teclado no pueden navegar
- Contraste insuficiente entre texto y fondo → ilegible para algunos usuarios
- No probar en móvil real → puede verse roto aunque compile

## Rúbrica rápida
- **Layout**: Grid/Flexbox bien implementado, responsive funcional
- **Semántica**: Uso correcto de header, nav, main, section, footer
- **Responsive**: Breakpoints adecuados, contenido legible en móvil
- **Accesibilidad**: Focus visible, contraste adecuado, alt en imágenes
- **Detalle visual**: Colores consistentes, espaciado uniforme, tipografía clara`,
    checklist: [
      "Crear estructura HTML semántica con header, nav, main, section y footer",
      "Implementar hero section con h1 y subtítulo",
      "Añadir sección 'Sobre mí' con descripción personal",
      "Crear sección 'Habilidades' con lista de tecnologías",
      "Construir navegación funcional con links a secciones",
      "Añadir footer con enlaces a redes sociales",
      "Aplicar diseño responsive con media queries (mobile-first)",
      "Definir variables CSS para colores principales",
      "Implementar estados hover y focus-visible visibles",
      "Añadir meta viewport y estructura básica HTML5",
    ],
    acceptance: [
      "La página se adapta correctamente a pantallas móviles y desktop",
      "Todos los links tienen estados focus visibles (outline 2px mínimo)",
      "El código HTML usa elementos semánticos (header, nav, main, section, footer)",
      "Los colores tienen contraste WCAG AA mínimo (4.5:1 para texto normal)",
      "La tipografía es legible con line-height adecuado",
      "Las imágenes tienen atributo alt descriptivo",
      "La navegación funciona correctamente con scroll suave",
      "El diseño es visualmente coherente y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Estructura HTML semántica completa",
        hint: "Usa header, nav, main con al menos 2 sections, y footer",
        checks: [
          { type: "html_includes", value: "<header>" },
          { type: "html_includes", value: "<nav>" },
          { type: "html_includes", value: "<main>" },
          { type: "html_includes", value: "<section" },
          { type: "html_includes", value: "<footer>" },
        ],
      },
      {
        id: "ch2",
        title: "Hero section con h1 y subtítulo",
        hint: "Crea una sección hero con h1 (tu nombre) y un párrafo con tu título",
        checks: [
          { type: "html_includes", value: "<h1>" },
          { type: "html_regex", value: "class.*hero|id.*hero|\\.hero" },
        ],
      },
      {
        id: "ch3",
        title: "Navegación con links a secciones",
        hint: "Añade un nav con al menos 3 links usando href con #",
        checks: [
          { type: "html_includes", value: "<nav>" },
          { type: "html_regex", value: "<a[^>]*href\\s*=\\s*[\"']#" },
        ],
      },
      {
        id: "ch4",
        title: "Diseño responsive mobile-first",
        hint: "Usa media queries con breakpoint mínimo de 768px",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*768|@media[^}]*min-width" },
          { type: "html_includes", value: "viewport" },
        ],
      },
      {
        id: "ch5",
        title: "Estados focus-visible visibles",
        hint: "Añade outline de al menos 2px en :focus-visible para links y botones",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_regex", value: "outline.*2px|outline.*0\\.125rem" },
        ],
      },
      {
        id: "ch6",
        title: "Footer con links sociales accesibles",
        hint: "Añade footer con enlaces sociales, cada uno con texto descriptivo o aria-label",
        checks: [
          { type: "html_includes", value: "<footer>" },
          { type: "html_regex", value: "social|LinkedIn|GitHub|Twitter" },
          { type: "html_regex", value: "aria-label|>\\s*[A-Za-z]+\\s*<" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Landing Personal</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <!-- Añade navegación aquí -->
  </header>
  
  <main>
    <section class="hero">
      <!-- Añade tu nombre (h1) y título profesional aquí -->
    </section>
    
    <section id="sobre-mi">
      <!-- Añade sección sobre mí aquí -->
    </section>
    
    <section id="habilidades">
      <!-- Añade lista de habilidades aquí -->
    </section>
  </main>
  
  <footer>
    <!-- Añade links sociales aquí -->
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Define tus variables de color aquí */
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Añade tus estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Landing Personal</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a href="#main" class="skip-link">Saltar al contenido</a>
  
  <header>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>
  
  <main id="main">
    <section id="inicio" class="hero">
      <h1>Mi Nombre</h1>
      <p class="subtitle">Desarrollador Web Full Stack</p>
    </section>
    
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <p>Desarrollador apasionado por crear experiencias web increíbles. Especializado en tecnologías modernas y diseño centrado en el usuario.</p>
    </section>
    
    <section id="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  </main>
  
  <footer id="contacto">
    <p>Encuéntrame en:</p>
    <div class="social">
      <a href="#" aria-label="LinkedIn">LinkedIn</a>
      <a href="#" aria-label="GitHub">GitHub</a>
      <a href="#" aria-label="Twitter">Twitter</a>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-primary: #111;
  --color-secondary: #6b7280;
  --color-bg: #f9fafb;
  --color-border: #e5e7eb;
}

html {
  scroll-behavior: smooth;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: var(--color-primary);
}

header {
  background: #fff;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

nav a {
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

nav a:hover {
  color: var(--color-primary);
}

nav a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-radius: 4px;
}

.hero {
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem) 1rem;
  background: var(--color-bg);
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--color-secondary);
}

section {
  padding: clamp(2rem, 5vw, 3rem) 1rem;
  max-width: 800px;
  margin: 0 auto;
  scroll-margin-top: 80px;
}

section h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

ul li {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 2rem;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.social {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.social a {
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.social a:hover {
  color: var(--color-primary);
}

.social a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  * {
    transition: none !important;
  }
}`,
    },
  },
  {
    slug: "02-blog-cards",
    title: "Blog Cards",
    order: 2,
    durationMin: 40,
    tags: ["CSS", "Layout", "Cards"],
    briefMd: `# Blog Cards

## Objetivo
Crea un grid de tarjetas de blog con diseño moderno y responsive. Practicarás CSS Grid avanzado, manejo de imágenes responsive, y efectos de interacción sutiles.

## Estructura sugerida
- Contenedor principal con \`display: grid\`
- Múltiples \`<article class="card">\` con:
  - \`<img>\` con alt descriptivo
  - \`<h2>\` para el título
  - \`<p class="date">\` para la fecha
  - \`<p class="excerpt">\` para el extracto
  - \`<a class="read-more">\` para el link

## Requisitos
- CSS Grid con \`grid-template-columns: repeat(auto-fit, minmax(...))\`
- Cards con \`box-shadow\` y \`border-radius\` generoso (12px+)
- Imágenes con \`aspect-ratio\` o técnica equivalente
- Tipografía jerárquica (h2 > date > excerpt)
- Estados \`:hover\` con transform/box-shadow
- Estados \`:focus-visible\` visibles en links

## Tips
- Usa \`minmax(300px, 1fr)\` para columnas flexibles
- Añade \`transition\` a propiedades que cambian en hover
- Usa \`object-fit: cover\` para imágenes que deben llenar el espacio
- Considera \`gap\` en lugar de margin para espaciado del grid
- Añade \`overflow: hidden\` en cards para que border-radius funcione en imágenes

## Extensiones (opcional)
- Implementa filtros por categoría con CSS \`:has()\`
- Añade efecto de "skeleton loading" con \`@keyframes\`
- Usa \`clamp()\` para tamaños de fuente responsive
- Implementa lazy loading con \`loading="lazy"\` en imágenes

## Errores típicos
- Olvidar \`aspect-ratio\` en imágenes → se deforman en diferentes tamaños
- No usar \`object-fit\` → imágenes se estiran incorrectamente
- Grid sin \`gap\` → usar margin negativo es frágil
- Hover sin \`transition\` → cambios bruscos y poco profesionales
- Links sin \`:focus-visible\` → usuarios de teclado no pueden navegar
- Imágenes sin \`alt\` → problemas de accesibilidad y SEO

## Rúbrica rápida
- **Layout**: Grid responsive funcional, adaptación fluida a diferentes tamaños
- **Semántica**: Uso de \`<article>\` para cada card, estructura HTML clara
- **Responsive**: Grid se adapta correctamente (3 cols → 2 cols → 1 col)
- **Accesibilidad**: Alt en imágenes, focus visible, contraste adecuado
- **Detalle visual**: Hover effects sutiles, sombras consistentes, tipografía legible`,
    checklist: [
      "Crear grid responsive con CSS Grid usando auto-fit y minmax",
      "Implementar al menos 3 cards con estructura completa (imagen, título, fecha, extracto, link)",
      "Añadir imágenes con aspect-ratio preservado y object-fit",
      "Aplicar hover effects sutiles (transform, box-shadow) con transiciones",
      "Implementar estados focus-visible visibles en todos los links",
      "Usar tipografía jerárquica (h2 > date > excerpt)",
      "Aplicar border-radius generoso (12px+) y box-shadow en cards",
      "Asegurar que todas las imágenes tengan atributo alt descriptivo",
      "Verificar diseño responsive en al menos 2 breakpoints",
      "Mantener espaciado consistente con gap en grid",
    ],
    acceptance: [
      "El grid se adapta correctamente: 3 columnas en desktop, 2 en tablet, 1 en móvil",
      "Las cards tienen buen contraste (WCAG AA) y legibilidad",
      "Los hover effects son sutiles (translateY, sombra) y tienen transición suave",
      "Las imágenes mantienen proporción correcta sin deformarse",
      "Todos los links tienen estados focus-visible con outline visible",
      "El código HTML es semántico usando article para cada card",
      "Las imágenes tienen alt descriptivo y relevante",
      "El diseño es visualmente coherente y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Grid responsive con auto-fit y minmax",
        hint: "Usa display: grid con grid-template-columns usando repeat(auto-fit, minmax(...))",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-template-columns.*repeat.*auto-fit.*minmax" },
        ],
      },
      {
        id: "ch2",
        title: "Cards con estructura semántica completa",
        hint: "Cada card debe ser un article con imagen (alt), h2, fecha, extracto y link",
        checks: [
          { type: "html_includes", value: "<article" },
          { type: "html_regex", value: "<img[^>]*alt\\s*=" },
          { type: "html_includes", value: "<h2" },
        ],
      },
      {
        id: "ch3",
        title: "Hover effects con transiciones",
        hint: "Añade :hover con transform o box-shadow y transition",
        checks: [
          { type: "css_regex", value: "\\.card.*:hover|\\.card:hover" },
          { type: "css_includes", value: "transition" },
          { type: "css_regex", value: "transform|box-shadow" },
        ],
      },
      {
        id: "ch4",
        title: "Imágenes con aspect-ratio y object-fit",
        hint: "Usa aspect-ratio en imágenes y object-fit: cover",
        checks: [
          { type: "css_includes", value: "aspect-ratio" },
          { type: "css_includes", value: "object-fit" },
        ],
      },
      {
        id: "ch5",
        title: "Estados focus-visible en links",
        hint: "Añade :focus-visible con outline visible en los links de las cards",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_regex", value: "outline.*2px|outline.*0\\.125rem" },
        ],
      },
      {
        id: "ch6",
        title: "Media queries para breakpoints responsive",
        hint: "Añade al menos un media query para adaptar el grid en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Cards</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <article class="card">
      <!-- Añade imagen con alt aquí -->
      <div class="card-content">
        <!-- Añade título (h2), fecha, extracto y link aquí -->
      </div>
    </article>
    
    <!-- Añade al menos 2 cards más aquí -->
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.container {
  /* Añade grid aquí */
}

.card {
  /* Añade estilos de card aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Cards</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <article class="card">
      <img src="https://via.placeholder.com/400x250" alt="Post 1">
      <div class="card-content">
        <h2>Título del Post</h2>
        <p class="date">15 de enero, 2024</p>
        <p class="excerpt">Extracto del artículo que resume el contenido principal...</p>
        <a href="#" class="read-more">Leer más</a>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x250" alt="Post 2">
      <div class="card-content">
        <h2>Otro Título</h2>
        <p class="date">10 de enero, 2024</p>
        <p class="excerpt">Otro extracto interesante del blog...</p>
        <a href="#" class="read-more">Leer más</a>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x250" alt="Post 3">
      <div class="card-content">
        <h2>Tercer Post</h2>
        <p class="date">5 de enero, 2024</p>
        <p class="excerpt">Más contenido para el blog...</p>
        <a href="#" class="read-more">Leer más</a>
      </div>
    </article>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card h2 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: 0.5rem;
  color: #111;
  line-height: 1.3;
}

.date {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.excerpt {
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
  flex: 1;
}

.read-more {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  align-self: flex-start;
}

.read-more:hover {
  color: #1d4ed8;
}

.read-more:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  body {
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "03-pricing-bento",
    title: "Pricing Bento",
    order: 3,
    durationMin: 50,
    tags: ["CSS", "Layout", "Bento"],
    briefMd: `# Pricing Bento

## Objetivo
Diseña una sección de precios con estilo "bento box" moderno y minimalista. Practicarás CSS Grid avanzado con áreas asimétricas, diseño de componentes interactivos, y jerarquía visual.

## Estructura sugerida
- Contenedor con \`display: grid\` y \`grid-template-areas\`
- Múltiples \`<div class="plan">\` con:
  - \`<h2>\` para el nombre del plan
  - \`<p class="price">\` con precio y período
  - \`<ul>\` con lista de características
  - \`<button>\` para CTA
  - Badge opcional \`<span class="badge">Popular</span>\`

## Requisitos
- Grid CSS con \`grid-template-areas\` para layout asimétrico
- Cards con \`border-radius\` generoso (22px+)
- Tipografía jerárquica (h1 > h2 > price > list)
- Estados \`:hover\` y \`:focus-visible\` visibles en botones
- Badge "Popular" destacado visualmente
- Diseño responsive (grid se adapta en móvil)

## Tips
- Usa \`grid-template-areas\` con nombres descriptivos ("basic", "popular", "enterprise")
- Añade \`position: relative\` en card popular para posicionar badge absoluto
- Usa \`gap\` en grid para espaciado consistente
- Considera \`clamp()\` para precios responsive
- Añade \`transition\` a botones y cards

## Extensiones (opcional)
- Implementa animación de "pulse" en badge Popular con \`@keyframes\`
- Usa \`clamp()\` para tamaños de fuente responsive
- Añade efecto de "glow" en hover del plan popular
- Implementa modo oscuro con \`prefers-color-scheme\`

## Errores típicos
- Grid sin \`grid-template-areas\` → difícil crear layout asimétrico
- Border-radius pequeño (<16px) → no se ve estilo bento
- Badge sin \`position: absolute\` → rompe el layout
- Botones sin \`:focus-visible\` → usuarios de teclado no pueden navegar
- Precio sin separación visual del período → confuso
- Grid sin \`gap\` → usar margin es frágil y difícil de mantener

## Rúbrica rápida
- **Layout**: Grid asimétrico funcional con áreas de diferentes tamaños
- **Semántica**: Estructura HTML clara, uso apropiado de listas
- **Responsive**: Grid se adapta correctamente a móvil (columnas → filas)
- **Accesibilidad**: Focus visible, contraste adecuado, botones accesibles
- **Detalle visual**: Estilo bento consistente, jerarquía clara, interacciones sutiles`,
    checklist: [
      "Crear grid asimétrico usando grid-template-areas con al menos 3 áreas diferentes",
      "Implementar al menos 3 cards de precios con estructura completa",
      "Añadir badge 'Popular' destacado en una card (position absolute)",
      "Incluir botones CTA en cada card con estados hover y focus-visible",
      "Aplicar border-radius generoso (22px+) en todas las cards",
      "Definir variables CSS para colores principales",
      "Implementar diseño responsive con media queries",
      "Añadir lista de características con iconos o checkmarks",
      "Asegurar contraste adecuado en todos los textos",
      "Verificar que el plan popular sea visualmente destacado",
    ],
    acceptance: [
      "El grid tiene áreas de diferentes tamaños (al menos una card ocupa más espacio)",
      "Las cards tienen buen contraste WCAG AA y legibilidad",
      "El badge 'Popular' es claramente visible y no rompe el layout",
      "El diseño es responsive (grid se adapta a móvil)",
      "Todos los botones tienen estados focus-visible visibles",
      "Los precios están claramente separados del período",
      "El diseño mantiene estilo bento consistente",
      "Las interacciones (hover) son sutiles y profesionales",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Grid bento asimétrico con grid-template-areas",
        hint: "Usa grid-template-areas para crear un layout donde al menos una card ocupe más espacio",
        checks: [
          { type: "css_includes", value: "grid-template-areas" },
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-area:" },
        ],
      },
      {
        id: "ch2",
        title: "Cards con border-radius generoso estilo bento",
        hint: "Usa border-radius de al menos 22px para el estilo bento",
        checks: [
          { type: "css_includes", value: "border-radius" },
          { type: "css_regex", value: "border-radius.*(22|2\\.75rem|1\\.375rem)" },
        ],
      },
      {
        id: "ch3",
        title: "Badge 'Popular' con position absolute",
        hint: "Añade un badge destacando un plan como popular, usando position: absolute",
        checks: [
          { type: "html_includes", value: "Popular" },
          { type: "css_includes", value: "position: absolute" },
        ],
      },
      {
        id: "ch4",
        title: "Botones CTA con estados interactivos",
        hint: "Cada card debe tener un botón con :hover y :focus-visible",
        checks: [
          { type: "html_includes", value: "<button" },
          { type: "css_regex", value: "button.*:hover|button:hover" },
          { type: "css_includes", value: ":focus-visible" },
        ],
      },
      {
        id: "ch5",
        title: "Lista de características",
        hint: "Añade una lista (ul) con características de cada plan",
        checks: [
          { type: "html_includes", value: "<ul" },
          { type: "html_includes", value: "<li" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive con media queries",
        hint: "Añade media queries para adaptar el grid en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing Bento</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="pricing">
    <h1>Planes y Precios</h1>
    <div class="pricing-grid">
      <div class="plan plan-basic">
        <!-- Añade contenido del plan básico aquí -->
      </div>
      
      <div class="plan plan-popular">
        <!-- Añade plan popular con badge aquí -->
      </div>
      
      <div class="plan plan-enterprise">
        <!-- Añade plan enterprise aquí -->
      </div>
    </div>
  </section>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.pricing-grid {
  /* Añade grid con grid-template-areas aquí */
}

.plan {
  /* Añade estilos de card aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing Bento</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="pricing">
    <h1>Planes y Precios</h1>
    <div class="pricing-grid">
      <div class="plan plan-basic">
        <h2>Básico</h2>
        <p class="price">$9<span>/mes</span></p>
        <ul>
          <li>✓ Característica 1</li>
          <li>✓ Característica 2</li>
          <li>✓ Característica 3</li>
        </ul>
        <button>Elegir plan</button>
      </div>
      
      <div class="plan plan-popular">
        <div class="badge">Popular</div>
        <h2>Pro</h2>
        <p class="price">$29<span>/mes</span></p>
        <ul>
          <li>✓ Todas las características básicas</li>
          <li>✓ Característica premium 1</li>
          <li>✓ Característica premium 2</li>
          <li>✓ Soporte prioritario</li>
        </ul>
        <button class="cta">Elegir plan</button>
      </div>
      
      <div class="plan plan-enterprise">
        <h2>Enterprise</h2>
        <p class="price">$99<span>/mes</span></p>
        <ul>
          <li>✓ Todo lo de Pro</li>
          <li>✓ Características avanzadas</li>
          <li>✓ Soporte 24/7</li>
        </ul>
        <button>Contactar</button>
      </div>
    </div>
  </section>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-primary: #111;
  --color-secondary: #6b7280;
  --color-accent: #b6e68e;
  --color-bg: #f9fafb;
  --color-border: #e5e7eb;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: var(--color-bg);
}

.pricing {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  color: var(--color-primary);
}

.pricing-grid {
  display: grid;
  grid-template-areas:
    "basic popular enterprise";
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 1.5rem;
}

.plan {
  background: white;
  border-radius: 22px;
  padding: 2rem;
  border: 1px solid var(--color-border);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.plan-basic {
  grid-area: basic;
}

.plan-popular {
  grid-area: popular;
  border-color: var(--color-accent);
  background: var(--color-bg);
}

.plan-enterprise {
  grid-area: enterprise;
}

.badge {
  position: absolute;
  top: -12px;
  right: 1.5rem;
  background: var(--color-accent);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.plan h2 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.price {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.price span {
  font-size: 1rem;
  color: var(--color-secondary);
  font-weight: normal;
}

.plan ul {
  list-style: none;
  margin-bottom: 2rem;
}

.plan li {
  padding: 0.5rem 0;
  color: #4b5563;
}

.plan button {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  background: white;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 500;
}

.plan button:hover {
  background: #f3f4f6;
}

.plan button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.plan-popular .cta {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-primary);
  font-weight: 600;
}

.plan-popular .cta:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-areas:
      "basic"
      "popular"
      "enterprise";
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .plan {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "04-form-accesible",
    title: "Formulario Accesible",
    order: 4,
    durationMin: 40,
    tags: ["HTML", "CSS", "Accesibilidad"],
    briefMd: `# Formulario Accesible

## Objetivo
Crea un formulario de contacto accesible y bien estructurado siguiendo las mejores prácticas de accesibilidad web. Practicarás asociación de labels, estados de formulario, validación visual, y navegación por teclado.

## Estructura sugerida
- \`<form>\` con \`<fieldset>\` y \`<legend>\` para agrupar campos
- Cada input con \`<label for="id">\` asociado
- Inputs con \`id\`, \`name\`, y opcionalmente \`required\`
- Mensajes de error con \`aria-describedby\` (opcional, puede ser solo visual)
- Botón de envío con \`type="submit"\`

## Requisitos
- Labels asociados con \`for\` e \`id\` en todos los inputs
- Estados \`:focus-visible\` visibles con outline mínimo 2px
- Contraste WCAG AA (4.5:1 mínimo para texto normal)
- Estructura semántica: fieldset, legend, label, input
- Campos required marcados visualmente (asterisco o texto)
- Mensajes de error accesibles (si se implementan)

## Tips
- Usa \`fieldset\` y \`legend\` para agrupar campos relacionados
- Añade \`aria-label="requerido"\` o texto visual para campos obligatorios
- Usa \`aria-describedby\` para conectar mensajes de error con inputs
- Considera estados \`:invalid\` para validación visual
- Añade \`autocomplete\` cuando sea apropiado (name, email, etc.)

## Extensiones (opcional)
- Implementa validación visual con \`:invalid\` y \`:valid\`
- Usa \`aria-live="polite"\` para anunciar errores
- Añade iconos de validación (checkmark, error) con pseudoelementos
- Implementa estados disabled con estilo visual claro

## Errores típicos
- Inputs sin labels asociados → lectores de pantalla no pueden identificar campos
- Focus invisible o muy sutil → usuarios de teclado no pueden navegar
- Contraste insuficiente → texto ilegible para algunos usuarios
- Sin fieldset/legend → usuarios no entienden agrupación de campos
- Mensajes de error no asociados → usuarios no saben qué campo tiene error
- Placeholder como único label → desaparece al escribir, malo para accesibilidad

## Rúbrica rápida
- **Layout**: Formulario bien estructurado con fieldset/legend
- **Semántica**: Labels asociados correctamente, estructura HTML clara
- **Responsive**: Formulario se adapta correctamente a móvil
- **Accesibilidad**: Focus visible, labels asociados, contraste adecuado, navegación por teclado funcional
- **Detalle visual**: Estados claros, mensajes útiles, diseño limpio`,
    checklist: [
      "Crear estructura semántica con form, fieldset y legend",
      "Asociar labels con for e id en todos los inputs",
      "Añadir atributo required en campos obligatorios",
      "Implementar estados focus-visible visibles (outline 2px mínimo)",
      "Marcar visualmente campos requeridos (asterisco o texto)",
      "Aplicar contraste adecuado (WCAG AA mínimo)",
      "Añadir type apropiado en inputs (email, tel, etc.)",
      "Crear botón de envío con type='submit'",
      "Asegurar navegación por teclado funcional",
      "Verificar que todos los campos tengan name atributo",
    ],
    acceptance: [
      "Todos los inputs tienen labels asociados correctamente (for/id)",
      "Los estados focus-visible son claramente visibles (outline 2px+)",
      "El contraste es adecuado (WCAG AA mínimo)",
      "La estructura es semántica (fieldset, legend, label)",
      "Los campos requeridos están marcados visualmente",
      "El formulario es navegable completamente por teclado",
      "Los tipos de input son apropiados (email, tel, text, etc.)",
      "El diseño es limpio y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Labels asociados con for e id",
        hint: "Crea labels con atributo for que coincida con id de inputs",
        checks: [
          { type: "html_includes", value: "<label" },
          { type: "html_regex", value: "<label[^>]*for\\s*=" },
          { type: "html_regex", value: "id\\s*=\\s*[\"'][^\"']+[\"']" },
        ],
      },
      {
        id: "ch2",
        title: "Fieldset y legend para agrupar",
        hint: "Usa fieldset y legend para agrupar campos relacionados",
        checks: [
          { type: "html_includes", value: "<fieldset" },
          { type: "html_includes", value: "<legend" },
        ],
      },
      {
        id: "ch3",
        title: "Estados focus-visible visibles",
        hint: "Añade :focus-visible con outline de al menos 2px en inputs",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_regex", value: "outline.*2px|outline.*0\\.125rem" },
        ],
      },
      {
        id: "ch4",
        title: "Campos required marcados",
        hint: "Añade atributo required y marca visualmente (asterisco o texto)",
        checks: [
          { type: "html_includes", value: "required" },
          { type: "html_regex", value: "\\*|requerido|required" },
        ],
      },
      {
        id: "ch5",
        title: "Tipos de input apropiados",
        hint: "Usa type='email' para email y otros tipos apropiados",
        checks: [
          { type: "html_regex", value: "type\\s*=\\s*[\"']email[\"']" },
          { type: "html_includes", value: 'type="text"' },
        ],
      },
      {
        id: "ch6",
        title: "Botón submit accesible",
        hint: "Crea botón con type='submit' y estados focus-visible",
        checks: [
          { type: "html_regex", value: "type\\s*=\\s*[\"']submit[\"']" },
          { type: "css_includes", value: ":focus-visible" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario Accesible</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <form>
    <fieldset>
      <legend>Información de contacto</legend>
      <!-- Añade labels e inputs aquí -->
      <!-- Añade botón de envío aquí -->
    </fieldset>
  </form>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}

fieldset {
  /* Añade estilos de fieldset aquí */
}

label {
  /* Añade estilos de label aquí */
}

input, textarea {
  /* Añade estilos de inputs aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario Accesible</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <form>
    <fieldset>
      <legend>Información de contacto</legend>
      
      <label for="nombre">
        Nombre <span aria-label="requerido">*</span>
      </label>
      <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        required 
        aria-describedby="nombre-error"
        autocomplete="name"
      >
      <span id="nombre-error" class="error" role="alert"></span>
      
      <label for="email">
        Email <span aria-label="requerido">*</span>
      </label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        autocomplete="email"
        aria-describedby="email-error"
      >
      <span id="email-error" class="error" role="alert"></span>
      
      <label for="telefono">
        Teléfono
      </label>
      <input 
        type="tel" 
        id="telefono" 
        name="telefono" 
        autocomplete="tel"
      >
      
      <label for="mensaje">
        Mensaje
      </label>
      <textarea 
        id="mensaje" 
        name="mensaje"
        rows="4"
      ></textarea>
      
      <button type="submit">Enviar</button>
    </fieldset>
  </form>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  background: white;
}

legend {
  padding: 0 0.75rem;
  font-weight: 600;
  color: #111;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #111;
}

label span {
  color: #dc2626;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
}

input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-color: #b6e68e;
}

input:invalid:not(:focus):not(:placeholder-shown),
textarea:invalid:not(:focus):not(:placeholder-shown) {
  border-color: #dc2626;
}

.error {
  color: #dc2626;
  font-size: 0.875rem;
  display: block;
  margin-top: -0.75rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: #b6e68e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.9;
}

button:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  body {
    padding: 1rem;
  }
  
  fieldset {
    padding: 1.5rem;
  }
}`,
    },
  },
  {
    slug: "05-navbar-responsive",
    title: "Navbar Responsive",
    order: 5,
    durationMin: 45,
    tags: ["HTML", "CSS", "Responsive"],
    briefMd: `# Navbar Responsive

## Objetivo
Crea una barra de navegación responsive con menú hamburguesa funcional usando solo CSS (checkbox hack o details/summary). Practicarás técnicas avanzadas de CSS sin JavaScript, estados de formularios, y animaciones.

## Estructura sugerida
- \`<header class="navbar">\` con:
  - Logo/brand (\`<div class="brand">\`)
  - Checkbox oculto (\`<input type="checkbox" id="menu-toggle">\`) o \`<details>\`
  - Label hamburguesa (\`<label for="menu-toggle" class="hamburger">\`)
  - Lista de navegación (\`<ul class="nav-links">\`) con links

## Requisitos
- Navbar \`position: sticky\` o \`fixed\` en desktop
- Menú hamburguesa funcional con checkbox hack (sin JS)
- Transiciones suaves en apertura/cierre del menú
- Diseño responsive (menú horizontal en desktop, vertical en móvil)
- Estados \`:hover\` y \`:focus-visible\` visibles en links
- Icono hamburguesa con animación (opcional)

## Tips
- Usa \`#menu-toggle:checked ~ .nav-links\` para mostrar/ocultar menú
- Oculta checkbox con \`display: none\` o \`position: absolute; opacity: 0\`
- Usa \`transform\` y \`opacity\` para animar el menú móvil
- Considera \`max-height\` con \`transition\` para animación suave
- Añade \`aria-label\` al label hamburguesa para accesibilidad

## Extensiones (opcional)
- Implementa animación de hamburguesa a X con \`@keyframes\`
- Usa \`backdrop-filter: blur()\` para overlay del menú móvil
- Añade efecto de "slide-in" desde la derecha
- Implementa \`prefers-reduced-motion\` para desactivar animaciones

## Errores típicos
- Checkbox visible → rompe el diseño, debe estar oculto
- Menú sin \`position: absolute\` en móvil → no se superpone correctamente
- Transición sin \`max-height\` o \`transform\` → animación brusca
- Links sin \`:focus-visible\` → usuarios de teclado no pueden navegar
- Hamburguesa sin \`cursor: pointer\` → UX confusa
- Z-index incorrecto → menú queda detrás de otros elementos

## Rúbrica rápida
- **Layout**: Navbar sticky funcional, menú hamburguesa operativo sin JS
- **Semántica**: Uso correcto de nav, ul, li, a
- **Responsive**: Menú se adapta correctamente (horizontal → vertical)
- **Accesibilidad**: Focus visible, aria-labels, navegación por teclado funcional
- **Detalle visual**: Transiciones suaves, animaciones sutiles, diseño limpio`,
    checklist: [
      "Crear navbar con position sticky o fixed",
      "Implementar checkbox hack para menú hamburguesa (sin JS)",
      "Ocultar checkbox correctamente (display: none o position: absolute)",
      "Crear icono hamburguesa con 3 líneas usando spans o pseudoelementos",
      "Añadir lista de navegación con al menos 4 links",
      "Implementar transiciones suaves en apertura/cierre del menú",
      "Aplicar diseño responsive (horizontal desktop, vertical móvil)",
      "Añadir estados hover y focus-visible visibles en links",
      "Asegurar que el menú móvil se superpone correctamente",
      "Verificar navegación por teclado funcional",
    ],
    acceptance: [
      "El menú hamburguesa funciona correctamente sin JavaScript",
      "Las transiciones son suaves (no bruscas)",
      "El diseño es responsive (menú horizontal en desktop, vertical en móvil)",
      "Los estados hover funcionan correctamente",
      "Todos los links tienen estados focus-visible visibles",
      "El menú móvil se superpone correctamente sobre el contenido",
      "La navegación por teclado funciona (Tab, Enter, Escape)",
      "El diseño es visualmente limpio y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Navbar sticky o fixed",
        hint: "Usa position: sticky o fixed en el navbar",
        checks: [
          { type: "css_includes", value: "position: sticky" },
          { type: "css_includes", value: "position: fixed" },
        ],
      },
      {
        id: "ch2",
        title: "Checkbox hack funcional",
        hint: "Crea checkbox oculto y usa :checked para mostrar/ocultar menú",
        checks: [
          { type: "html_includes", value: 'type="checkbox"' },
          { type: "css_regex", value: ":checked.*~|:checked~" },
        ],
      },
      {
        id: "ch3",
        title: "Icono hamburguesa",
        hint: "Crea icono hamburguesa con 3 líneas usando spans o pseudoelementos",
        checks: [
          { type: "html_includes", value: "hamburger" },
          { type: "html_regex", value: "<span|<label.*for" },
        ],
      },
      {
        id: "ch4",
        title: "Menú responsive con media queries",
        hint: "Añade media query para cambiar menú de horizontal a vertical",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
      {
        id: "ch5",
        title: "Transiciones suaves",
        hint: "Añade transition a propiedades que cambian (transform, opacity, max-height)",
        checks: [
          { type: "css_includes", value: "transition" },
          { type: "css_regex", value: "transition.*transform|transition.*opacity" },
        ],
      },
      {
        id: "ch6",
        title: "Estados focus-visible en links",
        hint: "Añade :focus-visible con outline visible en todos los links de navegación",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_regex", value: "outline.*2px|outline.*0\\.125rem" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar Responsive</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="navbar">
    <div class="brand">Logo</div>
    <!-- Añade checkbox y label hamburguesa aquí -->
    <!-- Añade lista de navegación aquí -->
  </header>
  
  <main>
    <p>Contenido de ejemplo para probar el scroll</p>
  </main>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  /* Añade estilos de navbar aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar Responsive</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="navbar">
    <div class="brand">Logo</div>
    <input type="checkbox" id="menu-toggle" aria-label="Toggle menu">
    <label for="menu-toggle" class="hamburger" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#acerca">Acerca</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="inicio" style="padding: 4rem 1rem;">
      <h1>Inicio</h1>
      <p>Contenido de ejemplo</p>
    </section>
  </main>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.brand {
  font-weight: bold;
  font-size: 1.25rem;
  color: #111;
}

#menu-toggle {
  display: none;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #111;
  transition: transform 0.3s, opacity 0.3s;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #6b7280;
  transition: color 0.2s;
  font-weight: 500;
}

.nav-links a:hover {
  color: #111;
}

.nav-links a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  #menu-toggle:checked ~ nav .nav-links {
    max-height: 300px;
    padding: 1rem;
  }
  
  .nav-links li {
    padding: 0.5rem 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hamburger span,
  .nav-links {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "06-dashboard-bento",
    title: "Dashboard Bento",
    order: 6,
    durationMin: 60,
    tags: ["CSS", "Layout", "Bento"],
    briefMd: `# Dashboard Bento

## Objetivo
Crea un dashboard con layout estilo bento box asimétrico donde algunas cards ocupan más espacio que otras. Practicarás CSS Grid avanzado con \`grid-column: span\`, diseño de métricas visuales, y organización de información compleja.

## Estructura sugerida
- Contenedor principal con \`display: grid\`
- Múltiples \`<div class="card">\` con:
  - Card grande (\`grid-column: span 2\`) con métrica principal
  - Cards pequeñas con métricas secundarias
  - Card ancha (\`grid-column: span 2\` o más) para tabla/lista
  - Cada card con título, número grande, y opcionalmente icono

## Requisitos
- Grid CSS con \`grid-template-columns\` y uso de \`grid-column: span\`
- Cards con \`border-radius\` generoso (22px+)
- Tipografía jerárquica (números grandes para métricas)
- Diseño responsive (grid se adapta en móvil)
- Estados \`:hover\` sutiles en cards

## Tips
- Usa \`grid-column: span 2\` para cards que ocupan 2 columnas
- Considera \`grid-row: span 2\` para cards altas
- Usa \`clamp()\` para números de métricas responsive
- Añade iconos pequeños (emoji o símbolos Unicode) para contexto visual
- Mantén espaciado consistente con \`gap\`

## Extensiones (opcional)
- Implementa animación de "count-up" con \`@keyframes\` (solo visual)
- Usa \`clamp()\` para tamaños de fuente responsive en métricas
- Añade efecto de "glow" sutil en hover
- Implementa modo oscuro con \`prefers-color-scheme\`

## Errores típicos
- Grid sin \`gap\` → usar margin es frágil
- Cards sin \`grid-column: span\` → todas del mismo tamaño
- Métricas sin jerarquía visual → números pequeños no destacan
- Sin responsive → grid se rompe en móvil
- Border-radius inconsistente → no se ve estilo bento
- Cards sin padding adecuado → contenido muy pegado a bordes

## Rúbrica rápida
- **Layout**: Grid asimétrico funcional con cards de diferentes tamaños
- **Semántica**: Estructura HTML clara, uso apropiado de headings
- **Responsive**: Grid se adapta correctamente (columnas → filas en móvil)
- **Accesibilidad**: Contraste adecuado, estructura semántica
- **Detalle visual**: Estilo bento consistente, métricas destacadas, diseño limpio`,
    checklist: [
      "Crear grid asimétrico usando grid-column: span para cards de diferentes tamaños",
      "Implementar al menos 4 cards: 1 grande (span 2), 2 pequeñas, 1 ancha",
      "Añadir métricas destacadas con números grandes y títulos",
      "Aplicar border-radius generoso (22px+) en todas las cards",
      "Definir variables CSS para colores principales",
      "Implementar diseño responsive con media queries",
      "Añadir estados hover sutiles en las cards",
      "Asegurar tipografía jerárquica (números > títulos)",
      "Verificar espaciado consistente con gap",
      "Incluir iconos o símbolos visuales en métricas",
    ],
    acceptance: [
      "El grid tiene áreas asimétricas (al menos una card ocupa más espacio)",
      "Las cards muestran métricas claramente (números grandes, títulos)",
      "El diseño es responsive (grid se adapta a móvil)",
      "Todas las cards tienen estilo bento consistente",
      "Los números de métricas son visualmente destacados",
      "El diseño es limpio y organizado",
      "Las interacciones (hover) son sutiles",
      "El código HTML es semántico y bien estructurado",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Grid asimétrico con grid-column span",
        hint: "Usa grid-column: span 2 para hacer que algunas cards ocupen más columnas",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-column.*span|grid-column:\\s*span" },
        ],
      },
      {
        id: "ch2",
        title: "Cards con métricas destacadas",
        hint: "Crea cards con números grandes (métricas) y títulos",
        checks: [
          { type: "html_includes", value: "<h2" },
          { type: "html_regex", value: "metric|\\d+[,\\.]?\\d*" },
        ],
      },
      {
        id: "ch3",
        title: "Border-radius generoso estilo bento",
        hint: "Usa border-radius de al menos 22px",
        checks: [
          { type: "css_includes", value: "border-radius" },
          { type: "css_regex", value: "border-radius.*(22|2\\.75rem)" },
        ],
      },
      {
        id: "ch4",
        title: "Gap para espaciado consistente",
        hint: "Usa gap en el grid para espaciado entre cards",
        checks: [
          { type: "css_includes", value: "gap" },
        ],
      },
      {
        id: "ch5",
        title: "Diseño responsive con media queries",
        hint: "Añade media queries para adaptar el grid en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
      {
        id: "ch6",
        title: "Estados hover en cards",
        hint: "Añade :hover con transform o box-shadow en las cards",
        checks: [
          { type: "css_regex", value: "\\.card.*:hover|\\.card:hover" },
          { type: "css_includes", value: "transition" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Bento</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="dashboard">
    <div class="card card-large">
      <!-- Añade métrica principal aquí -->
    </div>
    
    <div class="card">
      <!-- Añade métrica secundaria aquí -->
    </div>
    
    <div class="card">
      <!-- Añade otra métrica secundaria aquí -->
    </div>
    
    <div class="card card-wide">
      <!-- Añade sección de actividad aquí -->
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.dashboard {
  /* Añade grid aquí con grid-column: span */
}

.card {
  /* Añade estilos de card aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Bento</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="dashboard">
    <div class="card card-large">
      <h2>Total Usuarios</h2>
      <p class="metric">1,234</p>
      <p class="subtitle">+12% este mes</p>
    </div>
    
    <div class="card">
      <h3>Ventas</h3>
      <p class="metric">$5,678</p>
    </div>
    
    <div class="card">
      <h3>Pedidos</h3>
      <p class="metric">89</p>
    </div>
    
    <div class="card card-wide">
      <h3>Actividad Reciente</h3>
      <ul>
        <li>Nuevo pedido #1234</li>
        <li>Usuario registrado</li>
        <li>Pago procesado</li>
      </ul>
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 22px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-large {
  grid-column: span 2;
}

.card-wide {
  grid-column: span 3;
}

.card h2 {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 1rem;
  font-weight: 500;
}

.card h3 {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.metric {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: bold;
  color: #111;
  line-height: 1.2;
}

.subtitle {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.card ul {
  list-style: none;
  margin-top: 1rem;
}

.card li {
  padding: 0.5rem 0;
  color: #4b5563;
  border-bottom: 1px solid #f3f4f6;
}

.card li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
  
  .card-large,
  .card-wide {
    grid-column: span 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "07-galeria-masonry",
    title: "Galería Masonry",
    order: 7,
    durationMin: 45,
    tags: ["CSS", "Layout", "Grid"],
    briefMd: `# Galería Masonry

## Objetivo
Crea una galería de imágenes con layout masonry (estilo Pinterest) donde las imágenes se organizan en columnas con alturas variables. Practicarás CSS Grid con \`grid-auto-rows\`, manejo de imágenes responsive, y técnicas de masonry layout.

## Estructura sugerida
- Contenedor con \`display: grid\` y \`grid-template-columns\`
- Múltiples \`<div class="item">\` con:
  - \`<img>\` con alt descriptivo
  - Opcional: overlay con título en hover
- Usar \`grid-auto-rows: masonry\` (si está disponible) o \`break-inside: avoid\`

## Requisitos
- Grid CSS con múltiples columnas (\`repeat(auto-fill, minmax(...))\`)
- Imágenes con alturas variables (no todas iguales)
- \`object-fit: cover\` para mantener proporción
- Hover effects sutiles (opcional: overlay con texto)
- Diseño responsive (columnas se adaptan)
- Estados \`:focus-visible\` visibles si hay links

## Tips
- Usa \`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))\`
- Considera \`break-inside: avoid\` en items para evitar cortes
- Usa \`aspect-ratio\` o deja que las imágenes definan su altura natural
- Añade \`transition\` a transform/opacity para hover suave
- Considera \`loading="lazy"\` para performance

## Extensiones (opcional)
- Implementa overlay con título en hover usando \`::before\` o elemento adicional
- Usa \`backdrop-filter: blur()\` para efecto glassmorphism
- Añade filtros CSS (\`filter: grayscale()\`) en hover
- Implementa lightbox básico con \`:target\` (sin JS)

## Errores típicos
- Todas las imágenes con misma altura → no se ve masonry
- Sin \`object-fit: cover\` → imágenes se deforman
- Grid sin \`gap\` → espaciado inconsistente
- Imágenes sin \`alt\` → problemas de accesibilidad
- Hover sin \`transition\` → cambios bruscos
- Sin responsive → demasiadas columnas en móvil

## Rúbrica rápida
- **Layout**: Grid masonry funcional con imágenes de diferentes alturas
- **Semántica**: Uso apropiado de imágenes con alt descriptivo
- **Responsive**: Grid se adapta correctamente (más columnas → menos columnas)
- **Accesibilidad**: Alt en todas las imágenes, focus visible si hay links
- **Detalle visual**: Hover effects sutiles, imágenes bien proporcionadas, diseño limpio`,
    checklist: [
      "Crear grid masonry con múltiples columnas usando repeat(auto-fill, minmax(...))",
      "Implementar al menos 6 imágenes con diferentes alturas",
      "Aplicar object-fit: cover en todas las imágenes",
      "Añadir hover effects sutiles (transform, opacity, o overlay)",
      "Asegurar que todas las imágenes tengan atributo alt descriptivo",
      "Implementar diseño responsive con media queries",
      "Usar gap para espaciado consistente entre imágenes",
      "Aplicar border-radius en contenedores de imágenes",
      "Verificar que las imágenes no se deformen",
      "Añadir transiciones suaves en efectos hover",
    ],
    acceptance: [
      "El grid muestra imágenes organizadas en columnas (masonry)",
      "Las imágenes mantienen proporción correcta sin deformarse",
      "Los hover effects son sutiles y funcionales",
      "El diseño es responsive (columnas se adaptan a tamaño de pantalla)",
      "Todas las imágenes tienen alt descriptivo",
      "Las imágenes tienen diferentes alturas visibles",
      "El espaciado es consistente entre imágenes",
      "El diseño es visualmente atractivo y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Grid masonry con columnas",
        hint: "Usa grid-template-columns con repeat(auto-fill, minmax(...))",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-template-columns.*repeat.*auto-fill.*minmax" },
        ],
      },
      {
        id: "ch2",
        title: "Múltiples imágenes con alt",
        hint: "Añade al menos 6 imágenes, cada una con atributo alt descriptivo",
        checks: [
          { type: "html_regex", value: "<img[^>]*alt\\s*=" },
          { type: "html_includes", value: "<img" },
        ],
      },
      {
        id: "ch3",
        title: "Object-fit cover",
        hint: "Usa object-fit: cover en las imágenes para mantener proporción",
        checks: [
          { type: "css_includes", value: "object-fit" },
          { type: "css_regex", value: "object-fit.*cover" },
        ],
      },
      {
        id: "ch4",
        title: "Hover effects con transiciones",
        hint: "Añade :hover con transform u opacity y transition",
        checks: [
          { type: "css_regex", value: "\\.item.*:hover|\\.item:hover" },
          { type: "css_includes", value: "transition" },
        ],
      },
      {
        id: "ch5",
        title: "Gap para espaciado",
        hint: "Usa gap en el grid para espaciado consistente",
        checks: [
          { type: "css_includes", value: "gap" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive",
        hint: "Añade media queries para adaptar número de columnas en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galería Masonry</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="gallery">
    <div class="item">
      <!-- Añade imagen con alt aquí -->
    </div>
    <!-- Añade al menos 5 imágenes más con diferentes alturas -->
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 2rem;
  background: #f9fafb;
}

.gallery {
  /* Añade grid masonry aquí */
}

.item {
  /* Añade estilos de item aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galería Masonry</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="gallery">
    <div class="item">
      <img src="https://via.placeholder.com/300x400" alt="Imagen 1 - Descripción" loading="lazy">
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/300x300" alt="Imagen 2 - Descripción" loading="lazy">
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/300x500" alt="Imagen 3 - Descripción" loading="lazy">
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/300x350" alt="Imagen 4 - Descripción" loading="lazy">
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/300x450" alt="Imagen 5 - Descripción" loading="lazy">
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/300x320" alt="Imagen 6 - Descripción" loading="lazy">
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 2rem;
  background: #f9fafb;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.item {
  border-radius: 12px;
  overflow: hidden;
  break-inside: avoid;
  transition: transform 0.3s ease;
}

.item:hover {
  transform: scale(1.02);
}

.item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }
  
  body {
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .item,
  .item img {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "08-product-page",
    title: "Página de Producto",
    order: 8,
    durationMin: 50,
    tags: ["HTML", "CSS", "Layout"],
    briefMd: `# Página de Producto

## Objetivo
Crea una página de producto e-commerce con galería de imágenes y detalles, incluyendo un "buy box" sticky en desktop. Practicarás layout de dos columnas, posicionamiento sticky solo con CSS, y diseño de componentes de e-commerce.

## Estructura sugerida
- Contenedor principal con \`display: grid\` (2 columnas en desktop)
- Columna izquierda: galería de imágenes (\`<div class="gallery">\`)
- Columna derecha: información del producto (\`<div class="product-info">\`) con:
  - \`<h1>\` título del producto
  - \`<p class="price">\` precio destacado
  - \`<p class="description">\` descripción
  - \`<ul>\` lista de características
  - \`<button class="buy-btn">\` botón de compra
  - Buy box sticky en desktop (\`position: sticky; top: 20px\`)

## Requisitos
- Layout de dos columnas con CSS Grid (1fr 1fr en desktop)
- Galería con al menos 3 imágenes del producto
- Información clara: título, precio, descripción, características
- Botón de compra destacado con estados hover y focus-visible
- Buy box sticky en desktop (solo CSS, sin JS)
- Diseño responsive (columnas → stack en móvil)

## Tips
- Usa \`position: sticky; top: 20px\` en el buy box para que se quede fijo al hacer scroll
- Considera \`align-self: start\` en el buy box para que sticky funcione correctamente
- Usa \`clamp()\` para precios responsive
- Añade \`scroll-margin-top\` si hay header sticky
- Considera usar \`<figure>\` y \`<figcaption>\` para imágenes

## Extensiones (opcional)
- Implementa galería con thumbnails usando CSS \`:target\` (sin JS)
- Usa \`clamp()\` para tamaños de fuente responsive
- Añade badge de "Nuevo" o "Oferta" con position absolute
- Implementa breadcrumb navigation

## Errores típicos
- Buy box sin \`align-self: start\` → sticky no funciona correctamente
- Sin \`top\` en sticky → no se posiciona donde debe
- Layout sin responsive → se rompe en móvil
- Botón sin \`:focus-visible\` → usuarios de teclado no pueden comprar
- Precio sin separación visual → confuso
- Imágenes sin \`alt\` → problemas de accesibilidad y SEO

## Rúbrica rápida
- **Layout**: Grid de dos columnas funcional, buy box sticky operativo
- **Semántica**: Uso apropiado de headings, listas, botones
- **Responsive**: Layout se adapta correctamente (2 cols → 1 col)
- **Accesibilidad**: Focus visible, alt en imágenes, contraste adecuado
- **Detalle visual**: Diseño profesional, jerarquía clara, interacciones sutiles`,
    checklist: [
      "Crear layout de dos columnas con CSS Grid (galería e información)",
      "Implementar galería con al menos 3 imágenes del producto",
      "Añadir información completa: título (h1), precio, descripción, características",
      "Crear botón de compra destacado con estados hover y focus-visible",
      "Implementar buy box sticky en desktop (position: sticky)",
      "Aplicar diseño responsive (columnas → stack en móvil)",
      "Asegurar que todas las imágenes tengan alt descriptivo",
      "Verificar jerarquía visual clara (precio destacado)",
      "Añadir lista de características con ul/li",
      "Mantener diseño limpio y profesional",
    ],
    acceptance: [
      "La galería muestra al menos 3 imágenes del producto",
      "La información es clara y bien organizada",
      "El diseño es responsive (2 columnas desktop → 1 columna móvil)",
      "El buy box es sticky en desktop (se queda fijo al hacer scroll)",
      "Todos los botones tienen estados focus-visible visibles",
      "Las imágenes tienen alt descriptivo",
      "El precio está visualmente destacado",
      "El diseño es profesional y atractivo",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Layout dos columnas con CSS Grid",
        hint: "Usa display: grid con grid-template-columns para crear layout de 2 columnas",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-template-columns.*1fr.*1fr|grid-template-columns.*repeat\\(2" },
        ],
      },
      {
        id: "ch2",
        title: "Galería con múltiples imágenes",
        hint: "Añade al menos 3 imágenes en la galería, cada una con alt descriptivo",
        checks: [
          { type: "html_includes", value: "<img" },
          { type: "html_regex", value: "<img[^>]*alt\\s*=" },
        ],
      },
      {
        id: "ch3",
        title: "Información completa del producto",
        hint: "Incluye h1 (título), precio destacado, descripción y lista de características",
        checks: [
          { type: "html_includes", value: "<h1" },
          { type: "html_includes", value: "<ul" },
          { type: "html_regex", value: "price|precio|\\$" },
        ],
      },
      {
        id: "ch4",
        title: "Buy box sticky",
        hint: "Usa position: sticky con top en el contenedor de información del producto",
        checks: [
          { type: "css_includes", value: "position: sticky" },
          { type: "css_regex", value: "top:\\s*\\d+px|top:\\s*\\d+rem" },
        ],
      },
      {
        id: "ch5",
        title: "Botón de compra con estados",
        hint: "Crea botón destacado con :hover y :focus-visible",
        checks: [
          { type: "html_includes", value: "<button" },
          { type: "css_regex", value: "button.*:hover|button:hover" },
          { type: "css_includes", value: ":focus-visible" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive",
        hint: "Añade media queries para cambiar grid a 1 columna en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Producto</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="product-page">
    <div class="gallery">
      <!-- Añade galería con al menos 3 imágenes aquí -->
    </div>
    
    <div class="product-info">
      <!-- Añade título, precio, descripción, características y botón aquí -->
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}

.product-page {
  /* Añade grid de 2 columnas aquí */
}

.gallery {
  /* Añade estilos de galería aquí */
}

.product-info {
  /* Añade estilos de información aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Producto</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="product-page">
    <div class="gallery">
      <img src="https://via.placeholder.com/500x500" alt="Vista frontal del producto">
      <img src="https://via.placeholder.com/500x500" alt="Vista lateral del producto">
      <img src="https://via.placeholder.com/500x500" alt="Detalle del producto">
    </div>
    
    <div class="product-info">
      <h1>Nombre del Producto</h1>
      <p class="price">$99.99</p>
      <p class="description">Descripción detallada del producto con todas sus características y beneficios.</p>
      
      <ul class="features">
        <li>Característica destacada 1</li>
        <li>Característica destacada 2</li>
        <li>Característica destacada 3</li>
      </ul>
      
      <button class="buy-btn">Añadir al carrito</button>
    </div>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}

.product-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gallery img {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: cover;
}

.product-info {
  position: sticky;
  top: 20px;
  align-self: start;
}

.product-info h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: #111;
}

.price {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: bold;
  color: #111;
  margin-bottom: 1.5rem;
}

.description {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.125rem;
}

.features {
  list-style: none;
  margin-bottom: 2rem;
}

.features li {
  padding: 0.5rem 0;
  color: #4b5563;
  position: relative;
  padding-left: 1.5rem;
}

.features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #b6e68e;
  font-weight: bold;
}

.buy-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: #b6e68e;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #111;
  transition: opacity 0.2s;
}

.buy-btn:hover {
  opacity: 0.9;
}

.buy-btn:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .product-page {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .product-info {
    position: static;
  }
}`,
    },
  },
  {
    slug: "09-pagina-404",
    title: "Página 404",
    order: 9,
    durationMin: 30,
    tags: ["HTML", "CSS", "Layout"],
    briefMd: `# Página 404

## Objetivo
Diseña una página de error 404 creativa, útil y accesible. Practicarás diseño centrado, jerarquía visual, y creación de experiencias de error amigables.

## Estructura sugerida
- Contenedor centrado con \`display: flex\` y \`justify-content/align-items: center\`
- \`<h1>\` con código de error "404" (grande y destacado)
- \`<h2>\` con mensaje amigable
- \`<p>\` con descripción útil
- \`<a>\` o \`<button>\` para volver al inicio
- Opcional: ilustración con emoji o símbolo Unicode

## Requisitos
- Diseño centrado vertical y horizontalmente
- Mensaje claro y amigable (no técnico)
- Botón/link de navegación con estados hover y focus-visible
- Tipografía jerárquica (404 grande, mensaje mediano)
- Diseño responsive (se adapta a móvil)

## Tips
- Usa \`min-height: 100vh\` y flexbox para centrar
- Considera \`clamp()\` para tamaño del código 404 responsive
- Añade \`transition\` a botón para hover suave
- Considera usar emoji grande (🔍, 🚀) o ilustración CSS
- Mantén el mensaje positivo y útil

## Extensiones (opcional)
- Implementa animación sutil del código 404 con \`@keyframes\`
- Añade búsqueda rápida en la página 404
- Usa \`clamp()\` para tamaños responsive
- Implementa modo oscuro con \`prefers-color-scheme\`

## Errores típicos
- Mensaje muy técnico → confunde a usuarios no técnicos
- Sin botón de navegación → usuarios no saben qué hacer
- Diseño no centrado → se ve desbalanceado
- Botón sin \`:focus-visible\` → usuarios de teclado no pueden navegar
- Tipografía sin jerarquía → código 404 no destaca
- Sin responsive → se ve mal en móvil

## Rúbrica rápida
- **Layout**: Diseño centrado funcional, contenido bien organizado
- **Semántica**: Uso correcto de headings, estructura HTML clara
- **Responsive**: Diseño se adapta correctamente a diferentes tamaños
- **Accesibilidad**: Focus visible, contraste adecuado, mensaje claro
- **Detalle visual**: Diseño creativo, tipografía jerárquica, interacciones sutiles`,
    checklist: [
      "Crear diseño centrado vertical y horizontalmente",
      "Añadir código 404 grande y destacado visualmente",
      "Implementar mensaje amigable y útil (no técnico)",
      "Crear botón/link de navegación con estados hover y focus-visible",
      "Aplicar tipografía jerárquica (404 > mensaje > descripción)",
      "Añadir ilustración o icono visual (emoji o símbolo)",
      "Implementar diseño responsive",
      "Asegurar contraste adecuado en todos los textos",
      "Verificar que el botón sea claramente visible",
      "Mantener diseño limpio y profesional",
    ],
    acceptance: [
      "El mensaje es claro, amigable y no técnico",
      "Hay un botón/link de navegación funcional",
      "El diseño está centrado vertical y horizontalmente",
      "El código 404 es visualmente destacado",
      "Todos los elementos tienen estados focus-visible visibles",
      "El diseño es responsive y se adapta a móvil",
      "La tipografía tiene jerarquía clara",
      "El diseño es creativo y atractivo",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Código 404 destacado",
        hint: "Crea un h1 con el texto '404' grande y visualmente destacado",
        checks: [
          { type: "html_includes", value: "404" },
          { type: "html_includes", value: "<h1" },
        ],
      },
      {
        id: "ch2",
        title: "Diseño centrado con flexbox",
        hint: "Usa display: flex con justify-content y align-items center",
        checks: [
          { type: "css_includes", value: "display: flex" },
          { type: "css_regex", value: "justify-content.*center|align-items.*center" },
        ],
      },
      {
        id: "ch3",
        title: "Botón de navegación con estados",
        hint: "Crea botón o link con :hover y :focus-visible",
        checks: [
          { type: "html_regex", value: "<a href|<button" },
          { type: "css_includes", value: ":hover" },
          { type: "css_includes", value: ":focus-visible" },
        ],
      },
      {
        id: "ch4",
        title: "Tipografía jerárquica",
        hint: "Usa diferentes tamaños de fuente para crear jerarquía (404 grande, mensaje mediano)",
        checks: [
          { type: "css_regex", value: "font-size.*\\d+rem|font-size.*\\d+px" },
          { type: "html_includes", value: "<h2" },
        ],
      },
      {
        id: "ch5",
        title: "Mensaje amigable",
        hint: "Añade mensaje claro y útil (no técnico) con párrafo descriptivo",
        checks: [
          { type: "html_includes", value: "<p" },
          { type: "html_regex", value: "no encontrada|no existe|perdida" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive",
        hint: "Añade media queries para adaptar tamaños en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Página no encontrada</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- Añade código 404, mensaje y botón aquí -->
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  /* Añade centrado aquí */
}

.container {
  /* Añade estilos de contenedor aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Página no encontrada</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="error-icon">🔍</div>
    <h1 class="error-code">404</h1>
    <h2>Página no encontrada</h2>
    <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
    <a href="/" class="btn">Volver al inicio</a>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9fafb;
  padding: 2rem;
}

.container {
  text-align: center;
  max-width: 600px;
}

.error-icon {
  font-size: clamp(4rem, 10vw, 6rem);
  margin-bottom: 1rem;
}

.error-code {
  font-size: clamp(6rem, 15vw, 8rem);
  font-weight: bold;
  color: #111;
  line-height: 1;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1rem;
  color: #111;
}

p {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #b6e68e;
  color: #111;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: opacity 0.2s, transform 0.2s;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "10-newsletter",
    title: "Newsletter",
    order: 10,
    durationMin: 35,
    tags: ["HTML", "CSS", "Form"],
    briefMd: `# Newsletter

## Objetivo
Crea un formulario de suscripción a newsletter atractivo y accesible. Practicarás diseño centrado, formularios accesibles, y estados de validación visual.

## Estructura sugerida
- Contenedor centrado con card/border
- \`<h1>\` título principal
- \`<p>\` descripción breve
- \`<form>\` con:
  - \`<label for="email">\` asociado
  - \`<input type="email">\` con id, name, required
  - \`<button type="submit">\` para suscripción

## Requisitos
- Formulario accesible: label asociado con for/id
- Diseño atractivo: card centrado con border-radius generoso
- Estados \`:focus-visible\` visibles (outline 2px mínimo)
- Validación visual: estados \`:invalid\` y \`:valid\` (opcional)
- Diseño responsive: se adapta a móvil
- Placeholder útil pero no como único label

## Tips
- Usa \`type="email"\` para validación nativa del navegador
- Añade \`autocomplete="email"\` para mejor UX
- Considera estados \`:invalid\` para mostrar errores visualmente
- Usa \`clamp()\` para tamaños responsive
- Añade \`aria-label\` si el label está oculto visualmente

## Extensiones (opcional)
- Implementa mensaje de éxito con CSS \`:target\` (sin JS)
- Añade animación sutil en el botón al hacer hover
- Usa \`clamp()\` para tamaños de fuente responsive
- Implementa modo oscuro con \`prefers-color-scheme\`

## Errores típicos
- Placeholder como único label → desaparece al escribir, malo para accesibilidad
- Input sin label asociado → lectores de pantalla no pueden identificar el campo
- Focus invisible → usuarios de teclado no pueden navegar
- Sin type="email" → no hay validación nativa
- Botón sin type="submit" → puede no funcionar correctamente
- Contraste insuficiente → texto ilegible

## Rúbrica rápida
- **Layout**: Diseño centrado, card atractivo, espaciado adecuado
- **Semántica**: Label asociado correctamente, estructura HTML clara
- **Responsive**: Formulario se adapta correctamente a móvil
- **Accesibilidad**: Focus visible, label asociado, contraste adecuado, navegación por teclado funcional
- **Detalle visual**: Diseño atractivo, estados claros, interacciones sutiles`,
    checklist: [
      "Crear estructura de formulario con form, label e input",
      "Asociar label con for e id en el campo de email",
      "Añadir input type='email' con required y autocomplete",
      "Crear botón de suscripción con type='submit'",
      "Implementar diseño centrado con card/border",
      "Aplicar estados focus-visible visibles (outline 2px mínimo)",
      "Añadir título y descripción atractivos",
      "Implementar diseño responsive",
      "Asegurar contraste adecuado en todos los textos",
      "Verificar que el placeholder no sea el único label",
    ],
    acceptance: [
      "El formulario es accesible (label asociado, focus visible)",
      "Los estados focus-visible son claramente visibles",
      "El diseño es atractivo y profesional",
      "El campo de email tiene type='email' y validación nativa",
      "El botón tiene type='submit' y estados hover/focus",
      "El diseño es responsive y se adapta a móvil",
      "El contraste es adecuado (WCAG AA mínimo)",
      "La estructura HTML es semántica y correcta",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Campo email con tipo apropiado",
        hint: "Crea input con type='email', required y autocomplete",
        checks: [
          { type: "html_regex", value: "type\\s*=\\s*[\"']email[\"']" },
          { type: "html_includes", value: "required" },
        ],
      },
      {
        id: "ch2",
        title: "Label asociado con for e id",
        hint: "Crea label con for que coincida con id del input",
        checks: [
          { type: "html_includes", value: "<label" },
          { type: "html_regex", value: "<label[^>]*for\\s*=" },
          { type: "html_regex", value: "id\\s*=\\s*[\"']email[\"']" },
        ],
      },
      {
        id: "ch3",
        title: "Botón submit accesible",
        hint: "Crea botón con type='submit' y estados focus-visible",
        checks: [
          { type: "html_regex", value: "type\\s*=\\s*[\"']submit[\"']" },
          { type: "css_includes", value: ":focus-visible" },
        ],
      },
      {
        id: "ch4",
        title: "Estados focus-visible visibles",
        hint: "Añade :focus-visible con outline de al menos 2px en input y botón",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_regex", value: "outline.*2px|outline.*0\\.125rem" },
        ],
      },
      {
        id: "ch5",
        title: "Diseño centrado",
        hint: "Centra el formulario usando flexbox o text-align",
        checks: [
          { type: "css_regex", value: "justify-content.*center|text-align.*center" },
        ],
      },
      {
        id: "ch6",
        title: "Card con border-radius",
        hint: "Añade contenedor con border-radius generoso (16px+)",
        checks: [
          { type: "css_includes", value: "border-radius" },
          { type: "css_regex", value: "border-radius.*(16|1rem|22|2\\.75rem)" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="newsletter">
    <h1>Suscríbete a nuestro newsletter</h1>
    <p>Recibe las últimas noticias y actualizaciones</p>
    <form>
      <!-- Añade label e input de email aquí -->
      <!-- Añade botón de suscripción aquí -->
    </form>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  /* Añade centrado aquí */
}

.newsletter {
  /* Añade estilos de card aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="newsletter">
    <h1>Suscríbete a nuestro newsletter</h1>
    <p>Recibe las últimas noticias y actualizaciones directamente en tu correo.</p>
    <form>
      <label for="email">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="tu@email.com" 
        required
        autocomplete="email"
        aria-describedby="email-error"
      >
      <span id="email-error" class="error" role="alert"></span>
      <button type="submit">Suscribirse</button>
    </form>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9fafb;
  padding: 2rem;
}

.newsletter {
  background: white;
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: 22px;
  border: 1px solid #e5e7eb;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1rem;
  color: #111;
}

p {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #111;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
}

input:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-color: #b6e68e;
}

input:invalid:not(:focus):not(:placeholder-shown) {
  border-color: #dc2626;
}

.error {
  color: #dc2626;
  font-size: 0.875rem;
  display: block;
  text-align: left;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #b6e68e;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  color: #111;
  font-size: 1rem;
  transition: opacity 0.2s, transform 0.2s;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

button:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  body {
    padding: 1rem;
  }
  
  .newsletter {
    padding: 2rem 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
  }
}`,
    },
  },
  {
    slug: "11-docs-page",
    title: "Página de Documentación",
    order: 11,
    durationMin: 55,
    tags: ["HTML", "CSS", "Layout"],
    briefMd: `# Página de Documentación

## Objetivo
Crea una página de documentación con sidebar de navegación sticky y contenido principal con anclas. Practicarás layout de dos columnas, navegación por anclas (IDs en headings), y organización de contenido largo.

## Estructura sugerida
- Layout de dos columnas con CSS Grid
- \`<aside class="sidebar">\` con \`<nav>\` y lista de links a secciones
- \`<main class="content">\` con múltiples \`<section id="...">\`
- Cada sección con \`<h2 id="...">\` para anclas
- Sidebar sticky (\`position: sticky; top: 20px\`)

## Requisitos
- Sidebar sticky en desktop (se queda fijo al hacer scroll)
- Navegación funcional con links a IDs (\`href="#seccion"\`)
- Contenido bien estructurado con headings jerárquicos (h2, h3)
- IDs únicos en todos los headings de secciones
- Diseño responsive (sidebar arriba o oculto en móvil)
- Estados \`:focus-visible\` visibles en links de navegación

## Tips
- Usa \`scroll-margin-top\` en secciones para compensar header sticky
- Considera \`scroll-behavior: smooth\` para navegación suave
- Añade \`aria-label\` al nav para accesibilidad
- Usa \`max-width\` en contenido para legibilidad
- Considera highlight del link activo con CSS \`:target\`

## Extensiones (opcional)
- Implementa highlight del link activo según scroll con CSS (técnica avanzada)
- Añade "back to top" button sticky
- Usa \`clamp()\` para tamaños de fuente responsive
- Implementa tabla de contenidos (TOC) automática

## Errores típicos
- IDs duplicados → navegación no funciona correctamente
- Sin \`scroll-margin-top\` → secciones quedan ocultas bajo header sticky
- Links sin \`:focus-visible\` → usuarios de teclado no pueden navegar
- Sidebar sin sticky → se pierde al hacer scroll
- Contenido sin max-width → líneas muy largas, difícil de leer
- Sin responsive → sidebar ocupa mucho espacio en móvil

## Rúbrica rápida
- **Layout**: Grid de dos columnas funcional, sidebar sticky operativo
- **Semántica**: Uso correcto de aside, nav, main, section, headings
- **Responsive**: Layout se adapta correctamente (sidebar → arriba/oculto)
- **Accesibilidad**: Focus visible, IDs únicos, navegación por teclado funcional
- **Detalle visual**: Diseño limpio, tipografía legible, espaciado adecuado`,
    checklist: [
      "Crear layout de dos columnas con CSS Grid (sidebar + contenido)",
      "Implementar sidebar sticky en desktop (position: sticky)",
      "Añadir navegación con links a secciones usando href con #",
      "Crear al menos 3 secciones con h2 y IDs únicos",
      "Aplicar scroll-margin-top en secciones para compensar header",
      "Implementar diseño responsive (sidebar arriba o oculto en móvil)",
      "Añadir estados focus-visible visibles en links de navegación",
      "Asegurar que todos los headings tengan IDs únicos",
      "Verificar navegación por anclas funcional",
      "Mantener contenido legible con max-width adecuado",
    ],
    acceptance: [
      "El sidebar es sticky en desktop (se queda fijo al hacer scroll)",
      "La navegación funciona correctamente (links llevan a secciones)",
      "El diseño es responsive (sidebar se adapta en móvil)",
      "Todos los links tienen estados focus-visible visibles",
      "Las secciones tienen IDs únicos y scroll-margin-top",
      "El contenido es legible con max-width adecuado",
      "La estructura HTML es semántica (aside, nav, main, section)",
      "El diseño es limpio y profesional",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Sidebar sticky con navegación",
        hint: "Crea aside con nav y aplica position: sticky",
        checks: [
          { type: "html_includes", value: "<aside" },
          { type: "html_includes", value: "<nav" },
          { type: "css_includes", value: "position: sticky" },
        ],
      },
      {
        id: "ch2",
        title: "Navegación con anclas",
        hint: "Añade links usando href con # apuntando a IDs de secciones",
        checks: [
          { type: "html_regex", value: "<a[^>]*href\\s*=\\s*[\"']#" },
          { type: "html_includes", value: "<nav" },
        ],
      },
      {
        id: "ch3",
        title: "Layout dos columnas con Grid",
        hint: "Usa display: grid con grid-template-columns para sidebar y contenido",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-template-columns" },
        ],
      },
      {
        id: "ch4",
        title: "Secciones con IDs únicos",
        hint: "Crea al menos 3 secciones con h2 que tengan id único",
        checks: [
          { type: "html_includes", value: "<section" },
          { type: "html_regex", value: "<h2[^>]*id\\s*=|id\\s*=\\s*[\"'][^\"']+[\"']" },
        ],
      },
      {
        id: "ch5",
        title: "Scroll-margin-top en secciones",
        hint: "Añade scroll-margin-top para compensar header sticky",
        checks: [
          { type: "css_includes", value: "scroll-margin-top" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive",
        hint: "Añade media queries para adaptar layout en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Documentación</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="docs-layout">
    <aside class="sidebar">
      <nav aria-label="Navegación de documentación">
        <!-- Añade lista de links a secciones aquí -->
      </nav>
    </aside>
    
    <main class="content">
      <section id="introduccion">
        <!-- Añade sección con h2 aquí -->
      </section>
      
      <!-- Añade al menos 2 secciones más con IDs únicos -->
    </main>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
}

.docs-layout {
  /* Añade grid de 2 columnas aquí */
}

.sidebar {
  /* Añade estilos de sidebar sticky aquí */
}

.content {
  /* Añade estilos de contenido aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Documentación</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="docs-layout">
    <aside class="sidebar">
      <nav aria-label="Navegación de documentación">
        <h3>Navegación</h3>
        <ul>
          <li><a href="#introduccion">Introducción</a></li>
          <li><a href="#instalacion">Instalación</a></li>
          <li><a href="#uso">Uso</a></li>
          <li><a href="#api">API</a></li>
        </ul>
      </nav>
    </aside>
    
    <main class="content">
      <section id="introduccion">
        <h2>Introducción</h2>
        <p>Esta es la introducción a la documentación. Aquí encontrarás información general sobre el proyecto.</p>
        <p>La documentación está organizada en secciones para facilitar la navegación.</p>
      </section>
      
      <section id="instalacion">
        <h2>Instalación</h2>
        <p>Para instalar el proyecto, sigue estos pasos:</p>
        <ol>
          <li>Paso 1</li>
          <li>Paso 2</li>
          <li>Paso 3</li>
        </ol>
      </section>
      
      <section id="uso">
        <h2>Uso</h2>
        <p>Esta sección explica cómo usar el proyecto.</p>
        <p>Incluye ejemplos y casos de uso comunes.</p>
      </section>
      
      <section id="api">
        <h2>API</h2>
        <p>Documentación de la API disponible.</p>
      </section>
    </main>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, sans-serif;
}

.docs-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: #f9fafb;
  padding: 2rem;
  border-right: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  align-self: start;
  max-height: 100vh;
  overflow-y: auto;
}

.sidebar h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #111;
}

.sidebar nav ul {
  list-style: none;
}

.sidebar nav a {
  display: block;
  padding: 0.5rem 0;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.sidebar nav a:hover {
  color: #111;
}

.sidebar nav a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
  border-radius: 4px;
}

.content {
  padding: 2rem;
  max-width: 800px;
}

section {
  margin-bottom: 4rem;
  scroll-margin-top: 20px;
}

section h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1rem;
  color: #111;
}

section p {
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1rem;
}

section ol,
section ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  color: #4b5563;
}

@media (max-width: 768px) {
  .docs-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: static;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    max-height: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`,
    },
  },
  {
    slug: "12-portfolio-grid",
    title: "Portfolio Grid",
    order: 12,
    durationMin: 50,
    tags: ["CSS", "Layout", "Grid"],
    briefMd: `# Portfolio Grid

## Objetivo
Crea un grid de portfolio con proyectos, cards atractivas y opcionalmente filtros con CSS puro. Practicarás CSS Grid avanzado, diseño de cards, y técnicas de filtrado sin JavaScript.

## Estructura sugerida
- Contenedor principal con \`display: grid\`
- Múltiples \`<article class="project">\` con:
  - \`<img>\` con alt descriptivo
  - \`<h3>\` título del proyecto
  - \`<p>\` descripción breve
  - Opcional: \`data-category\` para filtros
- Opcional: filtros con radio buttons y CSS \`:has()\` o \`:checked\`

## Requisitos
- Grid responsive con \`repeat(auto-fit, minmax(...))\`
- Cards con imagen, título y descripción
- Hover effects sutiles (transform, box-shadow)
- Estados \`:focus-visible\` visibles si hay links
- Diseño limpio y profesional
- Opcional: filtros funcionales con solo CSS

## Tips
- Usa \`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))\`
- Considera filtros con radio buttons y \`input:checked ~ .project[data-category]\`
- Añade \`transition\` a propiedades que cambian en hover
- Usa \`object-fit: cover\` para imágenes que deben llenar el espacio
- Considera overlay con título en hover usando \`::before\` o elemento adicional

## Extensiones (opcional)
- Implementa filtros funcionales con CSS \`:has()\` y radio buttons
- Añade overlay con título en hover
- Usa \`backdrop-filter: blur()\` para efecto glassmorphism
- Implementa animación de "fade-in" en las cards

## Errores típicos
- Grid sin \`gap\` → espaciado inconsistente
- Imágenes sin \`alt\` → problemas de accesibilidad
- Hover sin \`transition\` → cambios bruscos
- Sin responsive → demasiadas columnas en móvil
- Cards sin padding adecuado → contenido muy pegado
- Filtros sin fallback → no funcionan en navegadores sin \`:has()\`

## Rúbrica rápida
- **Layout**: Grid responsive funcional, cards bien organizadas
- **Semántica**: Uso apropiado de article, imágenes con alt
- **Responsive**: Grid se adapta correctamente (más columnas → menos columnas)
- **Accesibilidad**: Alt en imágenes, focus visible si hay links, contraste adecuado
- **Detalle visual**: Hover effects sutiles, diseño limpio, interacciones profesionales`,
    checklist: [
      "Crear grid responsive con CSS Grid usando auto-fit y minmax",
      "Implementar al menos 6 cards de proyectos con estructura completa",
      "Añadir imágenes con alt descriptivo en cada card",
      "Aplicar hover effects sutiles (transform, box-shadow) con transiciones",
      "Implementar diseño responsive con media queries",
      "Asegurar que todas las imágenes tengan object-fit apropiado",
      "Añadir border-radius generoso en las cards",
      "Verificar espaciado consistente con gap",
      "Aplicar tipografía jerárquica (título > descripción)",
      "Mantener diseño limpio y profesional",
    ],
    acceptance: [
      "El grid muestra proyectos organizados correctamente",
      "Los hover effects son sutiles y funcionales",
      "El diseño es responsive (grid se adapta a tamaño de pantalla)",
      "Todas las imágenes tienen alt descriptivo",
      "Las cards tienen estructura completa (imagen, título, descripción)",
      "El espaciado es consistente entre cards",
      "El diseño es visualmente atractivo y profesional",
      "La tipografía tiene jerarquía clara",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Grid responsive con auto-fit",
        hint: "Usa display: grid con grid-template-columns usando repeat(auto-fit, minmax(...))",
        checks: [
          { type: "css_includes", value: "display: grid" },
          { type: "css_regex", value: "grid-template-columns.*repeat.*auto-fit.*minmax" },
        ],
      },
      {
        id: "ch2",
        title: "Cards con estructura completa",
        hint: "Cada card debe tener imagen (alt), título (h3) y descripción (p)",
        checks: [
          { type: "html_includes", value: "<article" },
          { type: "html_regex", value: "<img[^>]*alt\\s*=" },
          { type: "html_includes", value: "<h3" },
        ],
      },
      {
        id: "ch3",
        title: "Hover effects con transiciones",
        hint: "Añade :hover con transform o box-shadow y transition",
        checks: [
          { type: "css_regex", value: "\\.project.*:hover|\\.project:hover" },
          { type: "css_includes", value: "transition" },
        ],
      },
      {
        id: "ch4",
        title: "Object-fit en imágenes",
        hint: "Usa object-fit: cover para que las imágenes llenen el espacio correctamente",
        checks: [
          { type: "css_includes", value: "object-fit" },
          { type: "css_regex", value: "object-fit.*cover" },
        ],
      },
      {
        id: "ch5",
        title: "Gap para espaciado",
        hint: "Usa gap en el grid para espaciado consistente",
        checks: [
          { type: "css_includes", value: "gap" },
        ],
      },
      {
        id: "ch6",
        title: "Diseño responsive",
        hint: "Añade media queries para adaptar número de columnas en móvil",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_regex", value: "@media[^}]*max-width|@media[^}]*768" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Grid</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="portfolio">
    <article class="project">
      <!-- Añade imagen con alt, título y descripción aquí -->
    </article>
    <!-- Añade al menos 5 proyectos más aquí -->
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.portfolio {
  /* Añade grid aquí */
}

.project {
  /* Añade estilos de card aquí */
}

/* Añade más estilos aquí */`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Grid</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="portfolio">
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 1 - Landing page responsive">
      <div class="project-content">
        <h3>Proyecto 1</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
    
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 2 - Dashboard interactivo">
      <div class="project-content">
        <h3>Proyecto 2</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
    
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 3 - E-commerce">
      <div class="project-content">
        <h3>Proyecto 3</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
    
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 4 - Blog personal">
      <div class="project-content">
        <h3>Proyecto 4</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
    
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 5 - App móvil">
      <div class="project-content">
        <h3>Proyecto 5</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
    
    <article class="project">
      <img src="https://via.placeholder.com/400x300" alt="Proyecto 6 - Portfolio creativo">
      <div class="project-content">
        <h3>Proyecto 6</h3>
        <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
      </div>
    </article>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f9fafb;
}

.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #111;
}

.project p {
  color: #6b7280;
  line-height: 1.6;
  flex: 1;
}

@media (max-width: 768px) {
  .portfolio {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  body {
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project {
    transition: none;
  }
}`,
    },
  },
];
