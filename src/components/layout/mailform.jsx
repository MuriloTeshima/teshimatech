"use client";
import { InputBox, InputText } from "@/components/ui/inputs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zmzu1ya",
        "template_e2bjnuk",
        form.current,
        "HMoIJptRdGddGo4wy"
      )
      .then(
        (result) => {
          console.log("Mensagem enviada:", result.text);
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
          alert("Ocorreu um erro ao enviar. Tente novamente.");
        }
      );
  };

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
          />
          <InputBox
            id="email"
            name="reply_to"
            type="email"
            placeholder="Insira seu e-mail"
            label="Email *"
          />
          <InputBox
            id="telefone"
            name="telefone"
            type="text"
            placeholder="Insira seu telefone"
            label="Telefone *"
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
        />
        <button
          className="w-full bg-neutral-900 py-2 rounded-sm text-white font-semibold"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
