import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Testimonial } from "@/components/testimonial";
import { CTAButton } from "@/components/cta-button";
import { Building2, Users, Heart } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Clientes e Depoimentos",
  description:
    "Conheça as organizações que confiam na Nexa Social e veja o que nossos clientes dizem sobre nosso trabalho.",
});

const clientes = {
  empresas: [
    "Empresa de Tecnologia XYZ",
    "Indústria ABC Ltda",
    "Banco Social S/A",
    "Varejo Sustentável Ltda",
  ],
  oscs: [
    "Instituto de Desenvolvimento Comunitário",
    "Associação de Apoio a Crianças",
    "Fundação Educacional",
    "ONG Meio Ambiente Vivo",
  ],
  igrejas: [
    "Igreja Comunitária da Paz",
    "Paróquia São Francisco",
    "Igreja Batista Central",
    "Igreja Metodista Wesleyana",
  ],
};

const depoimentos = [
  {
    quote:
      "A Nexa Social foi fundamental para estruturar nosso programa de investimento social. A metodologia participativa e o olhar estratégico trouxeram resultados mensuráveis que superaram nossas expectativas.",
    author: "Maria Silva",
    role: "Gerente de Sustentabilidade",
    company: "Empresa de Tecnologia XYZ",
  },
  {
    quote:
      "O trabalho de fortalecimento institucional realizado pela equipe da Nexa Social transformou nossa gestão. Hoje temos processos mais claros, captação mais eficiente e, principalmente, maior impacto social.",
    author: "João Santos",
    role: "Diretor Executivo",
    company: "Instituto de Desenvolvimento Comunitário",
  },
  {
    quote:
      "A consultoria em projetos sociais nos ajudou a profissionalizar a atuação social da nossa igreja. Conseguimos articular parcerias importantes e ampliar significativamente nosso alcance na comunidade.",
    author: "Pastor Carlos Mendes",
    role: "Líder Comunitário",
    company: "Igreja Comunitária da Paz",
  },
];

export default function ClientesDepoimentosPage() {
  return (
    <>
      <Hero
        title="Clientes e Depoimentos"
        subtitle="Quem confia na Nexa Social"
        description="Temos orgulho de trabalhar com organizações comprometidas com a transformação social em diferentes setores."
      />

      {/* Galeria de Clientes */}
      <Section
        title="Parceiros e Clientes"
        subtitle="Conexões"
        description="Organizações que confiam na Nexa Social para transformar impacto social em realidade."
        centered
        className="bg-brand-pink/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white p-8 flex items-center justify-center">
            <Image
              src="/clientes-1.png"
              alt="Clientes e Parceiros Nexa Social"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white p-8 flex items-center justify-center">
            <Image
              src="/clientes-2.png"
              alt="Organizações Parceiras Nexa Social"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </Section>

      {/* Clientes */}
      <Section
        title="Nossos Clientes"
        subtitle="Parcerias"
        description="Trabalhamos com empresas, organizações da sociedade civil e igrejas que acreditam no poder da gestão social profissional."
        centered
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Empresas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple">Empresas</h3>
            </div>
            <ul className="space-y-3">
              {clientes.empresas.map((cliente, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-xl border-2 border-brand-pink text-brand-gray"
                >
                  {cliente}
                </li>
              ))}
            </ul>
          </div>

          {/* OSCs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple">OSCs</h3>
            </div>
            <ul className="space-y-3">
              {clientes.oscs.map((cliente, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-xl border-2 border-brand-pink text-brand-gray"
                >
                  {cliente}
                </li>
              ))}
            </ul>
          </div>

          {/* Igrejas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple">Igrejas</h3>
            </div>
            <ul className="space-y-3">
              {clientes.igrejas.map((cliente, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-xl border-2 border-brand-pink text-brand-gray"
                >
                  {cliente}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section
        title="O que dizem sobre nós"
        subtitle="Depoimentos"
        description="Veja o que nossos clientes dizem sobre o trabalho realizado pela Nexa Social."
        centered
        className="bg-brand-pink/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <Testimonial
              key={index}
              quote={depoimento.quote}
              author={depoimento.author}
              role={depoimento.role}
              company={depoimento.company}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Cases de Sucesso */}
      <Section
        title="Impacto em Números"
        subtitle="Resultados"
        description="Alguns dos resultados alcançados em parceria com nossos clientes."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">85%</div>
            <p className="text-brand-gray text-sm">
              Aumento na captação de recursos
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">10k+</div>
            <p className="text-brand-gray text-sm">
              Pessoas impactadas diretamente
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">95%</div>
            <p className="text-brand-gray text-sm">
              Índice de satisfação dos clientes
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">40+</div>
            <p className="text-brand-gray text-sm">
              Parcerias intersetoriais criadas
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Quer fazer parte dessa história?"
        description="Entre em contato e descubra como podemos ajudar sua organização a alcançar resultados transformadores."
        centered
      >
        <CTAButton
          text="Fale com a Nexa Social"
          href="/contato"
          className="text-center"
        />
      </Section>
    </>
  );
}
