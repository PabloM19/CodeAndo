# CodeAndo

Plataforma educativa para aprender HTML y CSS construyendo.

## Características

- 📚 12 lecciones progresivas desde HTML base hasta accesibilidad
- 🎮 Playground integrado con preview en vivo
- ✅ Sistema de retos con validación automática
- 💾 Autoguardado en localStorage
- 🔗 Compartir código por URL
- 📱 Diseño responsive con sidebar móvil
- ♿ Accesible y con buen contraste

## Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS** para estilos
- **shadcn/ui** (Radix UI) para componentes
- **react-router-dom** para routing
- **react-markdown** para teoría
- **dompurify** para sanitización
- **lz-string** para compresión de URLs

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  app/          # Router y Layout
  pages/        # Páginas principales
  components/   # Componentes React
  playground/   # Lógica del playground (sanitize, checks, storage, share)
  content/      # Contenido de lecciones
  types/        # Tipos TypeScript
  hooks/        # Hooks personalizados
```

## Diseño

- Estilo "bento box" minimalista
- Colores: blanco, #111, grises, acento #b6e68e
- Tipografía: system-ui
- Focus visible accesible
