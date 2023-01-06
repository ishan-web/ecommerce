// 










// use the path of your model

const User = require("../models/userModel");

const mongoose = require("mongoose");

// use the new name of the database

const url = "mongodb://localhost:27017/easyshoe";

beforeAll(async () => {

  await mongoose.connect(url, {

    useNewUrlParser: true,

  });

});

afterAll(async () => {

  await mongoose.connection.close();

});

describe("User Schema test anything", () => {

  // the code below is for insert testing

  it("Add user testing anything", () => {

    const user = {

      name: "test",

      email: "hjj@test.com",

      password: "123123123",

      avatar: "image.jpg",


    };



    return User.create(user).then((pro_ret) => {

      expect(pro_ret.name).toEqual("test");

    });

  });



  // it("to test the update", async () => {

  //   return User.findByIdAndUpdate(

  //     { _id: Object("620a5d9c548dd7d8f8c51a9a") }, // Add this user of the inserted one

  //     { $set: { name: "ram" } }

  //   ).then((pp) => {

  //     expect(pp?.name).toEqual("ram");

  //   });

  // });

  // the code below is for delete testing

  // Comment This code before executing test

  //   it("to test the delete product is working or not", async () => {

  //     const status = await Product.deleteMany();

  //     expect(status.ok).toBe(undefined);

  //   });



  it("to get product", async () => {

    const status = User.find();

    expect(status.ok).toBe(undefined);

  });

});