import LFAdapter from 'ember-localforage-adapter/adapters/localforage';

export default LFAdapter.extend({
  namespace: 'embernews',
  shouldReloadAll() { return true; }
});
