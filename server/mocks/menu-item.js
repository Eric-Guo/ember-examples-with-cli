module.exports = function(app) {
  var express = require('express');
  var menuItemRouter = express.Router();

  menuItemRouter.get('/', function(req, res) {
    res.send({
      'menu-items': [{
        id: 1,
        name: 'Hamburger',
        price: 6.3
      }, {
        id: 2,
        name: 'Fries',
        price: 3.4
      }, {
        id: 3,
        name: 'Hot Dog',
        price: 2.2
      }]
    });
  });

  app.use('/api/menu_items', menuItemRouter);
};
