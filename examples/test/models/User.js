
Ext.define("Examples.models.User", {

	extend: "Examples.shared.models.User",
	
	requires: [
		"Examples.shared.models.User",
		"Examples.models.Post",
		"Examples.models.Comment"
	],
	
    associations: [
        {type: 'hasMany', model: 'Examples.models.Post',    name: 'posts'},
        {type: 'hasMany', model: 'Examples.models.Comment', name: 'comments'}
    ]
});
