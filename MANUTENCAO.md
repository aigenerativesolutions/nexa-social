# 🔧 Guia de Manutenção - Nexa Social

Instruções para manutenção e atualização do site.

## 📝 Tarefas de Manutenção Regular

### Diárias
- [ ] Verificar formulários de contato
- [ ] Responder mensagens recebidas
- [ ] Monitorar erros (Vercel Dashboard)

### Semanais
- [ ] Verificar analytics (Google Analytics)
- [ ] Revisar performance do site
- [ ] Backup de dados (se aplicável)
- [ ] Verificar uptime

### Mensais
- [ ] Atualizar dependências (`pnpm update`)
- [ ] Revisar e atualizar conteúdo
- [ ] Análise de SEO (Google Search Console)
- [ ] Verificar links quebrados
- [ ] Revisar depoimentos de clientes

### Trimestrais
- [ ] Atualizar fotos e imagens
- [ ] Revisar estratégia de SEO
- [ ] Análise de concorrência
- [ ] Atualizar cases de sucesso
- [ ] Revisar design e UX

---

## 🔄 Como Atualizar Conteúdo

### Alterar Texto de uma Página

1. Localize o arquivo da página em `app/[nome-da-pagina]/page.tsx`
2. Edite o conteúdo diretamente no componente
3. Salve o arquivo
4. Verifique no navegador (dev server recarrega automaticamente)

**Exemplo:**
```typescript
// app/quem-somos/page.tsx
<Hero
  title="Novo Título Aqui"  // Edite aqui
  description="Nova descrição"  // E aqui
/>
```

### Adicionar Novo Depoimento

1. Abra `app/clientes-depoimentos/page.tsx`
2. Adicione no array `depoimentos`:

```typescript
const depoimentos = [
  // ... depoimentos existentes
  {
    quote: "Novo depoimento aqui...",
    author: "Nome do Cliente",
    role: "Cargo",
    company: "Empresa",
  },
];
```

### Adicionar Novo Serviço

1. Abra `app/servicos/page.tsx`
2. Adicione no array correspondente:

```typescript
const servicosEmpresas = [
  // ... serviços existentes
  "Novo serviço aqui",
];
```

### Alterar Informações de Contato

**E-mail:**
```typescript
// components/footer.tsx e app/contato/page.tsx
// Procure por: contato@nexasocial.com.br
// Substitua pelo novo email
```

**Telefone:**
```typescript
// components/footer.tsx e app/contato/page.tsx
// Procure por: (11) 99999-9999
// Substitua pelo novo telefone
```

**WhatsApp:**
```typescript
// Procure por: https://wa.me/5511999999999
// Altere o número (com código do país e DDD)
```

---

## 🖼️ Como Atualizar Imagens

### Logo da Nexa Social

1. Crie a imagem (PNG transparente, recomendado 200x50px)
2. Salve em `public/logo-nexa-social.png`
3. Atualize nos componentes:

```typescript
// components/navbar.tsx
<Image
  src="/logo-nexa-social.png"
  alt="Nexa Social"
  width={200}
  height={50}
/>
```

### Foto da Fundadora

1. Prepare a imagem (JPG/PNG, recomendado 800x800px)
2. Salve em `public/fundadora.jpg`
3. Atualize em `app/quem-somos/page.tsx`:

```typescript
<Image
  src="/fundadora.jpg"
  alt="Nome da Fundadora"
  width={800}
  height={800}
/>
```

### Imagem OpenGraph (Compartilhamento Social)

1. Crie imagem 1200x630px
2. Substitua `public/opengraph-image.jpg`
3. Teste em: https://www.opengraph.xyz/

---

## 🚀 Como Fazer Deploy

### Deploy Automático (Recomendado)

Se conectado ao GitHub/GitLab:

```bash
# 1. Faça commit das alterações
git add .
git commit -m "Atualização de conteúdo"

# 2. Push para o repositório
git push origin main

# 3. Vercel faz deploy automático!
```

### Deploy Manual

```bash
# 1. Build local
pnpm build

# 2. Deploy via CLI
vercel --prod
```

---

## 🔧 Atualizar Dependências

### Verificar Atualizações Disponíveis

```bash
pnpm outdated
```

### Atualizar Todas as Dependências

```bash
pnpm update
```

### Atualizar Dependência Específica

```bash
pnpm update next
pnpm update react react-dom
```

### Atualizar para Versão Específica

```bash
pnpm add next@14.2.0
```

**⚠️ Importante:** Sempre teste após atualizar dependências!

```bash
pnpm build
pnpm start
```

---

## 🐛 Resolução de Problemas

