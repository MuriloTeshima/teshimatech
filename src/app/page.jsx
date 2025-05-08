import Image from "next/image"
import Link from "next/link"
import { ButtonDark, ButtonLight } from "@/components/ui/button"
import Card from "@/components/ui/card"
import PropBox from "@/components/ui/prop"
import Carousel from "@/components/carousel"
import {
  LaptopMinimalCheck,
  GlobeLock,
  FolderCode,
  Megaphone,
  Globe,
  PanelsTopLeft,
  Share2,
} from "lucide-react"

const mainimg = "/images/mainimg_1.png"
const profileimg = "/images/profileimg.png"

const cardcolection = {
  card1: {
    icon: <LaptopMinimalCheck size={36} />,
    title: "Infraestrutura Tech Inteligente",
    description:
      "Desenvolvemos, implementamos e escalamos ambientes tecnológicos robustos para empresas de todos os tamanhos, com foco em performance, escalabilidade e inovação.",
  },
  card2: {
    icon: <GlobeLock size={36} />,
    title: "Segurança Digital Avançada",
    description:
      "Protegemos seus dados com soluções modernas de cibersegurança, políticas inteligentes de acesso e treinamentos que fortalecem sua equipe contra ameaças digitais.",
  },
  card3: {
    icon: <FolderCode size={36} />,
    title: "Soluções em Software Sob Medida",
    description:
      "Criamos plataformas, sistemas e aplicativos que transformam processos internos em experiências mais ágeis, inteligentes e automatizadas.",
  },
  card4: {
    icon: <Megaphone size={36} />,
    title: "Growth e Marketing Digital",
    description:
      "Conectamos sua marca ao público certo com estratégias de marketing orientadas por dados, mídia paga eficaz e gestão de redes sociais com impacto real.",
  },
  card5: {
    icon: <Globe size={36} />,
    title: "SEO Estratégico e Inteligência de Dados",
    description:
      "Maximizamos sua presença online com técnicas avançadas de SEO, análise profunda de dados e relatórios que guiam decisões estratégicas.",
  },
  card6: {
    icon: <PanelsTopLeft size={36} />,
    title: "Experiências Digitais com Web Design",
    description:
      "Desenhamos sites responsivos, landing pages e lojas virtuais com foco em usabilidade, performance e alta conversão.",
  },
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-muted flex justify-center bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 gap-y-5">
              <div className="space-y-2 flex flex-col gap-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Consultoria Especializada em TI e Marketing Digital
                </h1>
                <p className="max-w-[600px] text-neutral-500 md:text-xl">
                  Impulsione sua presença digital e acelere sua jornada
                  tecnológica com soluções inteligentes feitas para o futuro do
                  seu negócio!!!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <ButtonDark>
                  <Link href="#contato">Agendar Consultoria</Link>
                </ButtonDark>
                <ButtonLight>
                  <Link href="#servicos">Conhecer Serviços</Link>
                </ButtonLight>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={mainimg}
                alt="Consultoria em TI e Marketing"
                width={720}
                height={720}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid justify-center mx-39 py-18">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center mb-14">
            <PropBox children={"Serviços"} />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl text-center mb-3">
              Ecossistema de Soluções Tech
            </h2>
            <p className="text-muted-foreground text-neutral-500 md:text-xl text-center">
              Soluções digitais que elevam sua operação, aumentam sua
              visibilidade <br /> e posicionam sua marca no cenário da nova
              economia.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            {Object.values(cardcolection).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="grid justify-center bg-gray-50">
        <div className="flex justify-center mx-39 py-18 gap-4">
          <Image
            src={profileimg}
            alt="Consultoria em TI e Marketing"
            width={720}
            height={800}
            className="rounded-lg object-cover"
            priority
            quality={100}
          />
          <div className="flex flex-col items-start justify-center">
            <PropBox children="Teste" />
            <div className="flex flex-col items-start justify-center max-w-prose gap-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl text-left mb-3">
                Tecnologia com propósito <br /> Estratégia com experiência
              </h1>
              <p className="text-muted-foreground text-neutral-500 md:text-xl text-left">
                Atuo com tecnologia e marketing digital para entregar soluções
                personalizadas, eficientes e alinhadas aos objetivos
                estratégicos de cada cliente.
              </p>
              <ul className="flex flex-col gap-2 list-inside text-neutral-900 md:text-lg text-left mt-4 font-semibold pb-3">
                <li className="flex flex-row gap-2 items-center">
                  <Share2 /> Projetos entregues para empresas de diversos
                  segmentos
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <Share2 /> Certificações nas principais tecnologias do mercado
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <Share2 /> Abordagem personalizada para cada cliente
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <Share2 /> Compromisso com resultados mensuráveis
                </li>
              </ul>
              <ButtonDark children="Entre em Contato" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="grid justify-center bg-white mx-39 py-18 text-center">
        <div className="flex flex-col items-center justify-center">
          <PropBox children="Depoimentos" />
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl text-left mb-3">
              O Que Dizem Nossos Clientes
            </h1>
            <p className="text-muted-foreground text-neutral-500 md:text-xl text-left">
              O Que Dizem Nossos Clientes Veja o que nossos clientes têm a dizer
              sobre nossos serviços de consultoria.
            </p>
          </div>
          <Carousel />
        </div>
      </section>
    </main>
  )
}
