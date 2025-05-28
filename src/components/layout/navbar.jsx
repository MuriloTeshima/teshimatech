import Button from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span>M.Teshima Consulting</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#servicos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#sobre"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Depoimentos
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </nav>
        <Button variant="light" className="hidden md:inline-flex">
          <Link href="#contato">Fale Comigo</Link>
        </Button>
      </div>
    </header>
  )
}
