
Guid = function() {
	// In base 16: 0=0, 5=5, 10=A, 15=F
	var returnBase = function(number, base) {
		return number.toString(base).toUpperCase();
	}
	
	var getIntegerBits = function(val, start, end) {
		var base16 = returnBase(val, 16);
		var quadArray = base16.split('');
		var quadString = '';
		var i = 0;
		for(i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
			if(!quadArray[i] || quadArray[i] == '') quadString += '0';
			else quadString += quadArray[i];
		}
		return quadString;
	}

	var createGUID = function() {
		// Loose interpretation of the specification DCE 1.1: Remote Procedure Call
		// described at http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37
		// since JavaScript doesn't allow access to internal systems, the last 48 bits 
		// of the node section is made up using a series of random numbers (6 octets long).
	
		var dg = new Date(1582, 10, 15, 0, 0, 0, 0).getTime();
		var dc = new Date().getTime();
		var t = (dg < 0) ? Math.abs(dg) + dc : dc - dg;
		var h = '-';
		var tl = getIntegerBits(t, 0, 31);
		var tm = getIntegerBits(t, 32, 47);
		var thv = getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
		var csar = getIntegerBits(Math.randRange(0, 4095), 0, 7);
		var csl = getIntegerBits(Math.randRange(0, 4095), 0, 7);
	  
		// since detection of anything about the machine/browser is far too buggy, 
		// include some more random numbers here
		// if nic or at least an IP can be obtained reliably, that should be put in
		// here instead.
		var n = getIntegerBits(Math.randRange(0, 8191), 0, 7) + 
				getIntegerBits(Math.randRange(0, 8191), 8, 15) + 
				getIntegerBits(Math.randRange(0, 8191), 0, 7) + 
				getIntegerBits(Math.randRange(0, 8191), 8, 15) + 
				getIntegerBits(Math.randRange(0, 8191), 0, 15); // this last number is two octets long
		return tl + h + tm + h + thv + h + csar + csl + h + n; 
	}

	var guid = createGUID();
    
	return {
		guid: guid,
		
		valueOf: function() { 
			return this.guid; 
		},
		
		toString: function() { 
			return this.guid; 
		}
	};
}

Guid.newGuid = function() {
	return new Guid();
}
