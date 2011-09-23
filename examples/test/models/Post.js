
Ext.define('Examples.models.Post', {
    extend: "Ext.data.Model",
    fields: [
    	'id', 
    	'user_id',
    	'body'
    ],

    belongsTo: 'User',
    hasMany  : {
    	model: 'Examples.models.Comment', name: 'comments'
    }
});
