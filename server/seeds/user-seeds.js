const User = require("../models");

const userData = [
  {
    first_name: "Dejah",
    last_name: "Cooper",
    email: "dkc008@gmail.com",
    password: "857779",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
