# 🎉 Bem-vindo ao Site da Nexa Social!

**Primeiro acesso? Comece aqui!**

---

## 👋 Olá!

Você acabou de receber o projeto completo do site institucional da **Nexa Social**. Este arquivo vai te guiar nos primeiros passos.

---

## ⚡ Primeiros Passos (3 minutos)

### 1. Abra o Terminal/Prompt de Comando

**Windows:** `Win + R` → digite `cmd` → Enter
**macOS/Linux:** `Cmd + Space` → digite `terminal` → Enter

### 2. Navegue até a pasta do projeto

```bash
cd C:/Users/supak/Desktop/Pags/Pag_Luiza
```

### 3. Instale as dependências

```bash
pnpm install
```

> **Nota:** Se não tiver `pnpm`, use `npm install` ou instale pnpm: `npm install -g pnpm`

### 4. Inicie o servidor

```bash
pnpm dev
```

### 5. Abra no navegador

Acesse: **http://localhost:3000**

**🎉 Pronto! O site está rodando!**

---

## 📖 O que você tem aqui?

✅ Site completo em Next.js + TypeScript
✅ 7 páginas prontas (Home, Áreas, Serviços, Quem Somos, etc)
✅ Design responsivo (mobile, tablet, desktop)
✅ Formulário de contato com validação
✅ SEO otimizado
✅ Paleta de cores da Nexa Social
✅ Componentes reutilizáveis
✅ Animações suaves
✅ Pronto para deploy na Vercel

---

## 🗂️ Estrutura do Projeto

```
Pag_Luiza/
│
├── 📁 app/              # Páginas do site
│   ├── page.tsx        # Home
│   ├── servicos/       # Página de serviços
│   ├── contato/        # Página de contato
│   └── ...
│
├── 📁 components/       # Componentes reutilizáveis
│   ├── navbar.tsx      # Menu superior
│   ├── footer.tsx      # Rodapé
│   └── ...
│
└── 📄 README.md         # Documentação principal
```

---

## 🎯 Próximos Passos

### Para Explorar o Projeto

1. **Veja o site rodando** em http://localhost:3000
2. **Navegue pelas páginas** usando o menu
3. **Teste o formulário** na página de Contato
4. **Veja o código** abrindo a pasta no VS Code

### Para Personalizar

1. **Altere conteúdos** → Leia [CONTEUDO.md](./CONTEUDO.md)
2. **Mude cores** → Veja [QUICKSTART.md](./QUICKSTART.md)
3. **Adicione páginas** → Consulte [MANUTENCAO.md](./MANUTENCAO.md)

### Para Fazer Deploy

1. **Crie conta na Vercel** → https://vercel.com/
2. **Conecte repositório Git** → Import Project
3. **Deploy automático!** → Site no ar em minutos

---

## 📚 Documentação Disponível

Criamos documentação completa para você:

| Arquivo | Para que serve |
|---------|----------------|
| **[INDEX.md](./INDEX.md)** | Índice de toda documentação |
| **[README.md](./README.md)** | Documentação principal completa |
| **[QUICKSTART.md](./QUICKSTART.md)** | Guia rápido de 5 minutos |
| **[INSTALACAO.md](./INSTALACAO.md)** | Guia de instalação detalhado |
| **[CONTEUDO.md](./CONTEUDO.md)** | Todo o conteúdo do site |
| **[ESTRUTURA.md](./ESTRUTURA.md)** | Estrutura de arquivos |
| **[MANUTENCAO.md](./MANUTENCAO.md)** | Como manter o site |
| **[ROADMAP.md](./ROADMAP.md)** | Ideias para o futuro |

**Recomendação:** Leia [INDEX.md](./INDEX.md) para navegar toda a documentação.

---

## 🎨 Personalização Rápida

### Alterar Logo

1. Crie sua logo (PNG transparente, 200x50px)
2. Salve em `public/logo-nexa.png`
3. Edite `components/navbar.tsx`

### Alterar Contatos

1. Abra `components/footer.tsx`
2. Procure por `contato@nexasocial.com.br`
3. Substitua pelo seu email real
4. Faça o mesmo com telefone

### Alterar Cores

1. Abra `tailwind.config.ts`
2. Edite `colors.brand.*`
3. Reinicie `pnpm dev`

**Detalhes:** [QUICKSTART.md](./QUICKSTART.md)

---

## ✅ Checklist Inicial

### Antes de Lançar

- [ ] Substituir placeholders de conteúdo
- [ ] Adicionar logo real
- [ ] Atualizar informações de contato
- [ ] Adicionar foto da fundadora
- [ ] Configurar email no formulário
- [ ] Testar em mobile, tablet e desktop
- [ ] Fazer deploy na Vercel
- [ ] Configurar domínio próprio
- [ ] Adicionar Google Analytics

**Checklist completo:** [README.md](./README.md)

---

## 🔧 Comandos Úteis

```bash
# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Testar build localmente
pnpm build && pnpm start

# Verificar código
pnpm lint

# Limpar cache e reinstalar
rm -rf node_modules .next
pnpm install
```

---

## 🚨 Problemas Comuns

### "pnpm não é reconhecido"

