# Nexa Social - Site Institucional

Site institucional da Nexa Social desenvolvido com Next.js 14, TypeScript, Tailwind CSS e shadcn/ui.

## 🎯 Sobre o Projeto

Site institucional moderno e responsivo para a Nexa Social, consultoria especializada em gestão social, sustentabilidade e investimento social privado. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web, com foco em acessibilidade, performance e SEO.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Framer Motion** - Animações suaves
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones minimalistas

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- pnpm, npm ou yarn

### Passos

1. Clone ou navegue até o repositório:

```bash
cd C:/Users/supak/Desktop/Pags/Pag_Luiza
```

2. Instale as dependências:

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione suas credenciais:

```env
# Configuração do reCAPTCHA (opcional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_chave_publica_aqui
RECAPTCHA_SECRET_KEY=sua_chave_secreta_aqui

# Configuração de Email (opcional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=seu_email@example.com
SMTP_PASSWORD=sua_senha_aqui
CONTACT_EMAIL=contato@nexasocial.com.br
```

4. Execute o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Estrutura do Projeto

```
.
├── app/                          # App Router do Next.js
│   ├── (site)/                   # Grupo de rotas do site
│   │   └── page.tsx             # Página inicial
│   ├── areas-de-atuacao/        # Áreas de atuação
│   ├── servicos/                # Serviços
│   ├── quem-somos/              # Quem somos
│   ├── diferenciais/            # Diferenciais
│   ├── clientes-depoimentos/    # Clientes e depoimentos
│   ├── contato/                 # Contato (com formulário)
│   ├── layout.tsx               # Layout raiz
│   ├── globals.css              # Estilos globais
│   └── sitemap.ts               # Sitemap XML
├── components/                   # Componentes React
│   ├── ui/                      # Componentes base (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── navbar.tsx               # Navegação principal
│   ├── footer.tsx               # Rodapé
│   ├── hero.tsx                 # Seção hero
│   ├── section.tsx              # Container de seção
│   ├── card.tsx                 # Card reutilizável
│   ├── testimonial.tsx          # Card de depoimento
│   └── cta-button.tsx           # Botão de CTA
├── lib/                         # Utilitários
│   ├── utils.ts                 # Funções utilitárias
│   ├── metadata.ts              # Configuração de SEO
│   └── validations.ts           # Schemas de validação
├── public/                      # Arquivos estáticos
│   ├── opengraph-image.jpg      # Imagem OG (1200x630px)
│   └── robots.txt               # Configuração de crawlers
├── tailwind.config.ts           # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
├── next.config.mjs              # Configuração do Next.js
└── package.json                 # Dependências do projeto
```

## 🎨 Paleta de Cores

O site utiliza a identidade visual da Nexa Social:

- **Midnight Purple**: `#443B60` - Cor primária
- **Deep Purple**: `#432766` - Cor secundária
- **Orange**: `#FFA51F` - Destaque/CTAs
- **White**: `#FFFFFF` - Fundo principal
- **Gray**: `#A2A2A2` - Textos secundários
- **Light Pink**: `#DFD1D5` - Bordas e detalhes

Cores configuradas em `tailwind.config.ts` sob `theme.extend.colors.brand.*`

## 📄 Páginas

### Páginas Implementadas

1. **Home** (`/`) - Página inicial com hero, preview de áreas e diferenciais
2. **Áreas de Atuação** (`/areas-de-atuacao`) - Empresas, OSCs, Igrejas e Integração Setorial
3. **Serviços** (`/servicos`) - Serviços para cada tipo de organização
4. **Quem Somos** (`/quem-somos`) - Missão, visão, valores e fundadora
5. **Diferenciais** (`/diferenciais`) - 6 principais diferenciais da Nexa Social
6. **Clientes & Depoimentos** (`/clientes-depoimentos`) - Lista de clientes e depoimentos
7. **Contato** (`/contato`) - Formulário de contato com validação

### Metadata e SEO

Cada página possui:
- Meta title e description customizados
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- Sitemap XML automático (`/sitemap.xml`)
- robots.txt configurado

## 📧 Formulário de Contato

O formulário de contato implementa:

### Validação

- **React Hook Form** para gerenciamento
- **Zod** para validação de schemas
- Campos obrigatórios: nome, email, tipo de organização, mensagem
- Campos opcionais: telefone, nome da organização

### Server Action

Localizado em `app/contato/actions.ts`, o formulário utiliza Server Actions do Next.js.

