# 🧪 banco-api-tests

Automação de testes da [API Rest Banco](https://github.com/juliodelimas/banco-api), desenvolvida em **JavaScript** com **Mocha**, **Chai** e **Supertest**.  
O objetivo do projeto é validar o comportamento da API, garantindo que suas rotas, regras de negócio e respostas estejam funcionando conforme o esperado.

---

## 🚀 Objetivo

Este projeto automatiza testes de integração da API `banco-api`, permitindo:
- Execução rápida e repetível dos testes;
- Validação de endpoints REST;
- Geração de relatórios de execução em HTML via **Mochawesome**.

---

## 🧰 Stack utilizada

| Tecnologia | Descrição | Documentação |
|-------------|------------|--------------|
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript | [📘](https://nodejs.org/en/docs/) |
| [Mocha](https://mochajs.org/) | Framework de testes | [📘](https://mochajs.org/#getting-started) |
| [Chai](https://www.chaijs.com/) | Biblioteca de asserções | [📘](https://www.chaijs.com/guide/styles/) |
| [Supertest](https://github.com/ladjs/supertest) | Testes de APIs HTTP | [📘](https://github.com/ladjs/supertest#readme) |
| [Mochawesome](https://www.npmjs.com/package/mochawesome) | Relatórios de testes em HTML | [📘](https://www.npmjs.com/package/mochawesome) |
| [dotenv](https://www.npmjs.com/package/dotenv) | Gerenciamento de variáveis de ambiente | [📘](https://www.npmjs.com/package/dotenv) |

---

## 📁 Estrutura de diretórios

```
banco-api-tests/
├── test/                       # Testes organizados por funcionalidades
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/
│   └── mochawesome.html         # Relatório gerado após os testes
├── .env                         # Configuração da URL base da API (criado pelo usuário)
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Configuração do ambiente

Antes de rodar os testes, é necessário criar o arquivo `.env` na raiz do projeto.

### 📄 Formato do arquivo `.env`
```env
BASE_URL=http://localhost:3000
```

> A variável `BASE_URL` deve conter a URL base da API do projeto [banco-api](https://github.com/juliodelimas/banco-api).

---

## 🧪 Execução dos testes

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

3. Gere o relatório Mochawesome (caso não seja gerado automaticamente):
   ```bash
   npx mochawesome-merge mochawesome-report/*.json > mochawesome.json
   npx marge mochawesome.json
   ```

4. O relatório HTML será criado em:
   ```
   ./mochawesome-report/mochawesome.html
   ```

---

## 📊 Relatórios

Após a execução dos testes, o **Mochawesome** gera relatórios interativos em HTML contendo:
- Resultados por suíte de teste;
- Tempo de execução;
- Logs e erros detalhados.

Abra o arquivo `mochawesome-report/mochawesome.html` no navegador para visualizar.

---

## 🧩 Dependências principais

As dependências estão listadas no `package.json`.  
Você pode consultar a documentação de cada uma nos links abaixo:

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 👨‍💻 Autor

Desenvolvido por **[Jorge Antonio](https://github.com/jorgemobil)**  
Projeto da API testada: [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)
