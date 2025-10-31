const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()

//estou usando o async por causa do await se eu nao usar o await não preciso do async

describe('Login',  () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas ', async() => {
            const resposta = await request(process.env.BASE_URL)
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({
                'username': 'julio.lima',
                'senha': '123456'
            })

            console.log(resposta.status)
            console.log(resposta.body)

       expect(resposta.status).to.equal(200);
       expect(resposta.body.token).to.be.a('string');     

        })
    })

})