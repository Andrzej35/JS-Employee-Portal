const expect = require('expect')
const request = require('supertest')

const app = require('../server')

describe('GET /api/employees', () => {
    it('respond with json containing a data', (done) => {
        request(app)
            .get('/api/employees')
            .expect('http://localhost:3000/api/employees')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            done();
    })
})

describe('GET /: Test the root path', function () {
    it('the GET method should be returning 200 status', (done) => {
        request(app).get('/').then((req, res) => {
            expect(200);
            done();
        })
    })
})

describe('PUT /: Test the PUT request path', function () {
    it('the PUT method should be returning 200 status', (done) => {
        request(app).put('/:id').then((req, res) => {
            expect(200);
            done();
        })
    })
})
