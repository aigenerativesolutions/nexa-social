# 📦 Guia de Instalação Completo - Nexa Social

Este guia detalha todo o processo de instalação do projeto do zero.

## 🎯 Pré-requisitos

### Softwares Necessários

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verificar instalação: `node --version`

2. **pnpm** (gerenciador de pacotes recomendado)
   ```bash
   npm install -g pnpm
   ```
   - Verificar instalação: `pnpm --version`

3. **Git** (controle de versão)
   - Download: https://git-scm.com/
   - Verificar instalação: `git --version`

4. **Editor de Código** (recomendado: VS Code)
   - Download: https://code.visualstudio.com/

---

## 🚀 Instalação Passo a Passo

### 1. Navegue até o Projeto

```bash
cd C:/Users/supak/Desktop/Pags/Pag_Luiza
```

### 2. Instale as Dependências

```bash
pnpm install
```

Ou se preferir npm/yarn:

```bash
npm install
# ou
yarn install
```

**Tempo estimado:** 2-5 minutos

### 3. Configure Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

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

### 4. Inicie o Servidor de Desenvolvimento

```bash
pnpm dev
```

**Saída esperada:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Environments: .env

✓ Ready in 2.3s
```

### 5. Abra no Navegador

Acesse: **http://localhost:3000**

---

## 📦 Dependências do Projeto

### Dependências Principais

```json
{
  "next": "^14.2.0",              // Framework React
  "react": "^18.3.0",             // Biblioteca UI
  "react-dom": "^18.3.0",         // React DOM
  "typescript": "^5.4.0"          // TypeScript
}
```

### Formulários e Validação

```json
{
  "react-hook-form": "^7.51.0",   // Gerenciamento de formulários
  "zod": "^3.23.0",                // Validação de schemas
  "@hookform/resolvers": "^3.3.4" // Integração RHF + Zod
}
```

### UI e Estilização

```json
{
  "tailwindcss": "^3.4.0",                // Framework CSS
  "tailwindcss-animate": "^1.0.7",        // Animações Tailwind
  "framer-motion": "^11.0.0",             // Animações React
  "lucide-react": "^0.376.0",             // Ícones
  "class-variance-authority": "^0.7.0",   // Variantes de classe
  "clsx": "^2.1.0",                       // Utilitário de classes
  "tailwind-merge": "^2.3.0"              // Merge de classes
}
```

### Ferramentas de Desenvolvimento

```json
{
  "@types/node": "^20.12.0",
  "@types/react": "^18.3.0",
  "@types/react-dom": "^18.3.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0",
  "eslint": "^8.57.0",
  "eslint-config-next": "^14.2.0"
}
```

---

## 🔧 Instalação de Dependências Adicionais (Opcionais)

### Para Envio de Emails

**Opção 1: SendGrid**
```bash
pnpm add @sendgrid/mail
```

**Opção 2: Resend**
```bash
pnpm add resend
```

**Opção 3: Nodemailer**
```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

### Para Analytics

**Google Analytics**
```bash
pnpm add @next/third-parties
```

**Vercel Analytics**
```bash
pnpm add @vercel/analytics
```

### Para CMS Headless (Futuro)

**Contentful**
```bash
pnpm add contentful
```

**Sanity**
```bash
pnpm add @sanity/client next-sanity
```

**Strapi**
```bash
# Via API REST - não requer instalação
```

### Para Testes (Futuro)

```bash
# Jest + React Testing Library
pnpm add -D jest @testing-library/react @testing-library/jest-dom

# Playwright (E2E)
pnpm add -D @playwright/test
```

---

## 🎨 Extensões VS Code Recomendadas

Crie `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",      // Tailwind IntelliSense
    "dbaeumer.vscode-eslint",         // ESLint
    "esbenp.prettier-vscode",         // Prettier
    "ms-vscode.vscode-typescript-next" // TypeScript
  ]
}
```

---

## 🔍 Verificação da Instalação

### Teste o Build de Produção

```bash
pnpm build
```

**Saída esperada:**
```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    142 B          87.2 kB
├ ○ /areas-de-atuacao                   142 B          87.2 kB
├ ○ /servicos                           142 B          87.2 kB
...
```

### Teste o Build Localmente

```bash
pnpm build
pnpm start
```

Acesse: http://localhost:3000

---

## 🌐 Configuração de DNS (Para Produção)

### Registrar Domínio

