// const User = require('../models/user');

module.exports = (sequelize, Sequelize) => {
    let UserHours = sequelize.define('userHours', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        weekNum: { type: Sequelize.INTEGER },
        sun: { type: Sequelize.INTEGER },
        mon: { type: Sequelize.INTEGER },
        tues: { type: Sequelize.INTEGER },
        wed: { type: Sequelize.INTEGER },
        thur: { type: Sequelize.INTEGER },
        fri: { type: Sequelize.INTEGER },
        sat: { type: Sequelize.INTEGER },
        totalHours: { type: Sequelize.INTEGER }
    });

    UserHours.associate = function(models){
        UserHours.belongsTo(models.user);
    }

    return UserHours;
};
