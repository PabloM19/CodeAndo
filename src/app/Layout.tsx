import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" richColors />
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-neutral-900 hover:text-accent-green transition-colors">
            CodeAndo con Helena
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-[#6b7280] hover:text-[#111] transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/lessons"
              className="text-[#6b7280] hover:text-[#111] transition-colors"
            >
              Lecciones
            </Link>
            <Link
              to="/projects"
              className="text-[#6b7280] hover:text-[#111] transition-colors"
            >
              Proyectos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="secondary" size="sm">
              <Link to="/lessons">Empezar</Link>
            </Button>
          </div>
        </div>
      </header>
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-[#e5e7eb] bg-white py-8">
        <div className="container mx-auto px-4 text-center text-[#6b7280] text-sm">
          <p>© CodeAndo con Helena</p>
          <p className="mt-2">Aprende HTML y CSS construyendo.</p>
        </div>
      </footer>
    </div>
  );
}