1. Escolha registrar (ex: Registro.br, GoDaddy, Namecheap)
2. Registre `nexasocial.com.br`
3. Configure nameservers da Vercel ou configure DNS manualmente

### Configurar DNS

**Opção 1: Nameservers da Vercel** (Recomendado)
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Opção 2: Registros DNS Manuais**
```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

---

## 📧 Configuração de Email

### Gmail (SMTP)

1. Ative autenticação de 2 fatores
2. Gere senha de app: https://myaccount.google.com/apppasswords
3. Configure no `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=senha_de_app_gerada
```

### SendGrid

1. Crie conta: https://sendgrid.com/
2. Gere API Key
3. Configure no `.env`:

```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

### Resend

1. Crie conta: https://resend.com/
2. Gere API Key
3. Configure no `.env`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## 🔐 Configuração do reCAPTCHA

### Google reCAPTCHA v3

1. Acesse: https://www.google.com/recaptcha/admin
2. Registre novo site
3. Escolha reCAPTCHA v3
4. Adicione domínios:
   - `localhost` (para dev)
   - `nexasocial.com.br` (produção)
5. Copie as chaves
6. Configure no `.env`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

7. Descomente código em `app/contato/actions.ts`

---

## 🚀 Deploy na Vercel

### Via CLI

```bash
# Instale a CLI
pnpm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Via GitHub

1. Push código para GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/nexa-social.git
git push -u origin main
```

2. Acesse: https://vercel.com/
3. "Add New Project"
4. Importe repositório
5. Configure variáveis de ambiente
6. Deploy!

---

## ✅ Checklist Pós-Instalação

### Desenvolvimento
- [ ] Node.js instalado e funcionando
- [ ] Dependências instaladas (`node_modules` criado)
- [ ] Servidor dev rodando em localhost:3000
- [ ] Todas as páginas acessíveis
- [ ] Formulário de contato visível
- [ ] Navegação funcionando
- [ ] Estilos carregando corretamente

### Configuração
- [ ] Arquivo `.env` criado
- [ ] Variáveis de ambiente configuradas
- [ ] Git inicializado (se aplicável)
- [ ] Editor de código configurado

### Testes
- [ ] Build de produção executado com sucesso
- [ ] Sem erros no console
- [ ] Sem warnings críticos
- [ ] Todas as rotas acessíveis
- [ ] Responsividade testada

### Produção (quando aplicável)
- [ ] Deploy na Vercel realizado
- [ ] Domínio configurado
- [ ] SSL/HTTPS ativo
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Formulário de contato testado em produção
- [ ] Analytics configurado

---

## 🐛 Problemas Comuns na Instalação

### "pnpm: command not found"

```bash
npm install -g pnpm
```

### "Error: Cannot find module..."

```bash
rm -rf node_modules package-lock.json
pnpm install
```

### "Port 3000 is already in use"

```bash
# Use outra porta
pnpm dev -p 3001

# Ou mate o processo na porta 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID [numero_do_processo] /F

# macOS/Linux:
lsof -ti:3000 | xargs kill
```

### Build falha com erro de TypeScript

```bash
# Limpe o cache
rm -rf .next
pnpm build
```

### Tailwind CSS não funciona

```bash
# Reinstale dependências do Tailwind
pnpm add -D tailwindcss postcss autoprefixer
pnpm build
```

---

## 📚 Recursos Adicionais

### Documentação
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

### Tutoriais
- [Next.js Learn](https://nextjs.org/learn)
- [Tailwind CSS Crash Course](https://www.youtube.com/results?search_query=tailwind+css+crash+course)

### Comunidades
- [Next.js Discord](https://discord.com/invite/nextjs)
- [Tailwind CSS Discord](https://discord.com/invite/7NF8GNe)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎓 Próximos Passos

Após instalação bem-sucedida:

1. Leia o [QUICKSTART.md](./QUICKSTART.md) para início rápido
2. Consulte [README.md](./README.md) para documentação completa
3. Veja [CONTEUDO.md](./CONTEUDO.md) para entender o conteúdo
4. Siga [MANUTENCAO.md](./MANUTENCAO.md) para manutenção regular
5. Planeje melhorias com [ROADMAP.md](./ROADMAP.md)

---

**Instalação concluída! 🎉**

Agora você está pronto para desenvolver e customizar o site da Nexa Social.

Para suporte, consulte a documentação ou entre em contato com a equipe de desenvolvimento.
