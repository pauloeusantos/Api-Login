# Projeto de Sistema de Login

Este é um sistema de login básico desenvolvido em Node.js utilizando Express e Sequelize para manipulação de banco de dados SQLite. O projeto inclui funcionalidades de registro, login, atualização e exclusão de usuários.

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se registrem no sistema.
- **Login de Usuário**: Autenticação de usuários registrados.
- **Atualização de Usuário**: Usuários podem atualizar suas informações.
- **Exclusão de Usuário**: Usuários podem ser removidos do sistema.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para interagir com o banco de dados.
- **SQLiteL**: Banco de dados.
- **bcryptjs**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Biblioteca para geração de tokens JWT.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pauloeusantos/Login.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Login
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```


4. Execute o projeto:
   ```bash
   node index.js
   ```

## Uso

- **Registro**: `POST /users/register`
- **Login**: `POST /users/login`
- **Atualizar Usuário**: `PUT /users/:id`
- **Deletar Usuário**: `DELETE /users/:id`

