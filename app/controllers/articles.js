import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        upvote: function(article) {
            var ref = this.store.adapterFor('article')._getRef();
            var articleId = article.get('id');
            var currentUser = this.get('session').get('user').get('id');

            var userVoteRef = ref.child('users').child(currentUser).child('votes').child(articleId);
            var articleVoteRef = ref.child('articles').child(articleId).child('votes');

            articleVoteRef.transaction(function(currentVotes) {
                return (currentVotes || 0) + 1;
            }, function (err, committed, snapshot) {
                if (snapshot) {
                    userVoteRef.set(true);
                }
            }, false);
        }
    }
});
