
String.format = Ext.util.Format.format;

Ext.applyIf(String.prototype, {
	
	endsWith: function(s) 
	{
		if(this.length == 0 || this.length < s.length) return false;
		return (this.substr(this.length - s.length) == s);
	},
	
	startsWith: function(s) {
		if(this.length == 0 || this.length < s.length) return false;
		return (this.substr(0, s.length) == s);
	},

    left: function(len)
    {
        if(len <= 0)
            return "";
        else if (len > this.length)
            return this;
        else
            return this.substring(0, len);
    },
  
    right: function(len)
    {
        if(len <= 0)
            return "";
        else if (len > this.length)
            return this;
        else
           return this.substring(this.length, this.length - len);
    },
    
    isNullOrEmpty: function(trim) 
	{
	    var s = this;
	    if(trim) {
		    s = s.trim();
		}
		
		return (s.length != 0);
	},
	
	toProperCase: function() {
		return this.replace(/\w\S*/g, function(txt){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
});
