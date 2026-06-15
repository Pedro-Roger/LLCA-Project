# Blog Backend — Design Spec

**Date:** 2026-06-14
**Scope:** Backend API + Admin CMS + Frontend público para o sistema de blog em /publicacoes

---

## Objetivo

Criar um sistema de blog completo para o LLCA com:
- API REST em Express (porta 3001)
- Banco de dados MongoDB via Mongoose
- Imagens de capa armazenadas no AWS S3
- Painel de admin React SPA (1-2 usuários, sem cadastro)
- Editor Markdown com preview
- Frontend público integrado à página /publicacoes existente

---

## Arquitetura

```
LLCA-Project/
├── src/                            # Frontend público React (existente)
│   ├── pages/
│   │   ├── Publicacoes.tsx         # expandida: lista + busca + filtros
│   │   └── PostPage.tsx            # nova: /publicacoes/:slug
│   └── components/
│       ├── PostCard.tsx            # card de post para listagem
│       └── RelatedPosts.tsx        # 3 posts relacionados
├── server/
│   ├── index.ts                    # entry point Express, porta 3001
│   ├── db.ts                       # conexão Mongoose
│   ├── s3.ts                       # cliente AWS S3 (@aws-sdk/client-s3)
│   ├── middleware/
│   │   └── auth.ts                 # JWT verify (cookie httpOnly)
│   ├── models/
│   │   ├── Post.ts                 # Mongoose schema do post
│   │   └── AdminUser.ts            # usuários hardcoded via .env
│   └── routes/
│       ├── auth.ts                 # /api/auth/*
│       ├── posts.ts                # /api/posts/* (público)
│       ├── adminPosts.ts           # /api/admin/posts/* (protegido)
│       └── upload.ts               # /api/upload (protegido)
├── admin/                          # SPA de admin (React separado)
│   ├── index.html
│   ├── admin.tsx                   # entry point
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── PostList.tsx
│   │   └── PostEditor.tsx
│   └── vite.admin.config.ts        # build separado → server/public/admin/
└── .env                            # variáveis de ambiente
```

---

## Variáveis de Ambiente

```env
# MongoDB
MONGO_URI=mongodb+srv://...

# JWT
JWT_SECRET=...
JWT_EXPIRES_IN=7d

# Admin (sem cadastro — credentials via env)
ADMIN_EMAIL=altamiro@llca.org.br
ADMIN_PASSWORD_HASH=bcrypt_hash_aqui

# AWS S3
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
AWS_S3_BUCKET=llca-blog-images

# Server
PORT=3001
```

---

## Modelo de Dados

### Post (MongoDB / Mongoose)

```ts
{
  title:         string       // obrigatório
  slug:          string       // único, gerado do título, obrigatório
  excerpt:       string       // trecho para cards (max 300 chars)
  content:       string       // Markdown completo
  coverImageUrl: string       // URL pública do S3 (opcional)
  category:      string       // ex: "Ciência", "Mercado", "Institucional"
  tags:          string[]     // ex: ["microbioma", "agricultura"]
  status:        "draft" | "published"
  publishedAt:   Date | null  // null enquanto rascunho
  createdAt:     Date         // automático
  updatedAt:     Date         // automático
}
```

### AdminUser (sem coleção MongoDB — verificado via .env)

Login valida `email === ADMIN_EMAIL` e `bcrypt.compare(password, ADMIN_PASSWORD_HASH)`. JWT gerado tem payload `{ sub: email, role: "admin" }`.

---

## Rotas da API

### Públicas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/posts` | Lista paginada. Query params: `page`, `limit`, `category`, `tag`, `search` |
| GET | `/api/posts/:slug` | Post completo por slug |
| GET | `/api/posts/related/:slug` | 3 posts relacionados (mesma categoria, exceto o atual) |
| GET | `/api/categories` | Lista de categorias únicas com contagem de posts publicados |

