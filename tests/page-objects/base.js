// BEGIN-SNIPPET po-basic-example
class Base {
  constructor(assert) {
    this.assert = assert;
  }

  assertPath(path) {
    andThen(() => {
      this.assert.equal(currentPath(), path);
    });
    return this;
  }

  $(selector) {
    let results = $(selector);
    if (results.length === 0) {
      this.assert.ok(false, `No element found with selector "${selector}"`);
    }
    return results;
  }

  _getSelectorByAutoId(autoId) {
    return `[data-autoid="${autoId}"]`;
  }

  _getElementByAutoId(autoId) {
    return this.$(this._getSelectorByAutoId(autoId))[0];
  }

  _clickByAutoId(autoId) {
    click(this._getSelectorByAutoId(autoId));
    return this;
  }

  _valueByAutoId(autoId) {
    return this._getElementByAutoId(autoId).innerHTML;
  }
}

export default Base;
// END-SNIPPET
