import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // Ember Data 2.0 Reload behavior
  shouldReloadRecord: () => true,
  shouldReloadAll: () => true,
  shouldBackgroundReloadRecord: () => true,
  shouldBackgroundReloadAll: () => true
});

