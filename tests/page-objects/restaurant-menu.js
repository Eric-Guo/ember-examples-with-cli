// BEGIN-SNIPPET po-rm-example

import Base from './base';

class RestaurantMenu extends Base {
  prepareRequests(server) {
    server.get('/api/menu_items', function() {
      return [200, {}, JSON.stringify({
        'menu-items': [{
          id: 1,
          name: 'Hamburger',
          price: 9
        }, {
          id: 2,
          name: 'Fries',
          price: 4.5
        }, {
          id: 3,
          name: 'Hot Dog',
          price: 4
        }]
      })];
    });
  }

  visit(server, url) {
    this.prepareRequests(server);
    visit(url);
    return this;
  }

  clickMenuAddButton(itemName) {
    click(`tr[data-item-name="${itemName}"] button`);
    return this;
  }

  subtotal() {
    return this._valueByAutoId('subtotal-amount');
  }

  total() {
    return this._valueByAutoId('total-amount');
  }

  tax() {
    return this.$('[data-autoid="tax-amount"]')[0].innerHTML;
  }

  tip() {
    return this.$('[data-autoid="tip-amount"]')[0].innerHTML;
  }

  assertSubtotal(subtotal) {
    andThen(() => {
      this.assert.equal(this.subtotal(), subtotal, `Subtotal should be ${subtotal}`);
    });
    return this;
  }

  assertTotal(total) {
    andThen(() => {
      this.assert.equal(this.total(), total, `Total should be ${total}`);
    });
    return this;
  }

  clickRemoveTopOrderItemButton() {
    let sel = this._getSelectorByAutoId('order-table');
    click(`${sel} tr:first-child .btn`);
    return this;
  }

  toggleConfiguration() {
    click('.configure-collapsible li:first-child .collapsible-header');
    return this;
  }

  setTip(val) {
    andThen(() => {
      this.$('.tip-field input').val(val);
      this.$('.tip-field input').blur();
    });
    return this;
  }

  setTax(val) {
    andThen(() => {
      this.$('.tax-field input').val(val);
      this.$('.tax-field input').blur();
    });
    return this;
  }

  setDiscount(val) {
    andThen(() => {
      this.$('.discount-field input').val(val);
      this.$('.discount-field input').blur();
    });
    return this;
  }
}

export default RestaurantMenu;
// END-SNIPPET
