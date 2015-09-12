module.exports = function(app) {
  var express = require('express');
  var menuItemPriceRouter = express.Router();

  menuItemPriceRouter.get('/', function(req, res) {
    res.send({
      'menu-item-prices': [{
        id: 1,
        item_id: 1,
        price: 5.3
      }, {
        id: 2,
        item_id: 2,
        price: 2.1
      }, {
        id: 3,
        item_id: 3,
        price: 2.3
      }]
    });
  });

  app.use('/api/menu_item_prices', menuItemPriceRouter);
};
