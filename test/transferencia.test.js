//import request from "supertest"; //Para que se possa fazer requisições a API
//import { expect } from "chai"; //Para validar o que foi obtido de resposta e o valor que se esperava
//import "dotenv/config"; //para usar variaveis do arquivo .env
const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { obterToken } = require("../helpers/authentication");
const postTransferencias = require("../fixtures/postTransferencias.json");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token; //precisa ser criada fora do escopo before each para poder ser usada dentro dos its

    beforeEach(async () => {
      //before each roda sempre antes dos IT, rodara todas as vezes que o IT aparecer.
      //pegando o token
      token = await obterToken(
        process.env.LOGIN_BANCO,
        process.env.SENHA_BANCO
      );
    });

    it("Deve retornar com sucesso 201 quando o valor da transferencia for igual ou acima de 10 reais", async () => {
      const bodyTransferencias = { ...postTransferencias };
      bodyTransferencias.valor = 11;

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "Application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(201);
    });

    it("Deve retornar falha(422) quando o valor da transferencia for abaixo de 10 reais", async () => {
      //pegando o token
      const token = await obterToken(
        process.env.LOGIN_BANCO,
        process.env.SENHA_BANCO
      );

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "Application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 8,
          token: "string",
        });

      expect(resposta.status).to.equal(422);
    });
  });
  describe("/GET/{id}", () => {
    let token; //precisa ser criada fora do escopo before each para poder ser usada dentro dos its

    beforeEach(async () => {
      //before each roda sempre antes dos IT, rodara todas as vezes que o IT aparecer.
      //pegando o token
      token = await obterToken(
        process.env.LOGIN_BANCO,
        process.env.SENHA_BANCO
      );
    });
    it("Deve retornar 200 sucesso com mesmos dados da transferencia de id 3", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias/3")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(3);
      expect(response.body.conta_origem_id).to.equal(1);
      expect(response.body.conta_destino_id).to.equal(2);
      expect(response.body.valor).to.be.a('number')
      expect(response.body.valor).to.equal(11.00)
    });
  });
  describe("GET /transferencias", () => {
    let token; //precisa ser criada fora do escopo before each para poder ser usada dentro dos its

    beforeEach(async () => {
      //before each roda sempre antes dos IT, rodara todas as vezes que o IT aparecer.
      //pegando o token
      token = await obterToken(
        process.env.LOGIN_BANCO,
        process.env.SENHA_BANCO
      );
    });
    it("Deve retornar 10 elementos na paginação, quando informar limite de 10 registros", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).to.equal(200)
      expect(response.body.limit).to.equal(10)
      expect(response.body.transferencias).to.have.lengthOf(10) //usar o have por vir resposta como vetores

    });
  });
});
