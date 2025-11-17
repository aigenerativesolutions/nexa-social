import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Serviços",
  description:
    "Consultoria especializada em gestão social, sustentabilidade, investimento social privado e projetos de impacto. Soluções personalizadas para empresas, OSCs e igrejas.",
});

const servicosEmpresas = [
  {
    title: "Voluntariado Corporativo",
    description: "Estruturação de programas de voluntariado estratégico que conectam colaboradores a causas sociais, fortalecendo a cultura organizacional e gerando impacto positivo nas comunidades."
  },
  {
    title: "Proteção à Infância",
    description: "Desenvolvimento de políticas, protocolos e programas de proteção à infância para empresas, garantindo ambientes seguros e conformidade com legislações nacionais e internacionais."
  },
  {
    title: "Capacitação Social e ESG",
    description: "Formação de equipes em temas de responsabilidade social, sustentabilidade e governança ESG, integrando propósito e estratégia de negócio para resultados mensuráveis."
  },
  {
    title: "Gestão e Desenvolvimento de Projetos",
    description: "Planejamento, implementação e avaliação de projetos de investimento social privado, com metodologias inovadoras e foco em impacto social sustentável e mensurável."
  }
];

const servicosOrganizacoes = [
  {
    title: "Elaboração e Gestão de Projetos",
    description: "Apoio na concepção, planejamento e gestão de projetos sociais, incluindo elaboração de propostas para editais, captação de recursos e monitoramento de resultados."
  },
  {
    title: "Capacitação de Equipes e Lideranças",
    description: "Programas formativos para desenvolvimento de competências técnicas e de liderança, fortalecendo a capacidade institucional e a qualidade dos serviços prestados."
  },
  {
    title: "Políticas e Protocolos de Proteção",
    description: "Desenvolvimento e implementação de políticas de proteção à infância e adolescência, protocolos de safeguarding e sistemas de gestão de riscos para organizações sociais e igrejas."
  }
];

const servicosPalestras = [
  "Empresas com Propósito: integrando responsabilidade social e estratégia de negócio",
  "Proteção à Infância: construindo ambientes seguros e acolhedores",
  "Inovação e Impacto Social: metodologias participativas para transformação",
  "Diversidade e Inclusão: promovendo equidade e pertencimento"
];

export default function ServicosPage() {
  return (
    <>
      <Hero
        title="Nossos Serviços"
        subtitle="Soluções personalizadas"
        description="Oferecemos consultoria especializada para diferentes setores, com foco em gestão social, sustentabilidade e impacto positivo."
      />

      {/* Serviços para Empresas */}
      <Section
        title="Para Empresas"
        subtitle="Investimento Social Privado"
        description="Apoiamos empresas no desenvolvimento de estratégias de sustentabilidade e programas sociais que geram valor compartilhado."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicosEmpresas.map((servico, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-6 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-brand-purple">{servico.title}</h3>
              </div>
              <p className="text-brand-gray text-base leading-relaxed pl-9">{servico.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Serviços para Organizações Sociais e Igrejas */}
      <Section
        title="Para Organizações Sociais e Igrejas"
        subtitle="Fortalecimento Institucional"
        description="Fortalecemos organizações da sociedade civil e igrejas para que ampliem seu impacto social através de gestão profissional e projetos estruturados."
        className="bg-brand-pink/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicosOrganizacoes.map((servico, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-6 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-brand-purple">{servico.title}</h3>
              </div>
              <p className="text-brand-gray text-base leading-relaxed pl-9">{servico.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Palestras e Workshops */}
      <Section
        title="Palestras e Workshops"
        subtitle="Formação e Sensibilização"
        description="Palestras e workshops interativos para sensibilizar e capacitar equipes em temas estratégicos de impacto social."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {servicosPalestras.map((palestra, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-brand-midnight font-medium">{palestra}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Interessado em nossos serviços?"
        description="Entre em contato para agendar uma conversa e conhecer como podemos apoiar sua organização."
        centered
        className="bg-brand-pink/20"
      >
        <CTAButton
          text="Solicite uma proposta"
          href="/contato"
          className="text-center"
        />
      </Section>
    </>
  );
}
