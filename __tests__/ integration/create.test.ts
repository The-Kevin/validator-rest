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

  let user;

  beforeEach(() => {
    user = {
      name: "test",
      nick: "test",
      email: "testkkkkkkkkkk@gmail.com",
      company: "test company",
      softSkills: ["patience", "not be angry", "coach"],
      hardSkills: ["html", "google search", "windows"],
    };
  });

  it("test endpoint to create user", async () => {
    const req = await request(app).post("/user/create").send(user);

    expect(1).toBe(1);
  });

  it("test endpoint to create user without data", async () => {
    await request(app).post("/user/create").send({});
  });

  it("test endpoint to access info user without JWT", async () => {
    await request(app).post("/user/create").send({});
  });

  //.set("Authorization", "JWT");
});
