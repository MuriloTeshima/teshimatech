import React from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonialImg = "/images/profileimg.png"

const testimonials = [
  {
    id: 1,
    name: "Murilo Teshima",
    role: "CEO Teshima Tech Consulting",
    content:
      "A consultoria transformou completamente nossa estratégia digital. Em apenas 3 meses, aumentamos nosso tráfego orgânico em 150% e as conversões em 75%.",
    avatar: testimonialImg,
  },
  // {
  //   id: 2,
  //   name: "Daniel Padua",
  //   role: "CTO Teshima Tech Consulting",
  //   content:
  //     "A clareza técnica e a visão estratégica que recebemos foram fundamentais para escalar nossas soluções de forma sustentável.",
  //   avatar: testimonialImg,
  // },
  // {
  //   id: 3,
  //   name: "Cláudia Ferreira",
  //   role: "CMO Teshima Tech Consulting",
  //   content:
  //     "Nosso posicionamento de marca evoluiu muito com as ações propostas. Resultados concretos em menos de 90 dias.",
  //   avatar: testimonialImg,
  // },
]

export default function Carousel() {
  return (
    <div className="flex flex-col items-center justify-center text- gap-8">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex flex-col text-center justify-center items-center gap-8"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <Quote color="#dbdbdb" size={78} />
            <p className="text-gray-700 font-light text-xl italic max-w-5xl">
              {testimonial.content}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={testimonial.avatar}
              alt={`Foto de ${testimonial.name}`}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
