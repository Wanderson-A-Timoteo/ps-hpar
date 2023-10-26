<h1 align="center">
  Lista de Tarefas  
</h1>

<div align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a>
</div>

<br>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000" alt="License">
  <img src="https://img.shields.io/github/forks/Wanderson-A-Timoteo/nlw-heat-origin?label=forks&message=MIT&color=15C3D6&labelColor=000000" alt="Forks">
  <img src="https://img.shields.io/github/stars/Wanderson-A-Timoteo/nlw-heat-origin?label=stars&message=MIT&color=15C3D6&labelColor=000000" alt="Stars">
</p>

<br>

## 💻 Projeto

Aplicação de lista de tarefas, onde o usuário poderá adicionar uma nova tarefa, editar, excluír ou marcar o checkbox para sinalizar como concluída a tarefa. Ao marcar como concluída não poderá editar a tarefa, apenas excluír.
<br>

Para adicionar uma tarefa após descreve-lá você poderá acionar o botão Enter do teclado ou clicar com mouse no botão verde adicionar, devido estar usando json-server no back-end, ao fazer uma operação é necessário atualizar a página para mostrar na tela.

### Lista de tarefas

<p align="center">
    <img alt="Lista de tarefas" title="Lista de tarefas" 
    src=".github/ps-hpar-lista-de-tarefas.png" />
</p>

<br>

### Lista de tarefas marcadas como concluídas

<p align="center">
    <img alt="Lista de tarefas marcadas como concluídas" title="Lista de tarefas marcadas como concluídas" 
    src=".github/ps-hpar-lista-de-tarefas-true.png" />
</p>
<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="100" height="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="100" height="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="100" height="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width="100" height="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="100" height="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="100" height="100" />
</div>

<br>

## 🔥 Executar Aplicação

### 🎇 Executando Localmente a Aplicação

Caso você deseja executar o projeto na sua máquina local, você precisará instalar o Node.js 18.00 ou superior em sua máquina. Após a instalação, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina.

Navegue até o local onde você clonou o projeto, exemplo:

```sh
C:\Users\NomeDoComputador\Documents\CloneDoProjeto
```

#### ❗️ Instalando as Dependências (via Windows):

Bom, agora que clonou o projeto **(Acesse a pasta `ps-hpar`)**. Agora abra um CMD ou terminal ou prompt de comando e digite a seguinte instrução:

```sh
npm install
```

ou

```sh
yarn install
```

Ao digitar a instrução acima, automaticamente irá baixar todas as dependências listadas e definidas no arquivo package.json:

- `node_modules` - que contêm os packages do npm que precisará para o projeto.

<br>

### 🛰️ Executando o projeto

Após baixar todas as dependências é só digitar no terminal a instrução abaixo:

Para subir a APIcom json-server vamos usar o comando:

```sh
json-server --watch ./database/db.json
```

Abra outro terminal ou uma nova aba para executar o projeto ps-hpar:

```sh
npm run dev
```

ou

```sh
yarn dev
```

Pronto! dessa forma o projeto `ps-hpar` estará rodando localmente em sua maquina. Acesse no navegador o endereço abaixo:

**Json Server (API)**

```sh
http://localhost:3000/tasks
```

**Projeto PS-Hpar**

```sh
http://localhost:5173/
```

<br>

## 🚩 Tenho Dúvidas... O que fazer?

Caso tenha dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/ps-hpar/issues)**. Assim que possível, responderei todas as dúvidas!

<br>

## 💡 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

<br>

## 🎆 Autor

Feito com ♥ by

<div align='center'>

[<img src="https://avatars.githubusercontent.com/u/40473246?v=4" width=115><br><sub>Wanderson A. Timóteo</sub>](https://www.wandersontimoteo.ga/)
