"use client"

import { useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

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
  {
    id: 2,
    name: "Murilo Teshima",
    role: "CEO Teshima Tech Consulting",
    content:
      "A consultoria transformou completamente nossa estratégia digital. Em apenas 3 meses, aumentamos nosso tráfego orgânico em 150% e as conversões em 75%.",
    avatar: testimonialImg,
  },
  {
    id: 3,
    name: "Murilo Teshima",
    role: "CEO Teshima Tech Consulting",
    content:
      "A consultoria transformou completamente nossa estratégia digital. Em apenas 3 meses, aumentamos nosso tráfego orgânico em 150% e as conversões em 75%.",
    avatar: testimonialImg,
  },
  // Adicione mais depoimentos aqui, se quiser testar
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const isSingleSlide = testimonials.length === 1

  return (
    <div className="relative w-full max-w-4xl overflow-hidden mx-auto">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full flex flex-col items-center gap-8 px-6"
          >
            <div className="flex flex-col items-center gap-3">
              <Quote color="#dbdbdb" size={78} />
              <p className="text-gray-700 font-light text-xl italic max-w-3xl text-center">
                {testimonial.content}
              </p>
            </div>
            <div className="flex flex-col items-center">
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

      {/* Navigation buttons */}
      {!isSingleSlide && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicators */}
      {!isSingleSlide && (
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
