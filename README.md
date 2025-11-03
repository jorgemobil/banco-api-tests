# 🏦 banco-api-tests

[![Mocha Tests](https://img.shields.io/badge/Tests-Mocha-brightgreen)](https://mochajs.org/)
[![Chai Assertions](https://img.shields.io/badge/Assertions-Chai-red)](https://www.chaijs.com/)
[![API Testing](https://img-url-placeholder.com/badge/API%20Testing-Supertest-blue)](https://github.com/visionmedia/supertest)

## 🎯 Objetivo do Projeto

O **banco-api-tests** é um projeto de automação de testes de integração (End-to-End) focado na validação da API Rest do projeto de exemplo [banco-api](https://github.com/juliodelimas/banco-api).

O principal objetivo é garantir que todos os endpoints da API (como criação de conta, login, transferências, etc.) estejam funcionando corretamente, seguindo os contratos de resposta (status codes e estrutura de dados) esperados.

## 💻 Stack Tecnológica

O projeto foi construído utilizando as seguintes ferramentas e bibliotecas principais:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Linguagem** | JavaScript | Linguagem de programação principal. |
| **Framework de Testes** | [Mocha](https://mochajs.org/) | *Test Runner* para estruturar e executar os testes. |
| **Biblioteca de Asserções** | [Chai](https://www.chaijs.com/) | Biblioteca flexível para escrever asserções (verificaçõess). |
| **Requisições HTTP** | [Supertest](https://github.com/visionmedia/supertest) | Ferramenta para testar APIs HTTP, facilitando o envio de requisições e asserções. |
| **Relatórios** | [Mochawesome](https://mochajs.org/#reporters) | Gerador de relatórios em HTML para visualização dos resultados dos testes. |
| **Variáveis de Ambiente** | [dotenv](https://www.npmjs.com/package/dotenv) | Módulo para carregar variáveis de ambiente de um arquivo `.env`. |

## 📂 Estrutura de Diretórios

A organização do projeto segue a seguinte estrutura:

. ├── node_modules/ # Dependências do Node.js (ignoradas pelo Git) ├── mochawesome-report/ # 📂 Diretório onde os relatórios HTML são gerados. ├── test/ # 📂 Diretório principal contendo todos os arquivos de teste. │ └── modules/ # 📂 Módulos de teste (ex: testes de usuários, transações, etc.) │ └── ... ├── .env.example # Exemplo do arquivo de configuração de variáveis de ambiente. ├── .gitignore # Arquivos e diretórios a serem ignorados pelo Git. ├── package.json # Configurações do projeto e dependências. └── README.md # Este arquivo.


## ⚙️ Configuração (Variáveis de Ambiente)

Este projeto utiliza o arquivo `.env` (não versionado) para configurar variáveis de ambiente essenciais para a execução dos testes.

### 1. Criando o Arquivo `.env`

Você deve criar um arquivo chamado **`.env`** na raiz do projeto. O formato deve ser como o exemplo abaixo:

**`.env.example`** (Exemplo)

Variável que define a URL base da API que será testada.
Certifique-se de que a API [banco-api] esteja rodando neste endereço.
BASE_URL=http://localhost:3000


**⚠️ Atenção:**
O valor de `BASE_URL` deve ser o endereço onde a API do projeto **[banco-api](https://github.com/juliodelimas/banco-api)** está sendo executada (ex: `http://localhost:3000`).

### 2. Instalação das Dependências

Execute o comando abaixo para instalar todas as dependências listadas no `package.json`:

```bash
npm install
▶️ Execução dos Testes e Relatórios
Os comandos de execução estão definidos na seção scripts do package.json.

1. Executar Todos os Testes
Para rodar todos os testes de forma simples no terminal:

Bash

npm test
2. Executar Testes e Gerar Relatório HTML
Para rodar os testes e gerar o relatório detalhado em formato HTML:

Bash

npm run test:report
Após a execução, um relatório chamado mochawesome.html será gerado dentro do diretório mochawesome-report/.

Você pode abrir este arquivo em seu navegador para visualizar os resultados dos testes de forma amigável e detalhada.

🔗 Links Úteis - Documentação das Dependências
Abaixo estão os links para a documentação das principais bibliotecas utilizadas no projeto:

Mocha Documentation: Documentação oficial do framework de testes.

Supertest GitHub: Documentação e exemplos de uso para testar APIs HTTP.

Chai Assertion Library: Guia completo de asserções (estilos Expect, Should e Assert).

Mochawesome Repository: Repositório e instruções para o gerador de relatórios.
