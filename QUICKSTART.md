# 🚀 Guia Rápido - Nexa Social

Guia rápido para rodar o projeto em menos de 5 minutos.

## ⚡ Início Rápido

```bash
# 1. Navegue até a pasta do projeto
cd C:/Users/supak/Desktop/Pags/Pag_Luiza

# 2. Instale as dependências
pnpm install
# ou npm install
# ou yarn install

# 3. Execute o servidor de desenvolvimento
pnpm dev
# ou npm run dev
# ou yarn dev

# 4. Abra no navegador
# http://localhost:3000
```

## 📁 Estrutura Simplificada

```
app/                    # Páginas do site
├── page.tsx           # Home
├── areas-de-atuacao/  # Áreas de Atuação
├── servicos/          # Serviços
├── quem-somos/        # Quem Somos
├── diferenciais/      # Diferenciais
├── clientes-depoimentos/  # Clientes
└── contato/           # Contato

components/            # Componentes reutilizáveis
├── navbar.tsx        # Menu de navegação
├── footer.tsx        # Rodapé
└── ui/               # Componentes base

lib/                  # Utilitários
├── metadata.ts       # SEO
└── validations.ts    # Validação de formulários
```

## 🎨 Cores da Marca

```typescript
// Use em seus componentes
className="bg-brand-purple"     // #432766
className="bg-brand-orange"     // #FFA51F
className="text-brand-midnight" // #443B60
className="border-brand-pink"   // #DFD1D5
```

## 📝 Alterações Comuns

### Alterar Conteúdo de uma Página

```typescript
// app/quem-somos/page.tsx
export default function QuemSomosPage() {
  return (
    <>
      <Hero
        title="Novo Título Aqui"
        description="Nova descrição aqui"
      />
      {/* Resto do conteúdo */}
    </>
  );
}
```

### Adicionar Nova Página

```bash
# 1. Crie a pasta
mkdir app/nova-pagina

# 2. Crie o arquivo page.tsx
# app/nova-pagina/page.tsx
```

```typescript
import { Hero } from "@/components/hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Nova Página",
  description: "Descrição da nova página",
});

export default function NovaPaginaPage() {
  return (
    <>
      <Hero title="Nova Página" />
      {/* Seu conteúdo aqui */}
    </>
  );
}
```

### Adicionar Link no Menu

```typescript
// components/navbar.tsx
const navItems = [
  { href: "/", label: "Início" },
  { href: "/nova-pagina", label: "Nova Página" }, // Adicione aqui
  // ... outros links
];
```

### Alterar Informações de Contato

```typescript
// components/footer.tsx
// Procure por:
- href="mailto:contato@nexasocial.com.br"
- href="https://wa.me/5511999999999"

// E altere para seus dados reais
```

## 🚀 Deploy Rápido na Vercel

```bash
# 1. Instale a CLI da Vercel
pnpm install -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Siga as instruções no terminal
```

Ou use a interface web:
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório Git
4. Deploy automático!

## 🔧 Comandos Úteis

```bash
# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Rodar build de produção localmente
pnpm build && pnpm start

# Verificar erros de código
pnpm lint

# Limpar cache e reinstalar
rm -rf node_modules .next
pnpm install
```

## 📧 Configurar Formulário de Contato

### Opção 1: SendGrid (Recomendado)

```bash
# 1. Instale o pacote
pnpm add @sendgrid/mail

# 2. Configure no .env
SENDGRID_API_KEY=sua_chave_aqui
CONTACT_EMAIL=contato@nexasocial.com.br
```

### Opção 2: Resend (Moderno)

```bash
# 1. Instale o pacote
pnpm add resend

# 2. Configure no .env
RESEND_API_KEY=sua_chave_aqui
CONTACT_EMAIL=contato@nexasocial.com.br
```

### Opção 3: SMTP Tradicional

```bash
# 1. Instale o pacote
pnpm add nodemailer

# 2. Configure no .env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_app
CONTACT_EMAIL=contato@nexasocial.com.br
```

Depois, edite `app/contato/actions.ts` e descomente o código de envio de email.

## 🎯 Checklist Antes do Deploy

- [ ] Alterar conteúdo placeholder (biografia, clientes, depoimentos)
- [ ] Atualizar informações de contato reais
- [ ] Adicionar logo da Nexa Social
- [ ] Adicionar foto da fundadora
- [ ] Substituir imagem OpenGraph (`public/opengraph-image.jpg`)
- [ ] Configurar variáveis de ambiente no .env
- [ ] Testar formulário de contato
- [ ] Configurar domínio customizado
- [ ] Adicionar Google Analytics (opcional)
- [ ] Testar responsividade em mobile

## 📱 Links Úteis

- **Documentação Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev/icons/
- **Vercel Deploy:** https://vercel.com/docs

## 🆘 Problemas Comuns

### "Module not found"
```bash
pnpm install
```

### "Port 3000 already in use"
```bash
# Mude a porta
pnpm dev -p 3001
```

### Erro de build
```bash
rm -rf .next
pnpm build
```

### Tailwind não funciona
```bash
# Verifique se está instalado
pnpm add -D tailwindcss postcss autoprefixer
```

---

**Pronto! Agora você está preparado para desenvolver o site da Nexa Social.**

Para mais detalhes, consulte o [README.md](./README.md) completo.
