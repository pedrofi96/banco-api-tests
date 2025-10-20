//import request from "supertest"; //Para que se possa fazer requisições a API
//import { expect } from "chai"; //Para validar o que foi obtido de resposta e o valor que se esperava
//import "dotenv/config"; //para usar variaveis do arquivo .env
const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { obterToken } = require("../helpers/authentication");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("Deve retornar com sucesso 201 quando o valor da transferencia for igual ou acima de 10 reais", async () => {
      //pegando o token

      const token = await obterToken(process.env.LOGIN_BANCO, process.env.SENHA_BANCO);

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "Application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: "string",
        });

      expect(resposta.status).to.equal(201);
    });

    it("Deve retornar falha(422) quando o valor da transferencia for abaixo de 10 reais", async () => {
      //pegando o token
      const token = await obterToken(process.env.LOGIN_BANCO, process.env.SENHA_BANCO);

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
});
