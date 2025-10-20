import request from "supertest"; //Para que se possa fazer requisições a API
import { expect } from "chai"; //Para validar o que foi obtido de resposta e o valor que se esperava

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("Deve retornar com sucesso 201 quando o valor da transferencia for igual ou acima de 10 reais", async () => {
      //pegando o token
      const RespostaLogin = await request("http://localhost:3000")
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });
      const token = RespostaLogin.body.token;

      const resposta = await request("http://localhost:3000")
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
      const RespostaLogin = await request("http://localhost:3000")
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });
      const token = RespostaLogin.body.token;

      const resposta = await request("http://localhost:3000")
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
