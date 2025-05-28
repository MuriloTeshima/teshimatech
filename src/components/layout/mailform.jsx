"use client"
import { InputBox, InputText } from "@/components/ui/inputs"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function EmailForm() {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const enviarEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        "service_zmzu1ya",
        "template_e2bjnuk",
        form.current,
        "HMoIJptRdGddGo4wy"
      )
      .then(
        (result) => {
          console.log("Mensagem enviada:", result.text)
          alert("Mensagem enviada com sucesso!")
          form.current.reset()
        },
        (error) => {
          console.error("Erro ao enviar:", error.text)
          alert("Ocorreu um erro ao enviar. Tente novamente.")
        }
      )
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      <form
        ref={form}
        onSubmit={enviarEmail}
        className="flex flex-col gap-4 border-1 border-neutral-300 p-6 rounded-sm w-1/3 bg-white"
      >
        <div className="grid grid-cols-2 gap-4">
          <InputBox
            id="nome"
            name="from_name"
            type="text"
            placeholder="Insira seu nome"
            label="Nome *"
            required={true}
          />
          <InputBox
            id="email"
            name="reply_to"
            type="email"
            placeholder="Insira seu e-mail"
            label="Email *"
            required={true}
          />
          <InputBox
            id="telefone"
            name="telefone"
            type="text"
            placeholder="Insira seu telefone"
            label="Telefone *"
            required={true}
          />
          <InputBox
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Nome da empresa"
            label="Empresa"
          />
        </div>

        <InputText
          name="message"
          placeholder="Descreva sua necessidade ou projeto..."
          required={true}
        />

        <button
          className="w-full bg-neutral-900 py-2 rounded-sm text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  )
}