**Para implementar o envio real de emails:**

1. Descomente o código de verificação do reCAPTCHA
2. Configure um serviço de email (exemplos abaixo)
3. Adicione as variáveis de ambiente necessárias

#### Exemplo com Nodemailer

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL,
  subject: `Novo contato: ${validatedData.name}`,
  html: `...`,
});
```

#### Exemplo com SendGrid

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: process.env.SMTP_USER,
  subject: `Novo contato: ${validatedData.name}`,
  html: `...`,
});
```

#### Exemplo com Resend

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL,
  subject: `Novo contato: ${validatedData.name}`,
  html: `...`,
});
```

### reCAPTCHA (Opcional)

Para adicionar proteção contra spam:

1. Crie uma conta no [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Escolha reCAPTCHA v2 ou v3
3. Adicione as chaves no `.env`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_chave_publica
   RECAPTCHA_SECRET_KEY=sua_chave_secreta
   ```
4. Descomente o código de verificação em `app/contato/actions.ts`

## 🚀 Deploy na Vercel

### Passos para Deploy

1. Crie uma conta na [Vercel](https://vercel.com)

2. Instale a CLI da Vercel (opcional):

```bash
pnpm install -g vercel
```

3. Faça o deploy:

```bash
vercel
```

Ou conecte seu repositório Git diretamente na interface da Vercel.

### Variáveis de Ambiente na Vercel

Na dashboard da Vercel, vá em **Settings > Environment Variables** e adicione:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (se usar reCAPTCHA)
- `RECAPTCHA_SECRET_KEY` (se usar reCAPTCHA)
- `SMTP_HOST` (se usar email)
- `SMTP_PORT` (se usar email)
- `SMTP_USER` (se usar email)
- `SMTP_PASSWORD` (se usar email)
- `CONTACT_EMAIL` (email de destino)

### Domínio Customizado

1. Vá em **Settings > Domains**
2. Adicione seu domínio (ex: `nexasocial.com.br`)
3. Configure os registros DNS conforme instruções da Vercel

### Exemplo de Configuração DNS

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

## 🎯 Acessibilidade

O site foi desenvolvido seguindo as diretrizes WCAG 2.1 AA:

- ✅ Contraste adequado de cores
- ✅ Navegação por teclado
- ✅ Labels semânticos em formulários
- ✅ ARIA attributes quando necessário
- ✅ Estrutura HTML semântica
- ✅ Textos alternativos (quando aplicável)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Lint (verificação de código)
pnpm lint
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Todos os componentes foram testados em diferentes dispositivos.

## ⚡ Performance

O site foi otimizado para:

- Lazy loading de componentes
- Imagens otimizadas (quando aplicável)
- CSS scoped com Tailwind
- Bundle splitting automático do Next.js
- Server-side rendering (SSR)
- Static generation onde possível

## 🔒 Segurança

- Validação de formulários no cliente e servidor
- Sanitização de inputs
- HTTPS obrigatório em produção
- Headers de segurança configurados
- Proteção contra CSRF (Server Actions)

## 🐛 Troubleshooting

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
pnpm install
```

### Erro de build

```bash
# Limpe o cache do Next.js
rm -rf .next
pnpm build
```

### Problemas com Tailwind

Verifique se o arquivo `tailwind.config.ts` está correto e se os paths em `content` estão configurados.

## 📝 Customização

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    midnight: "#443B60",  // Altere aqui
    purple: "#432766",
    orange: "#FFA51F",
    // ...
  }
}
```

### Adicionar Nova Página

1. Crie pasta em `app/nova-pagina/`
2. Adicione `page.tsx`:

```typescript
import { Hero } from "@/components/hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Nova Página",
  description: "Descrição da página",
});

export default function NovaPaginaPage() {
  return (
    <>
      <Hero title="Nova Página" />
      {/* Conteúdo */}
    </>
  );
}
```

3. Adicione link na navbar em `components/navbar.tsx`

### Alterar Conteúdo

O conteúdo está diretamente nos componentes das páginas. Para facilitar a manutenção, você pode opcionalmente criar arquivos MDX em `/content` ou usar um CMS headless.

## 📞 Suporte

Para dúvidas ou problemas:

- **Email**: contato@nexasocial.com.br
- **WhatsApp**: (11) 99999-9999

## 📄 Licença

Este projeto foi desenvolvido para a Nexa Social. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Nexa Social - Conexões que transformam!**
