const { User } = require('../models');

const userData = [
  {
    username: "Walter",
    email: "Walter@gmail.com",
    password: "password01234"
  },
  {
    username: "Josh",
    email: "josh@gmail.com",
    password: "password123456"
  },
  {
    username: "Saul",
    email: "sauln@gmail.com",
    password: "password1234567"
  },
  {
    username: "Skyler",
    email: "skyler@gmail.com",
    password: "passwordBreakingBad"
  },
  {
    username: "Jessie",
    email: "jessie@gmail.com",
    password: "password12345678"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;