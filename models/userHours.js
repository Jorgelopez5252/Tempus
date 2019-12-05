// const User = require('../models/user');

module.exports = (sequelize, Sequelize) => {
    let UserHours = sequelize.define('userHours', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        weekNum: { type: Sequelize.INTEGER },
        sun: { type: Sequelize.INTEGER, defaultValue: 0 },
        mon: { type: Sequelize.INTEGER, defaultValue: 0 },
        tues: { type: Sequelize.INTEGER, defaultValue: 0 },
        wed: { type: Sequelize.INTEGER, defaultValue: 0 },
        thur: { type: Sequelize.INTEGER, defaultValue: 0 },
        fri: { type: Sequelize.INTEGER, defaultValue: 0 },
        sat: { type: Sequelize.INTEGER, defaultValue: 0 },
        totalHours: { type: Sequelize.INTEGER, defaultValue: 0 }
    });

    UserHours.associate = function(models){
        UserHours.belongsTo(models.user);
    }
    return UserHours;
};
