<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Condomínio Backend

API REST para gestão de condomínios, desenvolvida com NestJS. Gerencia
moradores, unidades, boletos, contas a pagar/receber, contratos,
funcionários, fornecedores, visitantes, reservas de áreas comuns,
comunicados e autenticação de usuários.

## Tecnologias

**Backend:** Node.js, NestJS, TypeScript, TypeORM, MySQL, JWT

**Frontend:** [condominio-frontend](https://github.com/MatheusPichler88/condominio-frontend) (Next.js)

## Como Executar

### Pré-requisitos

- Node.js 18 ou superior
- MySQL

### Instalação

```bash
npm install
```

### Banco de dados

Importe o arquivo `dbCondominio.sql` no seu MySQL para criar as tabelas necessárias.

A conexão (host, porta, usuário, senha e nome do banco `DBCONDOMINIO`) fica em
`src/app.module.ts`. Ajuste para o seu ambiente.

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
JWT_SECRET=uma_chave_secreta
PORT=3000
```

### Rodar em desenvolvimento

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

## Autenticação

As rotas de leitura (`GET`) são públicas. Criar, editar e excluir (`POST`, `PUT`
e `DELETE`) exigem um token JWT no cabeçalho `Authorization: Bearer <token>`.

1. Crie um usuário:

```bash
curl -X POST localhost:3000/usuarios -H "Content-Type: application/json" \
  -d '{"NOME":"Admin","CPF_CNPJ":"11122233344","password":"123456"}'
```

2. Faça login e copie o `access_token` da resposta:

```bash
curl -X POST localhost:3000/auth/login -H "Content-Type: application/json" \
  -d '{"CPF_CNPJ":"11122233344","password":"123456"}'
```

## Rotas

Todas as rotas abaixo têm o mesmo CRUD: `GET /rota`, `GET /rota/:id`,
`POST /rota`, `PUT /rota/:id` e `DELETE /rota/:id`.

| Rota | Descrição |
| --- | --- |
| `/pessoas` | Cadastro geral de pessoas físicas e jurídicas |
| `/contatos` | Contatos das pessoas |
| `/enderecos` | Endereços das pessoas |
| `/unidades` | Apartamentos e lotes |
| `/moradores` | Pessoas associadas às unidades |
| `/funcionarios` | Funcionários |
| `/contratos-rh` | Contratos dos funcionários |
| `/fornecedores` | Fornecedores |
| `/contratos` | Contratos com fornecedores |
| `/visitantes` | Visitantes |
| `/visitas` | Registro de visitas |
| `/areas-comuns` | Áreas comuns do condomínio |
| `/reservas` | Reservas de áreas comuns |
| `/boletos` | Boletos dos moradores |
| `/comunicados` | Mural de avisos |
| `/contas-pagar` | Contas a pagar |
| `/pagamentos` | Pagamentos das contas a pagar |
| `/contas-receber` | Contas a receber |
| `/recebimentos` | Recebimentos das contas a receber |
| `/conta-corrente` | Contas correntes |
| `/mov-conta-corrente` | Movimentações das contas correntes |
| `/auth/login` | Login (retorna o token JWT) |
| `/usuarios` | Usuários do sistema |

## Observações

- Os nomes dos campos seguem as colunas do banco (ex.: `ID_PESSOA`, `NUM_UNIDADE`).
- Campos opcionais enviados vazios (`""`) são salvos como `null`.
- Erros do banco (registro em uso, valor duplicado, chave inexistente, campo grande
  demais) retornam uma mensagem clara em vez de erro genérico.
