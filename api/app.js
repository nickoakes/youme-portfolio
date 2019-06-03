'use strict';

// load modules
const express = require('express');
const Sequelize = require('sequelize');
const { check, validationResult, isEmail } = require('express-validator/check');
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');
const bodyParser = require('body-parser');
const cors = require('cors');

// load models

var User = require('./models').User;
var About = require('./models').About;

// initialize new instance of sequelize class

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './youme-db.db',
  });

// test connection to database

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable CORS

app.use(cors());

// authenticate user

const authenticateUser = (req, res, next) => {
  let message = null;
  const credentials = auth(req);

  if(credentials.name && credentials.pass) {
    User.findAll({where: {username: credentials.name}})
    .then((user) => {
      if(user[0]) {
        let currentUser = user[0].dataValues;
          const authenticated = bcryptjs
          .compareSync(credentials.pass, currentUser.password);
        if (authenticated) {
          console.log(`Authentication successful for user with username: ${currentUser.username}`);
          req.currentUser = currentUser;
          next();
        } else {
          throw message = `Authentication unsuccessful for user with username: ${credentials.name}`;
        }
      } else {
        throw message = `No user found with username: ${credentials.name}`;
      }
    }
  )
  .catch(err => {
    res.status(401).json({message: message});
  });
  } else {
    message = 'Authentication header not found';
  }
  if(message) {
    console.warn(message);
    res.status(401).json({message: message});
  }
};

  // API routes

  // get current authenticated user

  app.get('/api/users', authenticateUser, (req, res) => {
    res.json({
      userID: req.currentUser.id,
      name: req.currentUser.name,
      username: req.currentUser.username,
    });
  });

  // get content for About page

  app.get('/api/about', (req, res) => {
    About.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(about) {
      res.json(about);
    });
  });

  // update About page

  app.put('/api/about', authenticateUser, [
    check('title')
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Please enter a title'),
    check('content')
      .exists({checkNull: true, checkFalsy: true})
      .withMessage('Please enter some content')
  ], (req, res) => {
    const errors = validationResult(req);
  
    if(!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
  
      if(errorMessages[0] === 'Sorry, you are not authorised to edit this page') {
        return res.status(403).json(({errors: errorMessages}));
      } else {
        return res.status(400).json(({errors: errorMessages}));
      }
    }
    About.update(req.body, {where: {id: 1}})
    .then(function() {
      res.status(204).location('/api/about').end();
    });
  });

  // set port
app.set('port', process.env.PORT || 5000);

// start listening on port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
