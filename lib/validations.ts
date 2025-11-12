import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone inválido")
    .optional()
    .or(z.literal("")),
  organization: z
    .string()
    .min(2, "Nome da organização deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo")
    .optional()
    .or(z.literal("")),
  organizationType: z.enum(["empresa", "osc", "igreja", "outro"], {
    required_error: "Selecione o tipo de organização",
  }),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa"),
  recaptchaToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
