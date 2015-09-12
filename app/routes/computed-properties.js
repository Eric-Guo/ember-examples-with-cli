import Ember from 'ember';

import Pretender from 'pretender';
import RestaurantMenu from '../tests/page-objects/restaurant-menu';

export default Ember.Route.extend({
  init() {
    this._super(...arguments);
    let server = new Pretender();
    this.set('server', server);
    new RestaurantMenu().prepareRequests(server);
  },

  destroy() {
    this.get('server').shutdown();

  }
});
