import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import {
  TrendingUp,
  Lightbulb,
  Target,
  Users,
  Settings,
  Network,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Diferenciais",
  description:
    "Conheça os diferenciais da Nexa Social: impacto mensurável, inovação social, cultura de propósito, metodologia participativa e muito mais.",
});

export default function DiferenciaisPage() {
  return (
    <>
      <Hero
        title="Nossos Diferenciais"
        subtitle="O que nos torna únicos"
        description="Combinamos expertise técnica, metodologia comprovada e paixão por transformação social para entregar resultados excepcionais."
      />

      <Section
        title="Por que escolher a Nexa Social"
        subtitle="Qualidade e compromisso"
        description="Oferecemos muito mais que consultoria: somos parceiros estratégicos no processo de transformação social."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Impacto Mensurável"
            description="Utilizamos indicadores robustos e metodologias de avaliação reconhecidas para comprovar os resultados gerados pelos projetos sociais. Acreditamos que a transformação precisa ser medida e comprovada com dados concretos."
            iconName="TrendingUp"
            gradient
            index={0}
          />

          <Card
            title="Inovação Social"
            description="Desenvolvemos soluções criativas e inovadoras para desafios sociais complexos, combinando diferentes metodologias e conectando setores. Buscamos sempre novas formas de gerar valor social compartilhado."
            iconName="Lightbulb"
            gradient
            index={1}
          />

          <Card
            title="Cultura de Propósito"
            description="Integramos propósito e valores organizacionais nas estratégias e práticas do dia a dia, fortalecendo a cultura interna e o engajamento de equipes em torno de objetivos sociais significativos."
            iconName="Target"
            gradient
            index={2}
          />

          <Card
            title="Metodologia Participativa"
            description="Trabalhamos de forma colaborativa, envolvendo stakeholders em todas as etapas do processo. Acreditamos que as melhores soluções nascem do diálogo e da construção coletiva."
            iconName="Users"
            gradient
            index={3}
          />

          <Card
            title="Abordagem Personalizada"
            description="Não oferecemos soluções prontas. Cada consultoria é customizada de acordo com o contexto, desafios e objetivos específicos de cada organização, respeitando sua identidade e cultura."
            iconName="Settings"
            gradient
            index={4}
          />

          <Card
            title="Integração Setorial"
            description="Promovemos conexões estratégicas entre empresas, OSCs, igrejas e governo, facilitando parcerias intersetoriais que maximizam recursos e ampliam o alcance do impacto social."
            iconName="Network"
            gradient
            index={5}
          />
        </div>
      </Section>

      {/* Resultados */}
      <Section
        title="Resultados Comprovados"
        subtitle="Nosso impacto"
        className="bg-brand-pink/20"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-purple mb-2">100+</div>
            <p className="text-brand-gray font-medium">Projetos realizados</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-purple mb-2">50+</div>
            <p className="text-brand-gray font-medium">Organizações atendidas</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-purple mb-2">15+</div>
            <p className="text-brand-gray font-medium">Anos de experiência</p>
          </div>
        </div>
      </Section>

      {/* Metodologia */}
      <Section
        title="Nossa Metodologia"
        subtitle="Como trabalhamos"
        description="Aplicamos uma abordagem estruturada que combina diagnóstico participativo, planejamento estratégico, implementação colaborativa e avaliação rigorosa de resultados."
        centered
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink">
              <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-brand-purple mb-2">
                Diagnóstico Participativo
              </h3>
              <p className="text-brand-gray text-sm">
                Escuta ativa, análise de contexto e mapeamento de stakeholders para
                compreender profundamente a realidade e os desafios.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink">
              <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-brand-purple mb-2">
                Planejamento Estratégico
              </h3>
              <p className="text-brand-gray text-sm">
                Definição de objetivos, metas, indicadores e estratégias
                customizadas alinhadas ao propósito e capacidade da organização.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink">
              <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-brand-purple mb-2">
                Implementação Colaborativa
              </h3>
              <p className="text-brand-gray text-sm">
                Execução das ações com acompanhamento próximo, capacitação de
                equipes e ajustes contínuos conforme necessário.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink">
              <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="font-bold text-brand-purple mb-2">
                Avaliação de Resultados
              </h3>
              <p className="text-brand-gray text-sm">
                Mensuração do impacto social gerado com base em indicadores
                pré-estabelecidos, garantindo transparência e aprendizado.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Pronto para trabalhar com os melhores?"
        description="Entre em contato e descubra como nossos diferenciais podem transformar sua organização."
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
