"use strict";
// naming convention verb + action

module.exports = {
  // submit / apply everything inside up to the DB
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tweets", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: Sequelize.STRING(300),
      userId: Sequelize.INTEGER(11),
      createAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  // rollback.
  down: async (queryInterface, Sequelize) => {
    // Drop the table named tweets
    // ! MUST return a promise
    return queryInterface.dropTable("tweets");
  },
};
