# 🎟️ API de Ticket de Suporte

<div align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Framework-Node.js-green?style=for-the-badge&logo=nodedotjs" alt="Node.js">
  <img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge" alt="REST API">
  <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-orange?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License">
</div>

Uma API robusta e intuitiva projetada para o gerenciamento de chamados de suporte técnico. Esta solução permite que usuários registrem problemas e que o sistema gerencie o ciclo de vida completo de um ticket, desde a criação até o encerramento.

---

## 📋 Sobre
Esta API facilita o fluxo de trabalho de suporte, permitindo criar, listar, atualizar e encerrar tickets técnicos com eficiência.

## 🚀 Funcionalidades
- **Criação de Tickets:** Registro ágil de problemas com identificação do equipamento e descrição.
- **Listagem Flexível:** Consulta de todos os tickets com opção de filtro por status (`open` ou `closed`).
- **Gestão de Ciclo de Vida:** Atualização de dados do ticket e alteração de status para fechado.
- **Exclusão:** Remoção de registros quando necessário.

---

## 🛠️ Endpoints

### 1. Criar Ticket
Cria um novo ticket de suporte no sistema.

* **Método:** `POST`
* **URL:** `/tickets`
* **Corpo da Requisição (JSON):**
    * `equipment` (string, obrigatório): Nome do equipamento (ex: computador).
    * `description` (string, obrigatório): Descrição do problema.
    * `user_name` (string, obrigatório): Nome do usuário solicitante.

---

### 2. Obter Tickets
Lista os tickets registrados, com opção de filtragem.

* **Método:** `GET`
* **URL:** `/tickets`
* **Parâmetros de Consulta (Query Params):**
    * `status` (string, opcional): Filtra por status ("open" ou "closed").

---

### 3. Atualizar Ticket
Altera as informações de um ticket existente (exceto o nome do usuário).

* **Método:** `PUT`
* **URL:** `/tickets/:id`
* **Parâmetros de Rota:**
    * `id` (UUID, obrigatório): ID do ticket.
* **Corpo da Requisição (JSON):**
    * `equipment` (string, obrigatório): Nome do equipamento.
    * `description` (string, obrigatório): Descrição do problema.

---

### 4. Fechar Ticket
Atualiza o status de um ticket para fechado.

* **Método:** `PATCH`
* **URL:** `/tickets/:id/status`
* **Parâmetros de Rota:**
    * `id` (UUID, obrigatório): ID do ticket.

---

### 5. Excluir Ticket
Remove permanentemente um ticket do sistema.

* **Método:** `DELETE`
* **URL:** `/tickets/:id`
* **Parâmetros de Rota:**
    * `id` (UUID, obrigatório): ID do ticket.

---

## 💻 Como Rodar o Projeto
*(Adicione aqui as instruções de instalação para o seu projeto, por exemplo:)*

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente.
4. Execute o servidor com `npm start` ou `npm run dev`.

---

## ✒️ Autor
**Jucileia (Léia) Santos** *Desenvolvedora Frontend & Estudante de Engenharia da Computação*

---
*Este projeto foi desenvolvido como parte de um estudo técnico para aprimoramento de APIs RESTful.*