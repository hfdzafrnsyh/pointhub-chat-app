const request = require('supertest');
const app = require('../app');
const mongoose = require("mongoose")
const path = require('path')

const token = "your_token"
const userId = "your_userId"

describe('IT USER API', () => {

    beforeAll(done => {
        done()
    })


    test('IT POST USER REGISTER', () => {
        let newUser = {
            phone: '22221',
            name: 'hayf'
        }
        return request(app).post('/api/register')
            .send(newUser)
            .expect('Content-Type', /json/)
            .expect(201)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.objectContaining({
                        code: "201",
                        user: expect.objectContaining({
                            name: expect.any(String),
                            phone: expect.any(String),
                            image: expect.any(String)
                        }),
                        token: expect.any(String)
                    })
                )
            })

    })




    afterAll(done => {

        mongoose.connection.close()
        done()
    })

})