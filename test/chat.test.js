const request = require('supertest');
const app = require('../app');
const mongoose = require("mongoose")

const token ="your_token"

describe('IT CHAT API', () => {

    beforeAll(done => {
        done()
    })



    test(`it get chat `, () => {
        return request(app).get('/api/chat')
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.objectContaining({
                        code: '200',
                        data: expect.arrayContaining([
                            expect.objectContaining({
                                conversationId: expect.any(String),
                                userId: expect.any(String),
                                groupId: expect.any(String),
                                message: expect.any(String),
                                onDelete: expect.any(Boolean)
                            })
                        ])
                    })
                )
            })
    })


    // test(`it post chat`, () => {
    //     let message = {
    //         conversationId: 'converId',
    //         userId: 'userId',
    //         message: 'halo'
    //     }

    //     return request(app).post('/api/chat/create')
    //         .send(message)
    //         .set('Authorization', `Bearer ${token}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toEqual(
    //                 expect.objectContaining({
    //                     code: '200',
    //                     data: expect.arrayContaining([
    //                         expect.objectContaining({
    //                             conversationId: expect.any(String),
    //                             userId: expect.any(String),
    //                             message: expect.any(String)
    //                         })
    //                     ])
    //                 })
    //             )
    //         })
    // })



    // test(`it delete chat for user all`, () => {

    //     let chatId = 'chatId'

    //     return request(app).delete(`/api/chat/${chatId}/delete`)
    //         .set('Authorization', `Bearer ${token}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toEqual(
    //                 expect.objectContaining({
    //                     code: '200',
    //                     message: 'Delete Successfuly'
    //                 })
    //             )
    //         })
    // })


    // test(`it delete chat for user `, () => {

    //     let senderId = 'senderId'
    //     let newStatus = {
    //         onDelete: 1,
    //     }

    //     return request(app).put(`/api/chat/${senderId}/update`)
    //         .send(newStatus)
    //         .set('Authorization', `Bearer ${token}`)
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((res) => {
    //             expect(res.body).toEqual(
    //                 expect.objectContaining({
    //                     code: '200',
    //                     message: 'Update Successfuly'
    //                 })
    //             )
    //         })
    // })



    // afterAll(done => {

    //     mongoose.connection.close()
    //     done()
    // })

})