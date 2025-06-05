import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Footer() {
  const copy_year = new Date().getFullYear()
  return (
    <div className="w-full h-16 flex flex-row items-center justify-between px-10 bg-neutral-100 border-t-1 border-neutral-300">
      <div>
        <h1 className="font-semibold text-neutral-800">TTech Consulting</h1>
      </div>
      <div>
        <h2 className="text-sm text-neutral-500">
          &#169; {copy_year} Teshima Tech Consulting. Todos os direitos
          reservados - 60.509.400/0001-59
        </h2>
      </div>
    </div>
  )
}
