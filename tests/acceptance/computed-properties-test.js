import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../tests/helpers/start-app';
import Pretender from 'pretender';

import RestaurantMenu from '../tests/page-objects/restaurant-menu';

let application, server;

module('Acceptance | computed properties', {
  beforeEach() {
    application = startApp();
    server = new Pretender();
  },

  afterEach() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

// BEGIN-SNIPPET rm-test-example

test('visiting /computed-properties', function(assert) {

  new RestaurantMenu(assert)
    .visit(server, '/computed-properties/composable-cpm')

    // Make sure we're at the right place
    .assertPath('computed-properties.composable-cpm')

    // Add a few burgers
    .clickMenuAddButton('Hamburger')
      .clickMenuAddButton('Hamburger')
      .clickMenuAddButton('Hamburger')
      .clickMenuAddButton('Hamburger')
      .assertSubtotal('$ 36.00')

    // Remove one
    .clickRemoveTopOrderItemButton()
      .assertSubtotal('$ 27.00')

    // And another
    .clickRemoveTopOrderItemButton()
      .assertSubtotal('$ 18.00')

    // Change the tip percentage
    .toggleConfiguration()
      .setTip(31)
      .assertTotal('$ 19.66')

    // Change the tax percentage
    .toggleConfiguration()
      .setTax(8.5)
      .assertTotal('$ 20.11');

});
// END-SNIPPET
