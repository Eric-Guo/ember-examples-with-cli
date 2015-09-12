import Ember from 'ember';

const { computed } = Ember;

export default function injectObject(containerKey) {
  return computed({
    get() {
      return this.get('container').lookup(containerKey);
    }
  }).readOnly();
}
