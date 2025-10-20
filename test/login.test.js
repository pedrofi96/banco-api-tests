import request from 'supertest'; //Para que se possa fazer requisições a API
import {expect} from 'chai'; //Para validar o que foi obtido de resposta e o valor que se esperava
import 'dotenv/config';

//const request = require('supertest') //Para que se possa fazer requisições a API
//const { expect } = require('chai') 

  describe('Login', () => { //mocha para estruturar os testes e executar eles.
    describe('POST /login', ()=>{
      it('Deve retornar 200 com token em string quando usar credenciais válidas', async ()=>{
        const response = await request('http://localhost:3000')
          .post('/login')
          .set('Content-Type', 'application/json')
          .send({
            'username':'julio.lima',
            'senha':'123456'
          })

        expect(response.status).to.equal(200);
        expect(response.body.token).to.be.a('string');

      })
    })



  })