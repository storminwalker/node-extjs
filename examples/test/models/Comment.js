
Ext.define("Examples.models.Comment", {
    extend: "Ext.data.Model",
    fields: ["id", "user_id", "post_id"],

    belongsTo: "Examples.models.Post"
});
