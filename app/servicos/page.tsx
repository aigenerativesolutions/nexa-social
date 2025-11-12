import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Serviços",
  description:
    "Consultoria especializada em gestão social, sustentabilidade, investimento social privado e projetos de impacto. Soluções personalizadas para empresas, OSCs e igrejas.",
});

const servicosEmpresas = [
  "Diagnóstico de maturidade ESG",
  "Elaboração de estratégias de sustentabilidade",
  "Estruturação de programas de investimento social privado",
  "Gestão de projetos sociais corporativos",
  "Mensuração de impacto social",
  "Engajamento de stakeholders",
  "Relatórios de sustentabilidade e comunicação de impacto",
];

const servicosOSCs = [
  "Planejamento estratégico participativo",
  "Fortalecimento institucional e governança",
  "Captação de recursos e mobilização de doadores",
  "Elaboração de projetos sociais e editais",
  "Monitoramento e avaliação de projetos",
  "Articulação de parcerias intersetoriais",
  "Capacitação de equipes e lideranças",
];

const servicosIgrejas = [
  "Consultoria em gestão eclesiástica",
  "Estruturação de projetos sociais comunitários",
  "Articulação com políticas públicas",
  "Desenvolvimento de programas de assistência social",
  "Capacitação de lideranças e voluntários",
  "Mobilização comunitária e advocacy",
  "Parcerias entre igreja e sociedade civil",
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
        <Card
          title="Serviços Especializados"
          description="Desenvolvemos soluções customizadas que conectam objetivos de negócio com impacto social positivo."
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicosEmpresas.map((servico, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-brand-midnight font-medium">{servico}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Serviços para OSCs */}
      <Section
        title="Para Organizações da Sociedade Civil"
        subtitle="Fortalecimento Institucional"
        description="Fortalecemos OSCs para que ampliem seu impacto social e alcancem sustentabilidade financeira e institucional."
        className="bg-brand-pink/20"
      >
        <Card
          title="Consultoria Completa"
          description="Apoiamos organizações em todas as etapas do ciclo de gestão, desde o planejamento até a avaliação de resultados."
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicosOSCs.map((servico, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-brand-midnight font-medium">{servico}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Serviços para Igrejas */}
      <Section
        title="Para Igrejas"
        subtitle="Gestão e Projetos Sociais"
        description="Assessoramos igrejas no desenvolvimento de projetos sociais estratégicos e na articulação com diferentes atores."
      >
        <Card
          title="Atuação Social da Igreja"
          description="Potencializamos o impacto social das igrejas por meio de gestão profissional e conexões estratégicas."
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicosIgrejas.map((servico, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-brand-pink hover:border-brand-purple transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-brand-midnight font-medium">{servico}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Interessado em nossos serviços?"
        description="Entre em contato para agendar uma conversa e conhecer como podemos apoiar sua organização."
        centered
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
