
Ext.applyIf(Ext.util.Format, {
	
	hexEncode: function(data) {
		var digits = "0123456789ABCDEF";
		var map = [];
		var i = 0;
		for(i; i < 256; i++) {
			map[i] = digits.charAt(i >> 4) + digits.charAt(i & 15);
		}
		
		var result = [];
		for (var i=0; i<data.length; i++) {
			result[i] = map[data.charCodeAt(i)];
		}
		
		return result.join('');
	},
	
	hexDecode: function(data) {
		var digits = "0123456789ABCDEF";
		var map = [];
		var i = 0;
		for(i; i < 256; i++) {
			map[digits.charAt(i >> 4) + digits.charAt(i & 15)] = String.fromCharCode(i);
		}
		if (!data.match(/^[a-f0-9]*$/i)) {
			return false;
		}
		
		if (data.length % 2) {
			data = '0' + data;
		}
		
		var result = [];
		var j = 0;
		i = 0;
		var len = data.length;
		for (i; i < len; i += 2) {
			result[j++] = map[data.substr(i, 2)];
		}
	
		return result.join('');
	}
});

Ext.apply(Ext, {

	objectToHex: function(obj) {
		return Ext.hexEncode(Ext.encode(obj));
	},
	
	objectFromHex: function(s) {
		return Ext.decode(Ext.hexDecode(s));
	},

	hexEncode: function(value) {
        return Ext.util.Format.hexEncode(value);
    },

	hexDecode: function(value) {
        return Ext.util.Format.hexDecode(value);
    }
});