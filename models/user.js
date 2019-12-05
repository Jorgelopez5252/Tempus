module.exports = (sequelize, Sequelize) => {
  let User = sequelize.define('user', {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    firstname: { type: Sequelize.STRING, notEmpty: true },
    lastname: { type: Sequelize.STRING, notEmpty: true },
    username: { type: Sequelize.TEXT },
    title: { type: Sequelize.STRING},
    department: { type: Sequelize.STRING},
    salary: { type: Sequelize.INTEGER, defaultValue: 0 },
    delete_string: { type: Sequelize.STRING, defaultValue: 'X'},
    about: { type: Sequelize.TEXT },
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false },
    last_login: { type: Sequelize.DATE },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = function(models){
    User.hasMany(models.userHours);
  }

  return User;
};


// module.exports = (sequelize, Sequelize) => {
//   var UserHours = sequelize.define("userHours", {
//     id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
//     firstname: { type: Sequelize.STRING, notEmpty: true },
//     lastname: { type: Sequelize.STRING, notEmpty: true },
//     hours: { type: Sequelize.INTEGER },
//   });
// };
