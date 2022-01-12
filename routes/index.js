const express = require('express');
const router = express.Router();

//  to return something from middleware
module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });
  //return router object
  return router;
};