**Solução:** Instale o pnpm
```bash
npm install -g pnpm
```

### "Porta 3000 já está em uso"

**Solução:** Use outra porta
```bash
pnpm dev -p 3001
```

### Estilos não aparecem

**Solução:** Reinicie o servidor
```bash
# Ctrl+C para parar
pnpm dev
```

**Mais soluções:** [MANUTENCAO.md](./MANUTENCAO.md)

---

## 📧 Configurar Formulário de Contato

O formulário já funciona visualmente, mas para enviar emails de verdade:

### Opção 1: SendGrid (Recomendado)

1. Crie conta em https://sendgrid.com/
2. Gere API Key
3. Adicione no arquivo `.env`:
   ```
   SENDGRID_API_KEY=sua_chave_aqui
   ```

### Opção 2: Gmail SMTP

1. Configure no `.env`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=seu_email@gmail.com
   SMTP_PASSWORD=senha_de_app
   ```

**Guia completo:** [README.md](./README.md) - Seção "Formulário de Contato"

---

## 🎓 Aprendendo

### Recursos Úteis

- **Next.js Tutorial:** https://nextjs.org/learn
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev/

### Comunidades

- Discord do Next.js
- Stack Overflow
- Reddit r/nextjs

---

## 💡 Dicas

### Para Iniciantes

1. **Não tenha medo de explorar** - Você pode sempre desfazer mudanças
2. **Teste localmente primeiro** - Sempre rode `pnpm dev` antes de fazer deploy
3. **Use Git** - Commite suas mudanças regularmente
4. **Leia a documentação** - Está tudo documentado nos arquivos .md

### Para Desenvolvedores

1. **TypeScript é seu amigo** - Use os tipos para evitar erros
2. **Componentes reutilizáveis** - Já criamos vários, use-os!
3. **Tailwind > CSS** - Prefira classes Tailwind a CSS customizado
4. **Server Components** - Next.js 14 usa React Server Components por padrão

---

## 🆘 Precisa de Ajuda?

### Ordem de Prioridade

1. **Consulte a documentação** → [INDEX.md](./INDEX.md)
2. **Veja problemas comuns** → [MANUTENCAO.md](./MANUTENCAO.md)
3. **Pesquise no Google** → "Next.js [seu problema]"
4. **Stack Overflow** → https://stackoverflow.com/

### Recursos da Comunidade

- **Next.js Discord:** https://discord.com/invite/nextjs
- **Vercel Support:** https://vercel.com/support
- **GitHub Discussions:** (se aplicável)

---

## 📞 Informações de Contato

**Site:** https://nexasocial.com.br (quando estiver no ar)
**Email:** contato@nexasocial.com.br
**WhatsApp:** (11) 99999-9999

---

## 🗺️ Roadmap Sugerido

### Semana 1: Familiarização
- [ ] Rodar projeto localmente
- [ ] Explorar todas as páginas
- [ ] Ler documentação principal
- [ ] Fazer pequenas alterações de teste

### Semana 2: Personalização
- [ ] Substituir placeholders
- [ ] Adicionar conteúdo real
- [ ] Configurar formulário de email
- [ ] Testar em diferentes dispositivos

### Semana 3: Deploy
- [ ] Criar conta na Vercel
- [ ] Fazer primeiro deploy
- [ ] Configurar domínio
- [ ] Adicionar Analytics

### Semana 4: Otimização
- [ ] Melhorar performance
- [ ] Ajustes de SEO
- [ ] Testes finais
- [ ] Lançamento oficial!

---

## 🎯 Objetivos de Aprendizado

Ao trabalhar neste projeto, você vai aprender:

✅ Next.js 14 (App Router)
✅ TypeScript
✅ Tailwind CSS
✅ React Hooks
✅ Formulários com validação
✅ SEO para sites
✅ Deploy na Vercel
✅ Git & GitHub

---

## 🌟 Próximas Funcionalidades (Opcional)

Ideias para expandir o site no futuro:

- [ ] Blog com artigos sobre gestão social
- [ ] Área de recursos (e-books, whitepapers)
- [ ] Cases de sucesso detalhados
- [ ] Newsletter
- [ ] Dashboard administrativo
- [ ] Multilíngue (EN, ES)

**Lista completa:** [ROADMAP.md](./ROADMAP.md)

---

## 📝 Notas Finais

### Conteúdo Placeholder

Alguns conteúdos são exemplos e devem ser substituídos:

- Biografia da fundadora
- Lista de clientes
- Depoimentos
- Fotos da equipe
- Números de impacto

**Veja lista completa:** [CONTEUDO.md](./CONTEUDO.md) - Seção "Notas de Customização"

### Tecnologias Usadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Hook Form** - Formulários
- **Zod** - Validação

---

## 🎉 Tudo Pronto!

Você agora tem todas as informações necessárias para começar.

**Próximo passo:** Execute `pnpm dev` e explore o site!

**Dúvidas?** Consulte [INDEX.md](./INDEX.md) para navegar toda a documentação.

---

**Desenvolvido com ❤️ para a Nexa Social**

**Slogan:** "Conexões que transformam!"

**Boa sorte e bom desenvolvimento! 🚀**
