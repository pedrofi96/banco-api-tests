# Banco API Tests

## Objetivo

O **Banco API Tests** é um projeto de **automação de testes de API REST** desenvolvido em **JavaScript**, com o objetivo de validar os endpoints da [Banco API](https://github.com/juliodelimas/banco-api).  
Ele utiliza o **Mocha**, **Chai** e **Supertest** para realizar testes automatizados de integração, aumentando a confiabilidade e a consistência dos serviços oferecidos pela API.

---

## ⚙️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
- **Cliente HTTP para Testes:** [Supertest](https://github.com/ladjs/supertest)
- **Geração de Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciamento de Variáveis de Ambiente:** [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Estrutura de Diretórios

```
banco-api-tests/
├── fixtures
│   ├──postTransferencias.json
├── helpers
│   ├── authentication.js
├── test/
│   ├── login.test.js #Arquivo de teste da rota /Login
│   └── transferencias.test.js #Arquivo de teste das rotas de /transferencias 
├── mochaawesome-report/     # Diretório gerado automaticamente com relatórios HTML
├── .env                     # Arquivo de variáveis de ambiente (não incluso no repositório)
├── package.json
└── README.md
```

---

## 🔐 Arquivo `.env`

O projeto requer a criação de um arquivo `.env` na raiz do diretório.  
Esse arquivo **não está incluído no repositório** por motivos de segurança.

Exemplo de conteúdo do `.env`:

```
BASE_URL=http://localhost:3000/api
LOGIN_BANCO=admin
SENHA_BANCO=1234
```

> ⚠️ Essas variáveis são utilizadas para definir a URL base da API e as credenciais de autenticação utilizadas nos testes.

---

## ▶️ Execução dos Testes

Antes de executar os testes, instale as dependências do projeto:

```bash
npm install
```

Para rodar os testes, execute:

```bash
npm test
```

Por padrão, o comando acima executará todos os testes dentro da pasta `test/`.

---

## 📊 Geração de Relatórios (Mochawesome)

Após a execução dos testes, um relatório em formato **HTML** é gerado automaticamente dentro do diretório `mochawesome-report/`.

Para visualizar o relatório:

1. Acesse a pasta `mochawesome-report/`
2. Abra o arquivo `mochawesome.html` no navegador

Você também pode gerar o relatório manualmente executando:

```bash
npx mocha --reporter mochawesome
```

---

## 📚 Documentação das Dependências

| Dependência | Descrição | Link |
|--------------|------------|------|
| **Mocha** | Framework de testes JavaScript | [https://mochajs.org](https://mochajs.org) |
| **Chai** | Biblioteca de asserções | [https://www.chaijs.com](https://www.chaijs.com) |
| **Supertest** | Cliente HTTP para testes de APIs | [https://github.com/ladjs/supertest](https://github.com/ladjs/supertest) |
| **Mochawesome** | Geração de relatórios de testes em HTML | [https://github.com/adamgruber/mochawesome](https://github.com/adamgruber/mochawesome) |
| **Dotenv** | Carrega variáveis de ambiente a partir de arquivos `.env` | [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) |

---

## 🧠 Referências

- Projeto testado: [Banco API](https://github.com/juliodelimas/banco-api)
- Autor do projeto de testes: [Pedro Filipe](https://github.com/pedrofi96)

---

## 🧾 Licença

Este projeto é de código aberto e está disponível sob a licença **MIT**.
