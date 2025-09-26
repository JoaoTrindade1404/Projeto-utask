# Projeto Kanban Board (React.js)

Este projeto é uma aplicação web no estilo **Single-Page Application (SPA)**, desenvolvida como parte do programa de capacitação técnica para a área de Front-End da Unect Jr. O objetivo foi aplicar e aprofundar os conhecimentos em React.js, componentização, gerenciamento de estado e consumo de APIs.

## ✨ Funcionalidades

* **Autenticação de Usuário:** Sistema de login para acesso ao painel (simulado ou via API).
* **Gerenciamento de Tarefas (CRUD):**
    * **Criar:** Adicionar novas tarefas a uma coluna.
    * **Ler:** Visualizar todas as tarefas em suas respectivas colunas (Ex: "A Fazer", "Em Progresso", "Concluído").
    * **Atualizar:** Mover tarefas entre as colunas (drag and drop, se implementado) ou editar seu conteúdo.
    * **Deletar:** Remover tarefas do painel.
* **Consumo de API Externa:** Todas as operações de CRUD são realizadas através de requisições HTTP a uma API RESTful externa, manipulando os dados de forma dinâmica.

## 🛠️ Tecnologias Utilizadas

* **React.js:** Biblioteca principal para a construção da interface de usuário.
* **JavaScript (ES6+):** Linguagem base para a lógica da aplicação.
* **Axios:** Para realizar as chamadas à API externa.
* **CSS Modules:** Para a estilização dos componentes.
* **React Router Dom:** Para o gerenciamento das rotas.

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/kanban-board.git](https://github.com/seu-usuario/kanban-board.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd kanban-board
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o projeto:**
    ```bash
    npm run dev
    ```

5.  Abra `http://localhost:3000` no seu navegador para ver a aplicação.
