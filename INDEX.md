# 📚 Índice de Documentação - Nexa Social

Guia centralizado para toda a documentação do projeto.

---

## 🚀 Início Rápido

**Novo no projeto? Comece aqui:**

1. **[INSTALACAO.md](./INSTALACAO.md)** - Instale todas as dependências
2. **[QUICKSTART.md](./QUICKSTART.md)** - Execute o projeto em 5 minutos
3. **[README.md](./README.md)** - Entenda o projeto completo

---

## 📖 Documentação Completa

### 🎯 Essencial (Leia Primeiro)

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[README.md](./README.md)** | Documentação principal completa | Visão geral do projeto |
| **[QUICKSTART.md](./QUICKSTART.md)** | Guia rápido em 5 minutos | Primeiro uso |
| **[INSTALACAO.md](./INSTALACAO.md)** | Instalação passo a passo | Configurar ambiente |

### 📝 Referência

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[CONTEUDO.md](./CONTEUDO.md)** | Todo o conteúdo do site | Editar textos e conteúdo |
| **[ESTRUTURA.md](./ESTRUTURA.md)** | Estrutura de arquivos | Entender organização |
| **[MANUTENCAO.md](./MANUTENCAO.md)** | Guia de manutenção | Atualizar e manter |

### 🗺️ Planejamento

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[ROADMAP.md](./ROADMAP.md)** | Melhorias futuras | Planejar próximos passos |

---

## 🎯 Encontre Rapidamente

### "Como faço para..."

#### Começar o Projeto
→ **[INSTALACAO.md](./INSTALACAO.md)** - Seção "Instalação Passo a Passo"

#### Rodar Localmente
→ **[QUICKSTART.md](./QUICKSTART.md)** - Seção "Início Rápido"

#### Alterar Conteúdo
→ **[CONTEUDO.md](./CONTEUDO.md)** - Conteúdo de cada página
→ **[MANUTENCAO.md](./MANUTENCAO.md)** - Seção "Como Atualizar Conteúdo"

#### Configurar Formulário de Contato
→ **[README.md](./README.md)** - Seção "Formulário de Contato"
→ **[INSTALACAO.md](./INSTALACAO.md)** - Seção "Configuração de Email"

#### Fazer Deploy
→ **[README.md](./README.md)** - Seção "Deploy na Vercel"
→ **[QUICKSTART.md](./QUICKSTART.md)** - Seção "Deploy Rápido"

#### Adicionar Nova Página
→ **[QUICKSTART.md](./QUICKSTART.md)** - Seção "Adicionar Nova Página"
→ **[MANUTENCAO.md](./MANUTENCAO.md)** - Exemplo prático

#### Alterar Cores
→ **[QUICKSTART.md](./QUICKSTART.md)** - Seção "Cores da Marca"
→ **[MANUTENCAO.md](./MANUTENCAO.md)** - Seção "Alterar Cores do Site"

#### Adicionar Imagens
→ **[MANUTENCAO.md](./MANUTENCAO.md)** - Seção "Como Atualizar Imagens"

#### Entender Estrutura
→ **[ESTRUTURA.md](./ESTRUTURA.md)** - Árvore completa de arquivos

#### Planejar Melhorias
→ **[ROADMAP.md](./ROADMAP.md)** - Lista de funcionalidades futuras

---

## 📁 Estrutura de Arquivos (Resumo)

```
Pag_Luiza/
├── 📁 app/                    # Páginas do site
│   ├── page.tsx              # Home
│   ├── areas-de-atuacao/     # Áreas de atuação
│   ├── servicos/             # Serviços
│   ├── quem-somos/           # Quem somos
│   ├── diferenciais/         # Diferenciais
│   ├── clientes-depoimentos/ # Clientes
│   └── contato/              # Contato
│
├── 📁 components/             # Componentes React
│   ├── ui/                   # Componentes base
│   ├── navbar.tsx            # Menu
│   ├── footer.tsx            # Rodapé
│   └── ...
│
├── 📁 lib/                    # Utilitários
│   ├── metadata.ts           # SEO
│   ├── validations.ts        # Validação
│   └── utils.ts              # Helpers
│
├── 📁 public/                 # Arquivos estáticos
│
└── 📄 [arquivos de config]    # Configurações
```

