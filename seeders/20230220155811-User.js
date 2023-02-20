'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
    [
      {
        "first_name": "TEST1",
        "last_name": "TEST1",
        "email": "test1@iron.man",
        "password": "qwertydfsdfsdf",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      },
      {
        "first_name": "TEST2",
        "last_name": "TEST2",
        "email": "test2@iron.man",
        "password": "qwertydfsdfsdf",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      },
      {
        "first_name": "TEST3",
        "last_name": "TEST3",
        "email": "test3@iron.man",
        "password": "qwertydfsdfsdf",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      }
    ], {}
    )
  }
};
