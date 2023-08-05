'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('todos', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('todos', [
      {
        title: "Go shopping for vegetables at the market.",
        desc: "Buy tomatoes, carrots, and spinach for dinner.",
        date: new Date(),
        priority: "high",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Call mom.",
        desc: "Check in with mom and chat about the weekend plans.",
        date: new Date(),
        priority: "medium",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Write a blog post.",
        desc: "Write about JavaScript Callback.",
        date: new Date(),
        priority: "low",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     Add commands to revert seed here.
     *
     Example:
     await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('todos', null, {});
  }
};
