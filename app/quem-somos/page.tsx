import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Quem Somos",
  description:
    "Conheça a Nexa Social: consultoria especializada em gestão social fundada por profissionais experientes e comprometidos com a transformação social.",
});

export default function QuemSomosPage() {
  return (
    <>
      <Hero
        title="Quem Somos"
        subtitle="Nossa história"
        description="Somos uma consultoria especializada em gestão social, sustentabilidade e investimento social privado, comprometida em conectar setores e potencializar impactos positivos."
      />

      {/* Nossa História */}
      <Section
        title="Nossa Missão"
        subtitle="Propósito"
        centered
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gray text-lg md:text-xl leading-relaxed mb-8 text-center">
            A Nexa Social nasceu da convicção de que a transformação social acontece
            através do protagonismo humano e da ação coletiva. Conectamos pessoas,
            empresas e organizações a ações transformadoras, promovendo a articulação
            entre setor privado, público e terceiro setor para converter boas intenções
            em projetos sustentáveis e resultados mensuráveis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card
              title="Missão"
              description="Fortalecer pessoas, organizações e territórios através de metodologias inovadoras e participativas, promovendo impacto social mensurável."
              iconName="Target"
              gradient
              index={0}
            />
            <Card
              title="Visão"
              description="Ser referência em consultoria social no Brasil, reconhecida pela qualidade técnica e compromisso com a transformação."
              iconName="Lightbulb"
              gradient
              index={1}
            />
            <Card
              title="Valores"
              description="Ética, transparência, inovação, respeito à diversidade e compromisso com resultados sociais mensuráveis."
              iconName="Heart"
              gradient
              index={2}
            />
          </div>
        </div>
      </Section>

      {/* Fundadora */}
      <Section
        title="Nossa Fundadora"
        subtitle="Liderança"
        className="bg-brand-pink/20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Foto fundadora */}
            <div className="lg:col-span-1 mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-purple">
                <Image
                  src="/ella.png"
                  alt="Fundadora da Nexa Social"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-purple">
                Luiza Caracek
              </h3>
              <p className="text-brand-gray leading-relaxed">
                Assistente Social com mais de 10 anos de experiência em projetos sociais,
                desenvolvimento institucional e fortalecimento de redes. Especialista em
                gestão de projetos sociais, sustentabilidade, inovação social e
                mobilização de recursos.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Com base em Jaraguá do Sul, SC, Luiza fundou a Nexa Social com a missão
                de fortalecer pessoas, organizações e territórios através de metodologias
                inovadoras e participativas, promovendo impacto social mensurável. Atua
                na conexão entre setor privado, público e terceiro setor, transformando
                boas intenções em projetos sustentáveis e resultados concretos.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Acredita que a transformação social acontece através do protagonismo
                humano e da ação coletiva, utilizando metodologias participativas para
                criar soluções sustentáveis que geram impacto duradouro nas comunidades.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Nossa Equipe */}
      <Section
        title="Nossa Equipe"
        subtitle="Expertise"
        description="Contamos com uma equipe multidisciplinar de consultores especializados em diferentes áreas da gestão social e sustentabilidade."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              A
            </div>
            <h4 className="font-bold text-brand-purple mb-1">Assistentes Sociais</h4>
            <p className="text-sm text-brand-gray">
              Desenvolvimento comunitário e políticas públicas
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              A
            </div>
            <h4 className="font-bold text-brand-purple mb-1">Administradores</h4>
            <p className="text-sm text-brand-gray">
              Gestão estratégica e sustentabilidade empresarial
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-brand-pink text-center">
            <div className="w-16 h-16 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              E
            </div>
            <h4 className="font-bold text-brand-purple mb-1">Especialistas</h4>
            <p className="text-sm text-brand-gray">
              Captação de recursos e elaboração de projetos
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Vamos trabalhar juntos?"
        description="Entre em contato para conhecer melhor nosso trabalho e descobrir como podemos apoiar sua organização."
        centered
      >
        <CTAButton
          text="Entre em contato"
          href="/contato"
          className="text-center"
        />
      </Section>
    </>
  );
}
