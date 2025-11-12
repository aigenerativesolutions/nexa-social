"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validar dados
    const validatedData = contactFormSchema.parse(data);

    // TODO: Implementar verificação do reCAPTCHA
    // if (validatedData.recaptchaToken) {
    //   const recaptchaResponse = await fetch(
    //     "https://www.google.com/recaptcha/api/siteverify",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.recaptchaToken}`,
    //     }
    //   );
    //   const recaptchaResult = await recaptchaResponse.json();
    //   if (!recaptchaResult.success) {
    //     return { success: false, error: "Erro na verificação reCAPTCHA" };
    //   }
    // }

    // TODO: Implementar envio de email
    // Exemplo usando nodemailer ou serviço de email
    // const emailConfig = {
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Novo contato: ${validatedData.name}`,
    //   html: `
    //     <h2>Novo contato do site</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>E-mail:</strong> ${validatedData.email}</p>
    //     <p><strong>Telefone:</strong> ${validatedData.phone || "Não informado"}</p>
    //     <p><strong>Organização:</strong> ${validatedData.organization || "Não informada"}</p>
    //     <p><strong>Tipo:</strong> ${validatedData.organizationType}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // };

    // Simulação de envio (remover em produção)
    console.log("📧 Dados do formulário:", validatedData);

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Retornar sucesso
    return {
      success: true,
      message:
        "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    };
  } catch (error) {
    console.error("Erro ao processar formulário:", error);

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message || "Erro ao enviar mensagem. Tente novamente.",
      };
    }

    return {
      success: false,
      error: "Erro ao enviar mensagem. Tente novamente.",
    };
  }
}
