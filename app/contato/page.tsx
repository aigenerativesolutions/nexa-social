"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "./actions";
import Image from "next/image";

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitMessage({
          type: "success",
          message: result.message || "Mensagem enviada com sucesso!",
        });
        reset();
      } else {
        setSubmitMessage({
          type: "error",
          message: result.error || "Erro ao enviar mensagem. Tente novamente.",
        });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        message: "Erro ao enviar mensagem. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        title="Entre em Contato"
        subtitle="Fale conosco"
        description="Estamos prontos para ajudar sua organização a gerar impacto social positivo. Entre em contato e vamos conversar!"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div>
            {/* Imagem de Contato */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-purple">
              <Image
                src="/contacto.png"
                alt="Contato Nexa Social"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-3xl font-bold text-brand-purple mb-6">
              Informações de Contato
            </h2>
            <p className="text-brand-gray mb-8 leading-relaxed">
              Preencha o formulário ao lado ou entre em contato diretamente
              através dos nossos canais. Teremos prazer em atender você!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-purple mb-1">E-mail</h3>
                  <a
                    href="mailto:luizadcaracek@gmail.com"
                    className="text-brand-gray hover:text-brand-orange transition-colors"
                  >
                    luizadcaracek@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-purple mb-1">Telefone</h3>
                  <a
                    href="https://wa.me/5547988185277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gray hover:text-brand-orange transition-colors"
                  >
                    (47) 98818-5277 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-purple mb-1">
                    Localização
                  </h3>
                  <p className="text-brand-gray">
                    Jaraguá do Sul, SC
                    <br />
                    Atuação Nacional
                  </p>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="mt-8 p-6 bg-brand-pink/20 rounded-2xl">
              <h3 className="font-bold text-brand-purple mb-2">
                Horário de Atendimento
              </h3>
              <p className="text-brand-gray text-sm">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábados, Domingos e Feriados: Fechado
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-pink card-shadow">
            <h2 className="text-3xl font-bold text-brand-purple mb-6">
              Envie sua Mensagem
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome */}
              <div>
                <Label htmlFor="name">
                  Nome completo <span className="text-brand-orange">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <Label htmlFor="email">
                  E-mail <span className="text-brand-orange">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  {...register("phone")}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Organização */}
              <div>
                <Label htmlFor="organization">Organização</Label>
                <Input
                  id="organization"
                  type="text"
                  placeholder="Nome da sua organização"
                  {...register("organization")}
                  aria-invalid={errors.organization ? "true" : "false"}
                />
                {errors.organization && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              {/* Tipo de Organização */}
              <div>
                <Label htmlFor="organizationType">
                  Tipo de Organização{" "}
                  <span className="text-brand-orange">*</span>
                </Label>
                <select
                  id="organizationType"
                  {...register("organizationType")}
                  className="flex h-12 w-full rounded-xl border-2 border-brand-pink bg-white px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-invalid={errors.organizationType ? "true" : "false"}
                >
                  <option value="">Selecione...</option>
                  <option value="empresa">Empresa</option>
                  <option value="osc">Organização da Sociedade Civil</option>
                  <option value="igreja">Igreja</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.organizationType && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.organizationType.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="message">
                  Mensagem <span className="text-brand-orange">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Mensagem de Sucesso/Erro */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-xl ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-800 border-2 border-green-200"
                      : "bg-red-50 text-red-800 border-2 border-red-200"
                  }`}
                >
                  {submitMessage.message}
                </div>
              )}

              {/* Botão Submit */}
              <Button
                type="submit"
                variant="orange"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>

              <p className="text-xs text-brand-gray text-center">
                Ao enviar este formulário, você concorda com nossa política de
                privacidade.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
