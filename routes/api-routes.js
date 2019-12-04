// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");
const sequelize = require("sequelize");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/users", function (req, res) {
    db.user.findAll({
      attributes:
        [
          'id',
          'firstname',
          'lastname',
          'title',
          'salary'
        ]
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/userhours", function (req, res) {
    db.userHours.findAll({
      // attributes:
      //   [
      //     'userId',
      //     'weekNum',
      //     'sun',
      //     'mon',
      //     'tues',
      //     'wed',
      //     'thur',
      //     'fri',
      //     'sat',
      //     'totalHours'
      //   ]

      attributes: ['userId', 'weekNum', 
      [sequelize.fn('sum', sequelize.col('sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat')), 'totalHours']],
      group: ['userId'],
      raw: true,
      order: sequelize.literal('totalHours DESC')
    })
      .then(function (dbUserHours) {
        res.json(dbUserHours);
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

  //   // Get route for retrieving a single post
  //   app.get("/api/posts/:id", function(req, res) {
  //     db.Post.findOne({
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });

  //   // POST route for saving a new post
  //   app.post("/api/posts", function(req, res) {
  //     console.log(req.body);
  //     db.Post.create({
  //       title: req.body.title,
  //       body: req.body.body,
  //       category: req.body.category
  //     })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });

  //   // DELETE route for deleting posts
  //   app.delete("/api/posts/:id", function(req, res) {
  //     db.Post.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });

  //   // PUT route for updating posts
  //   app.put("/api/posts", function(req, res) {
  //     db.Post.update(req.body,
  //       {
  //         where: {
  //           id: req.body.id
  //         }
  //       })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });
};
