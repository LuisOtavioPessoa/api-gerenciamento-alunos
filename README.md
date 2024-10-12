# Sistema de Gerenciamento de Alunos (API)
Este projeto é uma API para o gerenciamento de alunos, implementada com Node.js e Express. A API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar o cadastro de alunos, suas notas e suas respectivas situações (Aprovado, Recuperação ou Reprovado).

## Funcionalidades
- Listar todos os alunos cadastrados.
- Buscar um aluno específico por ID.
- Cadastrar novos alunos com suas notas e calcular automaticamente sua média e situação.
- Atualizar as notas de um aluno e recalcular a situação.
- Deletar o registro de um aluno.

##  Tecnologias Utilizadas
- Node.js
- Express.js
- JavaScript (ES6+)

## Pré-requisitos
- [Node.js](https://nodejs.org/pt) (versão 14 ou superior)
- [NPM](https://yarnpkg.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação
1. Clone o repositório:
   
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
2. Acesse o diretório do projeto:

   ```bash
   cd nome-do-repositorio
3. Instale as dependências:
 
  ```bash
  npm install
  ```
ou, se estiver utilizando o Yarn:
  ```bash
  yarn install
  ```
## Executando o Projeto:
1. Após a instalação das dependências, inicie o servidor:

```bash
npm run dev
```

ou, se estiver utilizando o Yarn:
```bash
yarn run dev
```

2. O servidor será iniciado e estará rodando na porta 5000. Acesse a API em `http://localhost:5000`.

## Endpoints
### Listar Todos os Alunos
- **URL:** `/alunos`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os alunos cadastrados.

### Buscar Aluno por ID
- **URL:** `/alunos/:id`
- **Método:** `GET`
- **Descrição:** Retorna os dados de um aluno específico baseado no seu ID.

**Exemplo de requisição:**
  ```bash
  GET /alunos/1
  ````
  
### Cadastrar Novo Aluno
- **URL:** `/alunos`
- **Método:** `POST`
- **Descrição:** Cadastra um novo aluno e calcula a sua média e situação.
  
**Exemplo de requisição:**
```bash
POST /alunos
````
**Corpo da requisição:**
  ```json
  {
  "nome": "João",
  "nota1": 8,
  "nota2": 7
}
  ````

### Atualizar Notas de um Aluno
- **URL:** `/alunos/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza as notas de um aluno e recalcula sua média e situação.

**Exemplo de requisição:**
```bash
PUT /alunos/1
````
**Corpo da requisição:**
  ```json
{
  "nota1": 6,
  "nota2": 8
}

  ````

### Deletar Aluno
- **URL:** `/alunos/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um aluno baseado no seu ID.

**Exemplo de requisição:**
```bash
DELETE /alunos/1
````

## Estrutura de Pastas

```bash
/routes
  └── UserRoutes.js       # Definição das rotas da API

/controller
  └── UserController.js   # Lógica de controle (CRUD de alunos)

index.js                 # Configuração do servidor Express

````

## Melhorias Futuras

- Implementar conexão com um banco de dados (ex: MongoDB, PostgreSQL).
- Adicionar autenticação para proteger certos endpoints.
- Implementar paginação na listagem de alunos.




 
