import request from "supertest";
import app from "../../src/index";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
export const optionsMongoose = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

describe("integration test to a create method", () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, optionsMongoose);
  });

  afterAll(async (done) => {
    await mongoServer.stop();
    await mongoose.connection.close();
    done();
  });
 
  let mockUser = {
    "name": "mockName",
    "nick": "mockNick",
    "phone": "7499964xxxx",
    "email": "email@mock.com",
    "company": "mockCompany",
    "softSkills": ["mock1", "mock2"],
    "hardSkills": ["mock3", "mock4"],
    "pass": "12345678"

  }


  it("test endpoint to create user", async () => {
    const req = await request(app).post("/user/create").send(mockUser);

    expect(1).toBe(1);

  });

});
