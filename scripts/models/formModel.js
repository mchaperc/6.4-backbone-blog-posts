var Post = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: function() {
		title: '';
		content: '';
		created_at: new Date();
	}
});

var PostCollection = Backbone.Collection.extend({
	model: Post,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts'
});

export default {Post, PostCollection};