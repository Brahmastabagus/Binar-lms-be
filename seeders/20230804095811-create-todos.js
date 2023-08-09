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
    function getRandomDate(startDate, endDate) {
      const startMillis = startDate.getTime();
      const endMillis = endDate.getTime();
      const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
      return new Date(randomMillis);
    }

    const startDate = new Date(2023, 0, 1);
    const endDate = new Date(2023, 11, 31);
    // const randomDate = getRandomDate(startDate, endDate);

    await queryInterface.bulkInsert('todos', [
      {
        title: "Go shopping for vegetables at the market.",
        desc: "Buy tomatoes, carrots, and spinach for dinner. Make sure to choose fresh produce from the local farmers market. Don't forget to pick up some herbs as well. Plan to prepare a nutritious meal for the family using the fresh ingredients.",
        date: getRandomDate(startDate, endDate),
        completed: true,
        priority: "high",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Vacation to the zoo.",
        desc: "Visit the local zoo and spend quality time observing various species of animals from different parts of the world. Don't miss the feeding sessions and the opportunity to learn about wildlife conservation efforts. Capture memorable photos of the animals in their natural habitats.",
        date: getRandomDate(startDate, endDate),
        completed: false,
        priority: "medium",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Do homework.",
        desc: "Complete math and science assignments before the deadline. Double-check the answers and show all the steps for solving the equations. Review the chapters covered in class to ensure accuracy. Prepare questions for clarification during the next classroom session.",
        date: getRandomDate(startDate, endDate),
        completed: false,
        priority: "low",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Prepare for the upcoming presentation.",
        desc: "Research and gather relevant information for the presentation scheduled next week. Create an engaging slide deck that includes graphs, charts, and visual aids. Practice speaking confidently and clearly. Rehearse the presentation multiple times to ensure a smooth delivery.",
        date: getRandomDate(startDate, endDate),
        completed: true,
        priority: "medium",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Plan a weekend hiking trip.",
        desc: "Choose a scenic trail for the hiking trip. Make a list of essential items to pack, including hiking boots, water bottles, and a first aid kit. Check the weather forecast and dress accordingly to ensure a comfortable experience. Invite friends to join the adventure and enjoy the breathtaking views.",
        date: getRandomDate(startDate, endDate),
        completed: false,
        priority: "low",
        user_id: 2,
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
