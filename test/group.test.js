const request = require('supertest');
const app = require('../app');
const mongoose = require("mongoose")

const token = "your_token"

describe('IT CHAT GROUP', () => {

    beforeAll(done => {
        done()
    })



    test(`it get group `, () => {
        return request(app).get('/api/group')
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.objectContaining({
                        code: '200',
                        data: expect.arrayContaining([
                            expect.objectContaining({
                                name: expect.any(String),
                                admin: expect.any(String)
                            })
                        ])
                    })
                )
            })
    })




    // test(`it post group `, () => {
    //     let newGroup = {
    //         name: "userOne",
    //         admin: 'userId'
    //     }

    //     return request(app).post('/api/group/create')
    //         .send(newGroup)
    //         .set('Authorization', `Bearer ${token}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toEqual(
    //                 expect.objectContaining({
    //                     code: '200',
    //                     data: expect.arrayContaining([
    //                         expect.objectContaining({
    //                             name: expect.any(String),
    //                             admin: expect.any(String)
    //                         })
    //                     ])
    //                 })
    //             )
    //         })
    // })



    afterAll(done => {

        mongoose.connection.close()
        done()
    })

})