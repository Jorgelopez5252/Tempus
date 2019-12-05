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
<<<<<<< HEAD
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/users", function (req, res) {

    let query = {};
    console.log(req.query.id)

    if (req.query.id) {
      query.id = req.query.id;
    }

=======
module.exports = function(app) {;

  // GET route for getting all of the posts
  app.get("/api/users", function(req, res) {
    let query = {};
    console.log(req.query.id)
    if (req.query.id) {
      query.id = req.query.id;
    }
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a
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
<<<<<<< HEAD

=======
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a
      where: query,
      include: [{
        model: db.userHours
      }]
<<<<<<< HEAD

=======
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a
    })
      .then(function (dbUser) {
        res.json(dbUser);
        // console.log(dbUser);
      });
  });


<<<<<<< HEAD
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
=======
  // app.get("/api/posts/:id", function(req, res) {
  //   db.user.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbUser) {
  //       res.json(dbUser);
  //     });
  // });
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a


    // DELETE route for deleting users
  app.delete("/api/users/:id", function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      }
    })
  });

<<<<<<< HEAD
  app.get("/api/userHours", function (req, res) {
=======
  app.get("/api/userhours", function (req, res) {
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a
    
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
  

<<<<<<< HEAD
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
=======
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
>>>>>>> 81405888953f753327dc1d1f467950aa696ea15a
};