### Site não carrega no localhost

```bash
# Verifique se a porta 3000 está ocupada
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # macOS/Linux

# Use outra porta
pnpm dev -p 3001
```

### Erro de build

```bash
# Limpe o cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### Formulário não envia

1. Verifique o console do navegador (F12)
2. Verifique logs da Vercel
3. Confirme variáveis de ambiente configuradas
4. Teste localmente primeiro

### Estilos não aparecem

```bash
# Reconstrua o Tailwind
pnpm dev
# Ctrl+C para parar
# pnpm dev para reiniciar
```

### Erro 404 em produção

1. Verifique se fez build antes do deploy
2. Confirme que a rota existe em `app/`
3. Limpe cache da Vercel

---

## 📊 Monitoramento

### Google Analytics

1. Acesse: https://analytics.google.com
2. Selecione a propriedade da Nexa Social
3. Veja relatórios em tempo real

### Vercel Analytics

1. Acesse: https://vercel.com/dashboard
2. Selecione o projeto
3. Clique em "Analytics"

### Google Search Console

1. Acesse: https://search.google.com/search-console
2. Verifique desempenho de busca
3. Corrija erros de rastreamento

---

## 🔐 Segurança

### Atualizar Variáveis de Ambiente

1. Acesse Vercel Dashboard
2. Vá em Settings > Environment Variables
3. Edite ou adicione variáveis
4. Redeploy o projeto

### Revisar Logs de Erros

```bash
# Via CLI
vercel logs [deployment-url]
```

Ou no Dashboard da Vercel: Deployments > [Selecione] > Logs

### Backup de Código

```bash
# Clone o repositório regularmente
git clone [url-do-repositorio] backup-nexa-social-$(date +%Y%m%d)
```

---

## 📈 SEO

### Atualizar Sitemap

O sitemap é gerado automaticamente em `app/sitemap.ts`.

Para adicionar nova página:

```typescript
{
  url: `${baseUrl}/nova-pagina`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}
```

### Submeter ao Google

```bash
# Submeter sitemap manualmente
https://www.google.com/ping?sitemap=https://nexasocial.com.br/sitemap.xml
```

### Verificar Meta Tags

Use ferramentas:
- https://metatags.io/
- https://cards-dev.twitter.com/validator
- https://developers.facebook.com/tools/debug/

---

## 📧 Email Marketing (Futuro)

Quando implementar newsletter:

### Adicionar Inscritos Manualmente

```typescript
// lib/newsletter.ts
export async function addSubscriber(email: string) {
  // Integração com Mailchimp/ConvertKit
}
```

### Enviar Campanhas

1. Acesse plataforma de email (Mailchimp, etc)
2. Crie nova campanha
3. Importe lista de inscritos
4. Agende envio

---

## 🎨 Design

### Alterar Cores do Site

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

Depois, reinicie o dev server.

### Adicionar Fontes Customizadas

```typescript
// app/layout.tsx
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
```

---

## 🔄 Workflow Recomendado

### Para Alterações Pequenas (Conteúdo)

1. Edite o arquivo diretamente
2. Commit e push
3. Deploy automático

### Para Alterações Médias (Componentes)

1. Crie branch: `git checkout -b feature/nova-funcionalidade`
2. Faça as alterações
3. Teste localmente
4. Commit e push
5. Abra Pull Request
6. Merge após revisão

### Para Alterações Grandes (Arquitetura)

1. Planeje as mudanças
2. Crie branch
3. Implemente em etapas
4. Teste extensivamente
5. Code review
6. Deploy em staging primeiro
7. Deploy em produção

---

## 📞 Suporte Técnico

### Recursos Úteis

- **Documentação Next.js:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Vercel Support:** https://vercel.com/support
- **Stack Overflow:** https://stackoverflow.com/questions/tagged/next.js

### Contato de Emergência

Para problemas críticos:
1. Acesse Vercel Dashboard
2. Rollback para versão anterior
3. Investigue o problema localmente
4. Corrija e redeploy

---

## ✅ Checklist de Manutenção Mensal

- [ ] Atualizar dependências (`pnpm update`)
- [ ] Verificar links quebrados
- [ ] Revisar performance (Lighthouse)
- [ ] Atualizar conteúdo desatualizado
- [ ] Backup de código
- [ ] Análise de analytics
- [ ] Testar formulário de contato
- [ ] Verificar SSL/certificado
- [ ] Revisar logs de erro
- [ ] Atualizar casos de sucesso

---

**Última atualização:** 2025

Para dúvidas específicas sobre manutenção, consulte o [README.md](./README.md) principal.
