//import request from "supertest"; //Para que se possa fazer requisições a API
const request = require('supertest')

const obterToken = async (usuario, senha) =>{
   //pegando o token
        const RespostaLogin = await request(process.env.BASE_URL)
          .post("/login")
          .set("Content-Type", "application/json")
          .send({
            'username': usuario,
            'senha': senha,
          });
          
        return RespostaLogin.body.token;
}

module.exports={
  obterToken
}