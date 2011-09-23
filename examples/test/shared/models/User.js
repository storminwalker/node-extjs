
Ext.define("Examples.shared.models.User", {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',     type: 'string'},
        {name: 'age',      type: 'int'},
        {name: 'phone',    type: 'string'},
        {name: 'gender',   type: 'string'},
        {name: 'username', type: 'string'},
        {name: 'alive',    type: 'boolean', defaultValue: true}
    ],

	validations: [
        {type: 'presence',  field: 'age'},
        {type: 'length',    field: 'name',     min: 2},
        {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
        {type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
        {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
    ],
    
    changeName: function() {
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";

        this.set('name', newName);
    }
});
