module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render("index")
  });

  app.get('/test', (req, res) => {
    res.render('index');
  });

  app.get('/signup', (req, res) => {
    res.render('signup');
  });

  app.get('/signin', (req, res) => {
    res.render('signin');
  });

  app.get('/employeeTable', (req, res) => {
    res.render('employeeTable', { layout: 'appMain' });
  });

  app.get('/hours', (req, res) => {
    res.render('hours', { layout: 'appMain' });
  });

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/home',
      failureRedirect: '/signup'
    })
  );

  app.get('/home', isLoggedIn, (req, res) => {
    // res.render('home');
    res.render('home', { layout: 'appMain' });
  });

  app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.redirect('/signin');
    });
  });

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: ('/home'),
      failureRedirect: '/signup'
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/signin');
  }
};
