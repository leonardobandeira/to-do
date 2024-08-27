# Frontend Developer Challenge

Este repositório contém a solução para o desafio técnico proposto para a vaga de Desenvolvedor Frontend. O projeto foi implementado utilizando Angular, com o backend simulado via JSON Server, além de conter uma tela de login e um mockup de uma tela de Kanban para futuras implementações.

## Descrição do Desafio
Implementar a interface fornecida no [Figma](https://www.figma.com/proto/x0fSZ0pQyClJdFAuYoxQq2/Test---Esig-Grup?type=design&node-id=15-341&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4).

### Tecnologias utilizadas

1. **Tecnologias e Frameworks:**
   - **Frontend:** Angular (versão mais recente).
   - **Backend:** Utilização do `JSON Server` para simulação de dados (mocking).

### Tarefas Feitas

- **Criação do Layout Solicitado:** Desenvolvi o layout conforme solicitado, adotando boas práticas de construção para garantir uma interface de usuário intuitiva e responsiva.
- **Criação de Elementos Reutilizáveis:** Implementei componentes reutilizáveis para otimizar o desenvolvimento e garantir consistência na interface.
- **Foi implementado a função para salvar os dados básicos do formulário no bd json**.
- **Criação de Página de Login:** Desenvolvi uma tela de login para o sistema.
- **Mockup de Tela de Kanban:** Criei um mockup de uma tela de Kanban no Figma, planejada para implementação futura. O mockup pode ser acessado no [Figma](https://www.figma.com/design/ohqnwZnwoHA2Dg4Y9dCvPD/Test---Esig-Grup-%2Bkanban?node-id=0-1&m=dev&t=exePyl2osLGegLlu-1).
![title](todo/kb.jpeg)

## Rodando o Projeto Localmente

Para executar a aplicação localmente, siga os passos abaixo:

### 1. Clone o Repositório

Clone o repositório do GitHub para a sua máquina local.

https://github.com/leonardobandeira/to-do.git

# Como Executar o Projeto

Siga os passos abaixo para clonar, instalar as dependências, iniciar o JSON Server e rodar o projeto Angular localmente.

```bash
# 1. Clone o repositório
git clone https://github.com/leonardobandeira/to-do.git

# 2. Navegue até o diretório do projeto
cd to-do

# 3. Instale as dependências
npm install

# 4. Inicie o JSON Server para servir os dados mockados
npx json-server --watch db.json --port 3000

# 5. Inicie o servidor de desenvolvimento do Angular
ng serve
```

O console irá mostrar-le quais postar foram alocadas para cada um dos processos (O frontend em Angular geralmente fica na porta 4200 e o backend na porta 3000. Ambos em localhost).

## Autor
Leonardo Bandeira de Lucena

github: leonardobandeira

linkedin: https://www.linkedin.com/in/leonardoblucena/
