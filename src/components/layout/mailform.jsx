import { InputBox, InputText } from "@/components/ui/inputs"

export default function EmailForm() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      <form action="" className="flex flex-col gap-4 border-1 border-neutral-300 p-6 rounded-sm w-1/3 bg-white">
        <div className="grid grid-cols-2 gap-4 ">
          <InputBox
            id="teste"
            type="text"
            placeholder="Insira seu Nome"
            label="Nome *"
          />
          <InputBox
            id="teste"
            type="text"
            placeholder="Insira seu Nome"
            label="Email *"
          />
          <InputBox
            id="teste"
            type="text"
            placeholder="Insira seu Nome"
            label="Telefone *"
          />
          <InputBox
            id="teste"
            type="text"
            placeholder="Insira seu Nome"
            label="Empresa"
          />
        </div>
        <InputText placeholder='Informações sobre sua necessidade' />
        <button className="w-full bg-neutral-900 py-2 rounded-sm text-white font-semibold" type="submit">Enviar</button>
      </form>
    </div>
  )
}