**Resposta de lista (`GET /api/posts`):**
```json
{
  "posts": [...],
  "total": 42,
  "page": 1,
  "totalPages": 5
}
```

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/auth/login` | `{ email, password }` → seta cookie JWT httpOnly |
| POST | `/api/auth/logout` | Limpa cookie |
| GET | `/api/auth/me` | Retorna `{ email }` se autenticado, 401 se não |

### Admin (requer cookie JWT válido)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/admin/posts` | Lista todos os posts (rascunhos + publicados) |
| POST | `/api/admin/posts` | Cria post (status inicial: "draft") |
| PUT | `/api/admin/posts/:id` | Atualiza post |
| DELETE | `/api/admin/posts/:id` | Deleta post |
| PATCH | `/api/admin/posts/:id/publish` | Toggle publicado/rascunho |
| POST | `/api/upload` | Multipart → S3, retorna `{ url }` |

---

## Dev Scripts

```json
"scripts": {
  "dev": "concurrently \"vite --port=3000\" \"tsx watch server/index.ts\"",
  "server:dev": "tsx watch server/index.ts",
  "build": "vite build && vite build --config vite.admin.config.ts",
  "start": "node dist/server/index.js"
}
```

---

## Painel Admin (`/admin`)

SPA React mínima, servida pelo Express como arquivos estáticos em produção. Em dev, roda via Vite na porta 3002.

### Telas

**Login (`/admin/login`)**
- Campo email + senha
- POST `/api/auth/login`
- Redireciona para `/admin/posts` em sucesso

**Lista de Posts (`/admin/posts`)**
- Tabela: título, categoria, status (badge), data de publicação, ações
- Ações: Editar | Publicar/Despublicar | Deletar (com confirmação)
- Botão "Novo Post" → `/admin/posts/new`

**Editor (`/admin/posts/new` e `/admin/posts/:id/edit`)**
- Campo: Título (gera slug automaticamente)
- Campo: Excerpt (textarea, max 300 chars com contador)
- Select: Categoria (texto livre + sugestões das existentes)
- Campo: Tags (input com chips)
- Upload: Imagem de capa → POST `/api/upload` → preview
- Editor Markdown: painel esquerdo (textarea) + painel direito (preview HTML renderizado)
- Botões: "Salvar rascunho" | "Publicar"

---

## Frontend Público

### `Publicacoes.tsx` (expandida)

- Mantém seção de Newsletter existente
- Substitui os placeholders "em breve" por:
  - Grid de `PostCard` com paginação
  - Filtro por categoria (chips horizontais)
  - Campo de busca por texto
- Fetch: `GET /api/posts?page=1&limit=9&category=...&search=...`

### `PostCard.tsx`

```
┌─────────────────────┐
│  [imagem de capa]   │
│  CATEGORIA          │
│  Título do Post     │
│  Excerpt truncado…  │
│  12 jun 2026        │
└─────────────────────┘
```

### `PostPage.tsx` (`/publicacoes/:slug`)

- Fetch: `GET /api/posts/:slug`
- Renderiza Markdown → HTML com `marked` ou `react-markdown`
- Cabeçalho: imagem de capa, categoria, título, data
- Corpo: conteúdo completo
- Rodapé: `RelatedPosts` (3 cards)

---

## Segurança

- JWT em cookie `httpOnly; SameSite=Strict; Secure` (não acessível via JS)
- Senha do admin armazenada apenas como bcrypt hash em variável de ambiente (não no banco)
- Upload validado: apenas `image/jpeg`, `image/png`, `image/webp`, tamanho máximo 5MB
- Rotas admin protegidas por middleware — 401 sem token válido
- CORS configurado para aceitar apenas `localhost:3000` em dev e o domínio de prod

---

## Pacotes Novos

```
dependencies:
  mongoose             # ODM MongoDB
  @aws-sdk/client-s3   # upload S3
  bcryptjs             # hash de senha
  jsonwebtoken         # JWT
  cookie-parser        # parse de cookies
  multer               # multipart upload
  marked               # Markdown → HTML (frontend)
  react-markdown       # renderização Markdown no React
  concurrently         # rodar frontend + backend juntos

devDependencies:
  @types/bcryptjs
  @types/jsonwebtoken
  @types/cookie-parser
  @types/multer
  @types/concurrently
```

---

## Fora do Escopo (V1)

- Comentários nos posts
- Múltiplos admins com roles diferentes
- Busca full-text avançada (MongoDB Atlas Search)
- RSS feed
- SEO meta tags automáticas (pode ser adicionado depois)
