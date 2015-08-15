import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  isNewSerializerAPI: true,
  shouldReloadAll: () => true
});
