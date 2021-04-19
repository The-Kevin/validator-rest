import request from 'supertest';

import index from '../../src/modules/user/routes';
import connect from '../../src/database/connect';

describe('integration test to a create method' , () => {

    let user;

    beforeEach(() => {


         user = {
            "name": "test",
            "nick": "test",
            "email": "testkkkkkkkkkk@gmail.com",
            "company": "test company",
            "softSkills": [
                "patience",
                "not be angry",
                "coach"
            ],
            "hardSkills": [
                "html",
                "google search",
                "windows"
            ], 
        }
    })

    test("test endpoint to create user", async () => {
        const req = await request(index)
            .post('/create')
            .send(user)

        expect(req.body).toMatchObject({
            ...user,
            id: String
        })
    });
});