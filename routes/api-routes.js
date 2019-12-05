// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");
// const sequelize = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {;

  // GET route for getting all of the posts
  app.get("/api/users", function(req, res) {
    let query = {};
    console.log(req.query.id)
    if (req.query.id) {
      query.id = req.query.id;
    }
    db.user.findAll({
      // attributes:
      //   [
      //   'id',
      //   'firstname',
      //   'lastname',
      //   'title',
      //   'salary',
      //   'delete_string'
      //   ]
      where: query,
      include: [{
        model: db.userHours
      }]
    })
      .then(function (dbUser) {
        res.json(dbUser);
        // console.log(dbUser);
      });
  });


  app.get("/api/userHours/:id", function(req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });


    // DELETE route for deleting users
  app.delete("/api/users/:id", function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      }
    })
  });

  app.get("/api/userHours", function (req, res) {
    
    db.userHours.findAll({
      attribute: [
        "id",
        "weekNum",
        "sun",
        "mon",
        "tues",
        "wed",
        "thur",
        "fri",
        "sat",
        "totalHours"
      ],
      include: [db.user]
    })
      .then(function (dbUserHours) {
        res.json(dbUserHours);
        // console.log(dbUserHours);
      });
  });



//   // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // Get route for retrieving a single post
  

  // // POST route for saving a new post
  // app.post("/api/userhours/:id", function(req, res) {
  //   console.log(req.body);
  //   // db.userHours.update({
  //   //   sun: req.body.sun,
  //   //   mon: req.body.mon,
  //   //   tues: req.body.tues,
  //   //   wed: req.body.wed,
  //   //   thur: req.body.thur,
  //   //   fri: req.body.fri,
  //   //   sat: req.body.sat,
  //   // })
  //   //   .then(function(dbPost) {
  //   //     res.json(dbPost);
  //   //   });
  // });



  // PUT route for updating posts
  app.put("/api/userhours/:id", function(req, res) {
    db.userHours.update(req.body,
      {
        where: {
          userId: req.params.id,
        }
      }
      )
      .then(function(dbUserHours) {
        res.json(dbUserHours);
      });
  });
};

