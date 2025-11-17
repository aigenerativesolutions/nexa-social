import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Conexões que transformam!"
        subtitle="Nexa Social"
        description="Nexa Social nasce do propósito de conectar pessoas, empresas e organizações a ações que transformam. Atuamos com foco em impacto social, inovação e desenvolvimento humano, promovendo conexões entre propósito e prática por meio de projetos, treinamentos, palestras, oficinas e consultorias. Acreditamos que cada iniciativa pode gerar valor coletivo — fortalecendo vínculos, estimulando a empatia e promovendo o desenvolvimento sustentável. Nosso papel é construir pontes entre o setor privado, público e o terceiro setor, impulsionando soluções sociais que unem sensibilidade e estratégia."
        ctaText="Fale com a Nexa Social"
        ctaHref="/contato"
        imageSrc="/profesional.png"
        imageAlt="Profissional Nexa Social"
      />

      {/* Áreas de Atuação Preview */}
      <Section
        title="Áreas de Atuação"
        subtitle="Onde atuamos"
        description="Desenvolvemos soluções integradas que conectam diferentes setores da sociedade em prol do bem comum."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Empresas"
            description="Assessoria em sustentabilidade, investimento social privado e estratégias ESG para empresas que buscam gerar valor compartilhado."
            iconName="Building2"
            index={0}
          />
          <Card
            title="Organizações da Sociedade Civil"
            description="Fortalecimento institucional, captação de recursos e gestão de projetos para OSCs que transformam realidades."
            iconName="Users"
            index={1}
          />
          <Card
            title="Igrejas"
            description="Consultoria em gestão eclesiástica, projetos sociais e articulação com políticas públicas para igrejas engajadas."
            iconName="Heart"
            index={2}
          />
        </div>
        <CTAButton
          text="Conheça todas as áreas"
          href="/areas-de-atuacao"
          className="text-center mt-12"
        />
      </Section>

      {/* Diferenciais Preview */}
      <Section
        title="Nossos Diferenciais"
        subtitle="Por que escolher a Nexa Social"
        description="Combinamos expertise técnica, metodologia comprovada e paixão por transformação social."
        centered
        className="bg-brand-pink/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Impacto Mensurável"
            description="Utilizamos indicadores e metodologias de avaliação que comprovam os resultados gerados pelos projetos sociais."
            iconName="TrendingUp"
            gradient
            index={0}
          />
          <Card
            title="Inovação Social"
            description="Desenvolvemos soluções criativas e inovadoras para desafios sociais complexos, conectando setores e recursos."
            iconName="Lightbulb"
            gradient
            index={1}
          />
          <Card
            title="Cultura de Propósito"
            description="Integramos propósito e valores organizacionais, fortalecendo a cultura interna e o engajamento de equipes."
            iconName="Target"
            gradient
            index={2}
          />
        </div>
        <CTAButton
          text="Ver todos os diferenciais"
          href="/diferenciais"
          variant="default"
          className="text-center mt-12"
        />
      </Section>

      {/* Galeria de Experiências */}
      <Section
        title="Nossa Trajetória"
        subtitle="Experiências"
        description="Momentos que marcam nossa jornada de impacto social e conexões transformadoras."
        centered
        className="bg-brand-pink/20"
      >
        <Marquee pauseOnHover className="[--duration:60s]">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative w-80 h-80 rounded-2xl overflow-hidden">
              <Image
                src={`/experiencia-${num}.png`}
                alt={`Experiência Nexa Social ${num}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </Section>

      {/* CTA Final */}
      <Section
        title="Pronto para transformar?"
        description="Entre em contato e descubra como podemos ajudar sua organização a gerar impacto social positivo e sustentável."
        centered
      >
        <CTAButton
          text="Fale com nossos especialistas"
          href="/contato"
          className="text-center"
        />
      </Section>
    </>
  );
}