**Detalhes completos:** [ESTRUTURA.md](./ESTRUTURA.md)

---

## 🎨 Branding e Design

### Paleta de Cores

```
Midnight Purple: #443B60
Deep Purple:     #432766
Orange:          #FFA51F
White:           #FFFFFF
Gray:            #A2A2A2
Light Pink:      #DFD1D5
```

### Slogan

**"Conexões que transformam!"**

**Mais informações:** [CONTEUDO.md](./CONTEUDO.md)

---

## 🔧 Comandos Principais

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Rodar build de produção
pnpm start

# Lint (verificar código)
pnpm lint

# Deploy na Vercel
vercel
```

**Mais comandos:** [QUICKSTART.md](./QUICKSTART.md)

---

## 📞 Suporte e Contato

### Problemas Técnicos

1. Consulte [MANUTENCAO.md](./MANUTENCAO.md) - Seção "Resolução de Problemas"
2. Consulte [INSTALACAO.md](./INSTALACAO.md) - Seção "Problemas Comuns"
3. Verifique GitHub Issues (se aplicável)

### Dúvidas sobre Conteúdo

→ **[CONTEUDO.md](./CONTEUDO.md)**

### Planejamento de Novas Funcionalidades

→ **[ROADMAP.md](./ROADMAP.md)**

---

## 📊 Páginas do Site

| Rota | Título | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial com preview |
| `/areas-de-atuacao` | Áreas de Atuação | 4 áreas principais |
| `/servicos` | Serviços | Serviços por tipo |
| `/quem-somos` | Quem Somos | Sobre a empresa |
| `/diferenciais` | Diferenciais | Vantagens competitivas |
| `/clientes-depoimentos` | Clientes | Lista e depoimentos |
| `/contato` | Contato | Formulário |

**Conteúdo detalhado:** [CONTEUDO.md](./CONTEUDO.md)

---

## 🗺️ Roadmap de Prioridades

### ✅ Implementado

- [x] Estrutura base Next.js + TypeScript
- [x] Todas as 7 páginas principais
- [x] Componentes reutilizáveis
- [x] Formulário de contato com validação
- [x] SEO e metadata
- [x] Design responsivo
- [x] Paleta de cores da marca

### 🔥 Prioridade Alta

- [ ] Conteúdo real (substituir placeholders)
- [ ] Envio de email funcional
- [ ] reCAPTCHA v3
- [ ] Google Analytics
- [ ] Logo profissional

### 📅 Próximas Fases

- [ ] Blog/Artigos
- [ ] Área de recursos (e-books, whitepapers)
- [ ] Cases de sucesso detalhados
- [ ] Dashboard administrativo

**Roadmap completo:** [ROADMAP.md](./ROADMAP.md)

---

## 🎓 Para Desenvolvedores

### Arquitetura

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** shadcn/ui + custom
- **Animações:** Framer Motion
- **Formulários:** React Hook Form + Zod

### Padrões de Código

- Componentes funcionais com hooks
- TypeScript strict mode
- ESLint + Prettier
- Commits convencionais (recomendado)

**Detalhes técnicos:** [ESTRUTURA.md](./ESTRUTURA.md)

---

## 📚 Recursos Externos

### Documentação Oficial

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)

### Ferramentas

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google Analytics](https://analytics.google.com/)
- [Google Search Console](https://search.google.com/search-console)

---

## ✅ Checklists

### Checklist de Deploy

- [ ] Conteúdo placeholder substituído
- [ ] Variáveis de ambiente configuradas
- [ ] Formulário testado
- [ ] Build executado com sucesso
- [ ] Deploy na Vercel realizado
- [ ] Domínio configurado
- [ ] SSL/HTTPS verificado
- [ ] Analytics instalado

**Checklist completo:** [README.md](./README.md)

### Checklist de Manutenção

- [ ] Verificar formulários (diário)
- [ ] Analytics (semanal)
- [ ] Atualizar dependências (mensal)
- [ ] Revisar conteúdo (mensal)
- [ ] SEO analysis (trimestral)

**Checklist completo:** [MANUTENCAO.md](./MANUTENCAO.md)

---

## 🔍 Índice Alfabético

- **A**
  - Acessibilidade → [README.md](./README.md#acessibilidade)
  - Analytics → [ROADMAP.md](./ROADMAP.md#analytics-avançado)
  - Arquitetura → [ESTRUTURA.md](./ESTRUTURA.md)

- **C**
  - Componentes → [ESTRUTURA.md](./ESTRUTURA.md#componentes)
  - Configuração → [INSTALACAO.md](./INSTALACAO.md)
  - Conteúdo → [CONTEUDO.md](./CONTEUDO.md)
  - Cores → [QUICKSTART.md](./QUICKSTART.md#cores-da-marca)

- **D**
  - Deploy → [README.md](./README.md#deploy-na-vercel)
  - Dependências → [INSTALACAO.md](./INSTALACAO.md#dependências-do-projeto)

- **E**
  - Email → [INSTALACAO.md](./INSTALACAO.md#configuração-de-email)
  - Estrutura → [ESTRUTURA.md](./ESTRUTURA.md)

- **F**
  - Formulário → [README.md](./README.md#formulário-de-contato)

- **I**
  - Instalação → [INSTALACAO.md](./INSTALACAO.md)

- **M**
  - Manutenção → [MANUTENCAO.md](./MANUTENCAO.md)
  - Metadata → [README.md](./README.md#metadata-e-seo)

- **P**
  - Páginas → [CONTEUDO.md](./CONTEUDO.md#páginas-e-conteúdo)
  - Performance → [ROADMAP.md](./ROADMAP.md#performance)

- **R**
  - reCAPTCHA → [INSTALACAO.md](./INSTALACAO.md#configuração-do-recaptcha)
  - Roadmap → [ROADMAP.md](./ROADMAP.md)

- **S**
  - SEO → [README.md](./README.md#metadata-e-seo)

- **T**
  - Troubleshooting → [MANUTENCAO.md](./MANUTENCAO.md#resolução-de-problemas)

---

## 🎯 Perguntas Frequentes (FAQ)

### Como instalo o projeto?
→ [INSTALACAO.md](./INSTALACAO.md)

### Como faço para editar o conteúdo?
→ [MANUTENCAO.md](./MANUTENCAO.md) - Seção "Como Atualizar Conteúdo"

### Como adiciono uma nova página?
→ [QUICKSTART.md](./QUICKSTART.md) - Seção "Adicionar Nova Página"

### Como funciona o formulário de contato?
→ [README.md](./README.md) - Seção "Formulário de Contato"

### Onde estão as cores da marca?
→ [QUICKSTART.md](./QUICKSTART.md) - Seção "Cores da Marca"

### Como faço deploy?
→ [README.md](./README.md) - Seção "Deploy na Vercel"

### Quais são as próximas funcionalidades?
→ [ROADMAP.md](./ROADMAP.md)

---

## 📝 Contribuindo

Se você for contribuir para o projeto:

1. Leia [ESTRUTURA.md](./ESTRUTURA.md) para entender a organização
2. Siga as convenções de código em [ESTRUTURA.md](./ESTRUTURA.md#convenções-de-código)
3. Teste suas mudanças localmente
4. Crie commits descritivos
5. Abra Pull Request (se aplicável)

---

## 📄 Licença

Este projeto foi desenvolvido para a Nexa Social. Todos os direitos reservados.

---

## 🚀 Links Rápidos

- **[🏠 Home do Projeto](./README.md)**
- **[⚡ Início Rápido](./QUICKSTART.md)**
- **[📦 Instalação](./INSTALACAO.md)**
- **[📝 Conteúdo](./CONTEUDO.md)**
- **[🗂️ Estrutura](./ESTRUTURA.md)**
- **[🔧 Manutenção](./MANUTENCAO.md)**
- **[🗺️ Roadmap](./ROADMAP.md)**

---

**Desenvolvido com ❤️ para a Nexa Social - Conexões que transformam!**
