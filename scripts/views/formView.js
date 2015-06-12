export default Backbone.View.extend({

	tagName: 'form',
	className: 'blog-post-form',

	template: JST.form,

	events: {
		'click .blog-post-submit': 'addPost',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	addPost: function(e) {
		console.log('in submit');
		e.preventDefault();
		var title = this.$('.blog-post-title').val();
		var content = this.$('.blog-post-content').val();
		this.collection.create({
			title: title,
			content: content
		});
	}

});