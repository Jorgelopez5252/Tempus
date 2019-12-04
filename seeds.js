module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
    }
  };