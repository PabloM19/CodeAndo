import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-[#111] mb-4">404</h1>
      <p className="text-xl text-[#6b7280] mb-8">
        Página no encontrada
      </p>
      <Button asChild>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
