# 💰 FinCheck API

Uma API REST moderna para controle financeiro pessoal desenvolvida com NestJS, Prisma e PostgreSQL.

## 📋 Sobre o Projeto

O FinCheck API é um sistema completo de gestão financeira pessoal que permite aos usuários:

- 👤 **Gerenciar perfil de usuário** com autenticação segura
- 🏦 **Criar e gerenciar contas bancárias** (corrente, investimento, dinheiro)
- 📂 **Categorizar transações** com ícones personalizados
- 💸 **Registrar receitas e despesas** com controle detalhado
- 📊 **Acompanhar saldo e movimentações** em tempo real

## 🛠️ Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework Node.js moderno e escalável
- **[Prisma ORM](https://prisma.io/)** - ORM type-safe para TypeScript
- **[PostgreSQL](https://postgresql.org/)** - Banco de dados relacional
- **[JWT](https://jwt.io/)** - Autenticação stateless
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js/)** - Criptografia de senhas
- **[class-validator](https://github.com/typestack/class-validator)** - Validação de dados

## 🏗️ Arquitetura

O projeto segue os princípios da **Arquitetura Limpa** e padrões do NestJS:

```
src/
├── modules/           # Módulos de domínio
│   ├── auth/         # Autenticação e autorização
│   ├── users/        # Gestão de usuários
│   ├── bank-accounts/ # Contas bancárias
│   ├── categories/   # Categorias de transações
│   └── transactions/ # Transações financeiras
├── shared/           # Recursos compartilhados
│   ├── config/       # Configurações
│   ├── database/     # Prisma e repositórios
│   ├── decorators/   # Decoradores customizados
│   └── pipes/        # Pipes de validação
└── types/            # Definições de tipos
```

## 🗄️ Modelo de Dados

### Entidades Principais

- **User**: Usuários do sistema
- **BankAccount**: Contas bancárias (CHECKING, INVESTMENT, CASH)
- **Category**: Categorias de transações (INCOME, EXPENSE)
- **Transaction**: Transações financeiras

### Relacionamentos

- Um usuário pode ter múltiplas contas bancárias
- Um usuário pode criar múltiplas categorias
- Uma transação pertence a uma conta bancária e pode ter uma categoria
- Todas as entidades são isoladas por usuário (multi-tenant)

## 🚀 Configuração e Instalação

### Pré-requisitos

- Node.js 16+ 
- PostgreSQL 12+
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/jovemcleb/fincheck.git
cd fincheck/api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp env.example .env
```

Edite o arquivo `.env`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/fincheck"
JWT_SECRET="your-super-secret-jwt-key"
```

### 4. Configure o banco de dados

```bash
# Gerar o Prisma Client
npx prisma generate

# Executar as migrações
npx prisma migrate dev
```

### 5. Execute a aplicação

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:3000`

## 📚 Documentação da API

### Endpoints Principais

#### 🔐 Autenticação
- `POST /auth/signin` - Login
- `POST /auth/signup` - Cadastro

#### 👤 Usuários
- `GET /users/me` - Perfil do usuário

#### 🏦 Contas Bancárias
- `GET /bank-accounts` - Listar contas
- `POST /bank-accounts` - Criar conta
- `PUT /bank-accounts/:id` - Atualizar conta
- `DELETE /bank-accounts/:id` - Deletar conta

#### 📂 Categorias
- `GET /categories` - Listar categorias
- `POST /categories` - Criar categoria
- `PUT /categories/:id` - Atualizar categoria
- `DELETE /categories/:id` - Deletar categoria

#### 💸 Transações
- `GET /transactions` - Listar transações
- `POST /transactions` - Criar transação
- `PUT /transactions/:id` - Atualizar transação
- `DELETE /transactions/:id` - Deletar transação

### 🔒 Autenticação

Todas as rotas (exceto login e cadastro) requerem autenticação via JWT Bearer Token:

```bash
Authorization: Bearer <jwt-token>
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📝 Scripts Disponíveis

- `npm run start` - Inicia a aplicação
- `npm run start:dev` - Inicia em modo desenvolvimento (watch)
- `npm run start:prod` - Inicia em modo produção
- `npm run build` - Gera build para produção
- `npm run format` - Formata código com Prettier
- `npm run lint` - Executa ESLint

## 🔧 Comandos Prisma

```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate dev

# Resetar banco de dados
npx prisma migrate reset

# Visualizar dados (Prisma Studio)
npx prisma studio
```

## 🐳 Docker

```bash
# Construir imagem
docker build -t fincheck-api .

# Executar container
docker run -p 5432:5432 fincheck-api
```

