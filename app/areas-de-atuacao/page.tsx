import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Áreas de Atuação",
  description:
    "Atuamos com empresas, organizações da sociedade civil e igrejas, desenvolvendo soluções integradas que conectam diferentes setores em prol do bem comum.",
});

export default function AreasAtuacaoPage() {
  return (
    <>
      <Hero
        title="Áreas de Atuação"
        subtitle="Onde atuamos"
        description="Desenvolvemos soluções integradas que conectam diferentes setores da sociedade em prol do bem comum."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Empresas */}
          <Card
            title="Empresas"
            description="Apoiamos empresas no desenvolvimento e implementação de estratégias de sustentabilidade, investimento social privado e programas de impacto social. Nosso trabalho inclui desde a definição de políticas ESG até a estruturação de projetos que geram valor compartilhado para negócios e comunidades."
            iconName="Building2"
            gradient
          />

          {/* OSCs */}
          <Card
            title="Organizações da Sociedade Civil"
            description="Fortalecemos organizações da sociedade civil por meio de consultoria em gestão, captação de recursos, elaboração de projetos e articulação de parcerias. Auxiliamos OSCs a ampliar seu impacto, profissionalizar processos e garantir sustentabilidade financeira e institucional."
            iconName="Users"
            gradient
          />

          {/* Igrejas */}
          <Card
            title="Igrejas"
            description="Assessoramos igrejas na estruturação de projetos sociais, gestão eclesiástica, articulação com políticas públicas e desenvolvimento comunitário. Nosso objetivo é potencializar a atuação social das igrejas, conectando fé e transformação social de forma estratégica e sustentável."
            iconName="Heart"
            gradient
          />

          {/* Integração Setorial */}
          <Card
            title="Integração Setorial"
            description="Facilitamos conexões estratégicas entre empresas, OSCs, igrejas e governo, promovendo parcerias intersetoriais que maximizam recursos e ampliam o impacto social. Acreditamos que a transformação acontece quando diferentes atores se unem em prol de objetivos comuns."
            iconName="Network"
            gradient
          />
        </div>
      </Section>

      {/* Nosso Método */}
      <Section
        title="Nossa Abordagem"
        subtitle="Como trabalhamos"
        description="Independente do setor, nossa metodologia é baseada em diagnóstico participativo, planejamento estratégico, implementação colaborativa e avaliação de resultados."
        centered
        className="bg-brand-pink/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Diagnóstico</h3>
            <p className="text-brand-gray text-sm">
              Análise profunda do contexto e necessidades
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Planejamento</h3>
            <p className="text-brand-gray text-sm">
              Estratégias personalizadas e objetivos claros
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Implementação</h3>
            <p className="text-brand-gray text-sm">
              Execução colaborativa com acompanhamento
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="font-bold text-brand-purple mb-2">Avaliação</h3>
            <p className="text-brand-gray text-sm">
              Mensuração de resultados e impacto social
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Vamos conversar sobre sua área?"
        description="Entre em contato para conhecer como podemos apoiar sua organização."
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
