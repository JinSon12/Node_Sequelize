const Sequelize = require("sequelize");

// open up connection
const sequelize = new Sequelize("socialnetwork", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

// export this as module
// this needs to act as a global variables
module.exports = sequelize;
global.sequelize = sequelize;
