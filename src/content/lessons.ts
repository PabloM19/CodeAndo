import type { Lesson } from "@/types/content";

export const lessons: Lesson[] = [
  {
    slug: "01-html-base",
    title: "HTML base",
    order: 1,
    durationMin: 10,
    tags: ["HTML", "Fundamentos"],
    theoryMd: `# HTML base

HTML (HyperText Markup Language) es el lenguaje que estructura el contenido de las páginas web.

## Estructura básica

Todo documento HTML necesita:

- \`<!DOCTYPE html>\`: Declara que es HTML5
- \`<html lang="es">\`: Elemento raíz con idioma
- \`<head>\`: Metadatos (no visibles)
- \`<body>\`: Contenido visible

## Meta viewport

En el \`<head>\`, incluye:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Esto hace que la página sea responsive en móviles.

## Estructura semántica básica

- \`<header>\`: Encabezado de página o sección
- \`<main>\`: Contenido principal único
- \`<footer>\`: Pie de página

## Ejemplo mínimo

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi página</title>
</head>
<body>
  <header>
    <h1>Título</h1>
  </header>
  <main>
    <p>Contenido</p>
  </main>
</body>
</html>
\`\`\``,
    checklist: [
      "Incluir DOCTYPE html",
      "Agregar lang en <html>",
      "Meta viewport en <head>",
      "Usar <header> y <main>",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Agregar DOCTYPE y estructura básica",
        hint: "Empieza con <!DOCTYPE html> y estructura con <html>, <head> y <body>",
        checks: [
          { type: "html_includes", value: "<!DOCTYPE html>" },
          { type: "html_includes", value: '<html lang="es">' },
          { type: "html_includes", value: "<head>" },
          { type: "html_includes", value: "<body>" },
        ],
      },
      {
        id: "ch2",
        title: "Agregar meta viewport",
        hint: "Dentro de <head>, agrega: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        checks: [
          { type: "html_includes", value: 'name="viewport"' },
          { type: "html_includes", value: "width=device-width" },
        ],
      },
      {
        id: "ch3",
        title: "Usar header y main",
        hint: "Dentro de <body>, agrega <header> y <main> con contenido",
        checks: [
          { type: "html_includes", value: "<header>" },
          { type: "html_includes", value: "<main>" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>HTML Base</title>
</head>
<body>
  <h1>Mi página</h1>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Base</title>
</head>
<body>
  <header>
    <h1>Mi página</h1>
  </header>
  <main>
    <p>Contenido principal</p>
  </main>
</body>
</html>`,
      css: "",
    },
  },
  {
    slug: "02-semantica",
    title: "Semántica",
    order: 2,
    durationMin: 10,
    tags: ["HTML", "Semántica"],
    theoryMd: `# Semántica HTML

Usar elementos semánticos mejora la accesibilidad y el SEO.

## Elementos de navegación y estructura

- \`<nav>\`: Menú de navegación
- \`<main>\`: Contenido principal (solo uno por página)
- \`<footer>\`: Pie de página
- \`<section>\`: Sección temática
- \`<article>\`: Contenido independiente

## Encabezados jerárquicos

- \`<h1>\`: Título principal (uno por página)
- \`<h2>\`: Subtítulos de sección
- \`<h3>\` a \`<h6>\`: Subdivisiones

## Ejemplo

\`\`\`html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
  </ul>
</nav>
<main>
  <section>
    <h2>Sección 1</h2>
    <p>Contenido</p>
  </section>
</main>
<footer>
  <p>© 2024</p>
</footer>
\`\`\``,
    checklist: [
      "Usar <nav> para navegación",
      "Usar <section> con <h2>",
      "Incluir <footer>",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Agregar nav con lista",
        hint: "Crea un <nav> con <ul> y <li> dentro",
        checks: [
          { type: "html_includes", value: "<nav>" },
          { type: "html_includes", value: "<ul>" },
          { type: "html_includes", value: "<li>" },
        ],
      },
      {
        id: "ch2",
        title: "Crear section con h2",
        hint: "Dentro de <main>, agrega <section> con un <h2>",
        checks: [
          { type: "html_includes", value: "<section>" },
          { type: "html_includes", value: "<h2>" },
        ],
      },
      {
        id: "ch3",
        title: "Agregar footer",
        hint: "Al final del body, agrega <footer>",
        checks: [{ type: "html_includes", value: "<footer>" }],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semántica</title>
</head>
<body>
  <main>
    <h1>Título</h1>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semántica</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Inicio</a></li>
    </ul>
  </nav>
  <main>
    <section>
      <h2>Mi sección</h2>
      <p>Contenido</p>
    </section>
  </main>
  <footer>
    <p>© 2024</p>
  </footer>
</body>
</html>`,
      css: "",
    },
  },
  {
    slug: "03-links-states",
    title: "Estados de enlaces",
    order: 3,
    durationMin: 10,
    tags: ["CSS", "Interactividad"],
    theoryMd: `# Estados de enlaces

Los enlaces tienen estados que podemos estilizar con pseudo-clases.

## Pseudo-clases comunes

- \`:hover\`: Cuando el mouse está encima
- \`:focus-visible\`: Cuando tiene foco (teclado)
- \`:active\`: Mientras se hace clic
- \`:visited\`: Enlaces ya visitados

## Ejemplo

\`\`\`css
a {
  color: #111;
  text-decoration: none;
}

a:hover {
  color: #b6e68e;
}

a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}
\`\`\`

## Accesibilidad

Siempre usa \`:focus-visible\` (no solo \`:focus\`) para que el outline solo aparezca con navegación por teclado.`,
    checklist: [
      "Estilizar :hover",
      "Agregar :focus-visible",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Agregar estilo hover",
        hint: "Crea una regla a:hover con color diferente",
        checks: [
          { type: "css_includes", value: ":hover" },
          { type: "css_regex", value: "a:hover|a\\s*:\\s*hover" },
        ],
      },
      {
        id: "ch2",
        title: "Agregar focus-visible",
        hint: "Crea una regla a:focus-visible con outline",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_includes", value: "outline" },
        ],
      },
      {
        id: "ch3",
        title: "Quitar subrayado por defecto",
        hint: "Agrega text-decoration: none a los enlaces",
        checks: [
          { type: "css_includes", value: "text-decoration" },
          { type: "css_regex", value: "text-decoration\\s*:\\s*none" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estados de enlaces</title>
</head>
<body>
  <main>
    <a href="#">Enlace de ejemplo</a>
  </main>
</body>
</html>`,
      css: `a {
  color: #111;
}`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estados de enlaces</title>
</head>
<body>
  <main>
    <a href="#">Enlace de ejemplo</a>
  </main>
</body>
</html>`,
      css: `a {
  color: #111;
  text-decoration: none;
}

a:hover {
  color: #b6e68e;
}

a:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}`,
    },
  },
  {
    slug: "04-imagenes",
    title: "Imágenes",
    order: 4,
    durationMin: 10,
    tags: ["HTML", "CSS", "Accesibilidad"],
    theoryMd: `# Imágenes

Las imágenes deben ser accesibles y responsive.

## Atributo alt

Siempre incluye \`alt\` descriptivo:

\`\`\`html
<img src="foto.jpg" alt="Descripción de la imagen">
\`\`\`

Si es decorativa: \`alt=""\`

## CSS responsive

Para que las imágenes no se desborden:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

- \`max-width: 100%\`: No más ancho que el contenedor
- \`height: auto\`: Mantiene proporción

## Ejemplo completo

\`\`\`html
<img src="logo.png" alt="Logo de CodeAndo">
\`\`\`

\`\`\`css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
\`\`\``,
    checklist: [
      "Agregar alt a imágenes",
      "CSS: max-width: 100%",
      "CSS: height: auto",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Agregar imagen con alt",
        hint: "Usa <img src=\"...\" alt=\"...\">",
        checks: [
          { type: "html_includes", value: "<img" },
          { type: "html_regex", value: 'alt="[^"]*"' },
        ],
      },
      {
        id: "ch2",
        title: "CSS max-width 100%",
        hint: "Agrega img { max-width: 100%; }",
        checks: [
          { type: "css_includes", value: "max-width" },
          { type: "css_regex", value: "max-width\\s*:\\s*100%" },
        ],
      },
      {
        id: "ch3",
        title: "CSS height auto",
        hint: "Agrega height: auto a las imágenes",
        checks: [
          { type: "css_includes", value: "height" },
          { type: "css_regex", value: "height\\s*:\\s*auto" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imágenes</title>
</head>
<body>
  <main>
    <img src="https://via.placeholder.com/800x400" />
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imágenes</title>
</head>
<body>
  <main>
    <img src="https://via.placeholder.com/800x400" alt="Imagen de ejemplo" />
  </main>
</body>
</html>`,
      css: `img {
  max-width: 100%;
  height: auto;
  display: block;
}`,
    },
  },
  {
    slug: "05-formularios",
    title: "Formularios",
    order: 5,
    durationMin: 15,
    tags: ["HTML", "CSS", "Accesibilidad"],
    theoryMd: `# Formularios

Los formularios deben ser accesibles y bien estructurados.

## Label e input

Siempre conecta \`<label>\` con \`<input>\`:

\`\`\`html
<label for="email">Email</label>
<input type="email" id="email" name="email">
\`\`\`

O envuelve el input:

\`\`\`html
<label>
  Email
  <input type="email" name="email">
</label>
\`\`\`

## Tipos de input

- \`type="email"\`: Valida formato email
- \`type="password"\`: Oculta texto
- \`type="text"\`: Texto simple

## CSS Grid para layout

\`\`\`css
form {
  display: grid;
  gap: 1rem;
  max-width: 400px;
}
\`\`\`

- \`display: grid\`: Layout en cuadrícula
- \`gap\`: Espacio entre elementos`,
    checklist: [
      "Usar label con for/id",
      "Input type=email",
      "CSS Grid para layout",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Label conectado con for/id",
        hint: "Usa <label for=\"email\"> y <input id=\"email\">",
        checks: [
          { type: "html_includes", value: "<label" },
          { type: "html_regex", value: 'for="[^"]*"' },
          { type: "html_regex", value: 'id="[^"]*"' },
        ],
      },
      {
        id: "ch2",
        title: "Input type email",
        hint: "Agrega type=\"email\" al input",
        checks: [
          { type: "html_regex", value: 'type="email"' },
        ],
      },
      {
        id: "ch3",
        title: "CSS Grid en form",
        hint: "Agrega form { display: grid; gap: ...; }",
        checks: [
          { type: "css_includes", value: "display" },
          { type: "css_regex", value: "display\\s*:\\s*grid" },
          { type: "css_includes", value: "gap" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formularios</title>
</head>
<body>
  <main>
    <form>
      <input name="email" />
      <button type="submit">Enviar</button>
    </form>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formularios</title>
</head>
<body>
  <main>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <button type="submit">Enviar</button>
    </form>
  </main>
</body>
</html>`,
      css: `form {
  display: grid;
  gap: 1rem;
  max-width: 400px;
}`,
    },
  },
  {
    slug: "06-cascada-herencia",
    title: "Cascada y herencia",
    order: 6,
    durationMin: 10,
    tags: ["CSS", "Fundamentos"],
    theoryMd: `# Cascada y herencia

CSS sigue reglas de cascada y herencia.

## Cascada

El último estilo gana si tiene la misma especificidad.

## Herencia

Algunas propiedades se heredan (color, font-family), otras no (margin, border).

## Clase .muted

Para texto secundario, crea una clase reutilizable:

\`\`\`css
.muted {
  color: #6b7280;
}
\`\`\`

Luego úsala:

\`\`\`html
<p class="muted">Texto secundario</p>
\`\`\``,
    checklist: [
      "Crear clase .muted",
      "Aplicar a elementos",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Crear clase .muted",
        hint: "Define .muted { color: #6b7280; }",
        checks: [
          { type: "css_regex", value: "\\.muted" },
          { type: "css_includes", value: "color" },
        ],
      },
      {
        id: "ch2",
        title: "Aplicar clase a elemento",
        hint: "Agrega class=\"muted\" a un elemento HTML",
        checks: [
          { type: "html_regex", value: 'class="muted"' },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cascada y herencia</title>
</head>
<body>
  <main>
    <p>Texto principal</p>
    <p>Texto secundario</p>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cascada y herencia</title>
</head>
<body>
  <main>
    <p>Texto principal</p>
    <p class="muted">Texto secundario</p>
  </main>
</body>
</html>`,
      css: `.muted {
  color: #6b7280;
}`,
    },
  },
  {
    slug: "07-box-model",
    title: "Box model",
    order: 7,
    durationMin: 15,
    tags: ["CSS", "Fundamentos"],
    theoryMd: `# Box model

El box model define cómo se calculan el ancho y alto de los elementos.

## box-sizing

Por defecto, \`width\` no incluye padding ni border. Esto causa problemas.

Solución: usar \`box-sizing: border-box\` globalmente:

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

Ahora \`width: 300px\` incluye padding y border.

## Card con padding

\`\`\`css
.card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}
\`\`\`

- \`padding\`: Espacio interno
- \`border\`: Borde
- \`border-radius\`: Esquinas redondeadas`,
    checklist: [
      "box-sizing: border-box global",
      "Crear .card con padding",
    ],
    challenges: [
      {
        id: "ch1",
        title: "box-sizing global",
        hint: "Agrega * { box-sizing: border-box; }",
        checks: [
          { type: "css_regex", value: "\\*\\s*\\{" },
          { type: "css_includes", value: "box-sizing" },
          { type: "css_regex", value: "box-sizing\\s*:\\s*border-box" },
        ],
      },
      {
        id: "ch2",
        title: "Crear clase .card",
        hint: "Define .card con padding y border",
        checks: [
          { type: "css_regex", value: "\\.card" },
          { type: "css_includes", value: "padding" },
          { type: "css_includes", value: "border" },
        ],
      },
      {
        id: "ch3",
        title: "Aplicar card a div",
        hint: "Agrega <div class=\"card\">",
        checks: [
          { type: "html_regex", value: 'class="card"' },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box model</title>
</head>
<body>
  <main>
    <div>
      <h2>Título</h2>
      <p>Contenido</p>
    </div>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box model</title>
</head>
<body>
  <main>
    <div class="card">
      <h2>Título</h2>
      <p>Contenido</p>
    </div>
  </main>
</body>
</html>`,
      css: `* {
  box-sizing: border-box;
}

.card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}`,
    },
  },
  {
    slug: "08-tipografia",
    title: "Tipografía",
    order: 8,
    durationMin: 15,
    tags: ["CSS", "Tipografía"],
    theoryMd: `# Tipografía

Una buena tipografía mejora la legibilidad.

## Unidades rem

\`rem\` es relativo al tamaño de fuente del \`<html>\`. Por defecto: 1rem = 16px.

Ventaja: respeta las preferencias del usuario.

\`\`\`css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
}
\`\`\`

## line-height

Para legibilidad, usa \`line-height\` generoso:

\`\`\`css
body {
  line-height: 1.6;
}
\`\`\`

## Jerarquía

\`\`\`css
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }
\`\`\``,
    checklist: [
      "Usar rem para tamaños",
      "line-height en body",
      "Jerarquía h1/h2/h3",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Usar rem en h1",
        hint: "Agrega h1 { font-size: 2rem; }",
        checks: [
          { type: "css_includes", value: "font-size" },
          { type: "css_regex", value: "font-size\\s*:\\s*\\d+rem" },
        ],
      },
      {
        id: "ch2",
        title: "line-height en body",
        hint: "Agrega body { line-height: 1.6; }",
        checks: [
          { type: "css_includes", value: "line-height" },
          { type: "css_regex", value: "line-height\\s*:\\s*1\\.6" },
        ],
      },
      {
        id: "ch3",
        title: "Jerarquía h2 y h3",
        hint: "Define h2 y h3 con diferentes font-size en rem",
        checks: [
          { type: "css_regex", value: "h2\\s*\\{" },
          { type: "css_regex", value: "h3\\s*\\{" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tipografía</title>
</head>
<body>
  <main>
    <h1>Título principal</h1>
    <h2>Subtítulo</h2>
    <p>Párrafo de ejemplo con texto que necesita buena legibilidad.</p>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tipografía</title>
</head>
<body>
  <main>
    <h1>Título principal</h1>
    <h2>Subtítulo</h2>
    <p>Párrafo de ejemplo con texto que necesita buena legibilidad.</p>
  </main>
</body>
</html>`,
      css: `html {
  font-size: 16px;
}

body {
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}`,
    },
  },
  {
    slug: "09-flexbox-navbar",
    title: "Flexbox navbar",
    order: 9,
    durationMin: 15,
    tags: ["CSS", "Flexbox"],
    theoryMd: `# Flexbox navbar

Flexbox es ideal para layouts unidimensionales como navbars.

## display: flex

\`\`\`css
nav {
  display: flex;
}
\`\`\`

## gap

Espacio entre elementos hijos:

\`\`\`css
nav {
  display: flex;
  gap: 1rem;
}
\`\`\`

## align-items

Alinea verticalmente:

\`\`\`css
nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}
\`\`\`

- \`center\`: Centra verticalmente
- \`flex-start\`: Arriba
- \`flex-end\`: Abajo

## Ejemplo completo

\`\`\`css
nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}
\`\`\``,
    checklist: [
      "display: flex en nav",
      "gap para espaciado",
      "align-items: center",
    ],
    challenges: [
      {
        id: "ch1",
        title: "display flex en nav",
        hint: "Agrega nav { display: flex; }",
        checks: [
          { type: "css_includes", value: "display" },
          { type: "css_regex", value: "nav\\s*\\{[^}]*display\\s*:\\s*flex" },
        ],
      },
      {
        id: "ch2",
        title: "gap en nav",
        hint: "Agrega gap: 1rem al nav",
        checks: [
          { type: "css_includes", value: "gap" },
        ],
      },
      {
        id: "ch3",
        title: "align-items center",
        hint: "Agrega align-items: center al nav",
        checks: [
          { type: "css_includes", value: "align-items" },
          { type: "css_regex", value: "align-items\\s*:\\s*center" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox navbar</title>
</head>
<body>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</body>
</html>`,
      css: `nav ul {
  list-style: none;
  padding: 0;
}`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox navbar</title>
</head>
<body>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</body>
</html>`,
      css: `nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}`,
    },
  },
  {
    slug: "10-grid-bento",
    title: "Grid + bento",
    order: 10,
    durationMin: 20,
    tags: ["CSS", "Grid"],
    theoryMd: `# Grid + bento

CSS Grid es perfecto para layouts en cuadrícula como el diseño "bento box".

## display: grid

\`\`\`css
.grid {
  display: grid;
}
\`\`\`

## repeat() y fr

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`

- \`repeat(3, 1fr)\`: 3 columnas de igual tamaño
- \`1fr\`: Fracción del espacio disponible
- \`gap\`: Espacio entre celdas

## span

Un elemento puede ocupar múltiples celdas:

\`\`\`css
.item-large {
  grid-column: span 2;
}
\`\`\`

## Ejemplo bento

\`\`\`css
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.bento-item-large {
  grid-column: span 2;
}
\`\`\``,
    checklist: [
      "display: grid",
      "repeat(3, 1fr)",
      "span 2 para item grande",
    ],
    challenges: [
      {
        id: "ch1",
        title: "display grid",
        hint: "Agrega .grid { display: grid; }",
        checks: [
          { type: "css_includes", value: "display" },
          { type: "css_regex", value: "display\\s*:\\s*grid" },
        ],
      },
      {
        id: "ch2",
        title: "repeat(3, 1fr)",
        hint: "Agrega grid-template-columns: repeat(3, 1fr);",
        checks: [
          { type: "css_includes", value: "grid-template-columns" },
          { type: "css_includes", value: "repeat(3, 1fr)" },
        ],
      },
      {
        id: "ch3",
        title: "span 2",
        hint: "Agrega grid-column: span 2; a un elemento",
        checks: [
          { type: "css_includes", value: "grid-column" },
          { type: "css_includes", value: "span 2" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid + bento</title>
</head>
<body>
  <main>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </main>
</body>
</html>`,
      css: `.item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid + bento</title>
</head>
<body>
  <main>
    <div class="grid">
      <div class="item item-large">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </main>
</body>
</html>`,
      css: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}

.item-large {
  grid-column: span 2;
}`,
    },
  },
  {
    slug: "11-responsive",
    title: "Responsive",
    order: 11,
    durationMin: 20,
    tags: ["CSS", "Responsive"],
    theoryMd: `# Responsive

Las media queries permiten adaptar el diseño a diferentes tamaños de pantalla.

## @media min-width

\`\`\`css
@media (min-width: 700px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
\`\`\`

Esto aplica el grid solo en pantallas de 700px o más.

## Mobile-first

Empieza con el diseño móvil, luego agrega breakpoints para pantallas grandes:

\`\`\`css
.container {
  display: grid;
  gap: 1rem;
}

@media (min-width: 700px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
\`\`\`

## Breakpoints comunes

- \`700px\`: Tablets
- \`1024px\`: Desktop pequeño
- \`1280px\`: Desktop grande`,
    checklist: [
      "@media min-width: 700px",
      "2 columnas en desktop",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Crear media query",
        hint: "Agrega @media (min-width: 700px) { ... }",
        checks: [
          { type: "css_includes", value: "@media" },
          { type: "css_includes", value: "min-width: 700px" },
        ],
      },
      {
        id: "ch2",
        title: "2 columnas en media query",
        hint: "Dentro de @media, agrega grid-template-columns: repeat(2, 1fr);",
        checks: [
          { type: "css_includes", value: "grid-template-columns" },
          { type: "css_includes", value: "repeat(2, 1fr)" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive</title>
</head>
<body>
  <main>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </main>
</body>
</html>`,
      css: `.container {
  display: grid;
  gap: 1rem;
}

.item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}`,
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive</title>
</head>
<body>
  <main>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </main>
</body>
</html>`,
      css: `.container {
  display: grid;
  gap: 1rem;
}

.item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}

@media (min-width: 700px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}`,
    },
  },
  {
    slug: "12-accesibilidad",
    title: "Accesibilidad",
    order: 12,
    durationMin: 15,
    tags: ["HTML", "CSS", "Accesibilidad"],
    theoryMd: `# Accesibilidad

La accesibilidad hace que tu sitio sea usable para todos.

## Skip link

Un enlace que permite saltar al contenido principal:

\`\`\`html
<a href="#main" class="skip-link">Saltar al contenido</a>
<main id="main">...</main>
\`\`\`

\`\`\`css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #b6e68e;
  padding: 8px;
}

.skip-link:focus {
  top: 0;
}
\`\`\`

## focus-visible

Siempre usa \`:focus-visible\` para outlines accesibles:

\`\`\`css
button:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}
\`\`\`

## Contraste

Asegúrate de que el texto tenga suficiente contraste con el fondo.`,
    checklist: [
      "Skip link",
      "focus-visible con outline",
    ],
    challenges: [
      {
        id: "ch1",
        title: "Crear skip link",
        hint: "Agrega <a href=\"#main\" class=\"skip-link\">Saltar al contenido</a>",
        checks: [
          { type: "html_includes", value: "skip-link" },
          { type: "html_regex", value: 'href="#main"' },
        ],
      },
      {
        id: "ch2",
        title: "Estilo skip-link con focus",
        hint: "Crea .skip-link con position absolute y :focus visible",
        checks: [
          { type: "css_regex", value: "\\.skip-link" },
          { type: "css_includes", value: "position" },
          { type: "css_includes", value: ":focus" },
        ],
      },
      {
        id: "ch3",
        title: "focus-visible en botones",
        hint: "Agrega button:focus-visible con outline #b6e68e",
        checks: [
          { type: "css_includes", value: ":focus-visible" },
          { type: "css_includes", value: "outline" },
          { type: "css_includes", value: "#b6e68e" },
        ],
      },
    ],
    starter: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accesibilidad</title>
</head>
<body>
  <header>
    <nav>
      <a href="#">Inicio</a>
    </nav>
  </header>
  <main id="main">
    <h1>Contenido principal</h1>
    <button>Botón</button>
  </main>
</body>
</html>`,
      css: "",
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accesibilidad</title>
</head>
<body>
  <a href="#main" class="skip-link">Saltar al contenido</a>
  <header>
    <nav>
      <a href="#">Inicio</a>
    </nav>
  </header>
  <main id="main">
    <h1>Contenido principal</h1>
    <button>Botón</button>
  </main>
</body>
</html>`,
      css: `.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #b6e68e;
  color: #111;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

button:focus-visible {
  outline: 2px solid #b6e68e;
  outline-offset: 2px;
}`,
    },
  },
];
