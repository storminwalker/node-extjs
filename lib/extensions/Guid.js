
Guid = function(config) {
    this.id = this.createGUID();
}

Guid.prototype.valueOf = function(){ return this.id; };
Guid.prototype.toString = function(){ return this.id; };

Guid.prototype.createGUID = function() {
  	// Loose interpretation of the specification DCE 1.1: Remote Procedure Call
  	// described at http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37
  	// since JavaScript doesn't allow access to internal systems, the last 48 bits 
  	// of the node section is made up using a series of random numbers (6 octets long).

  	var dg = new Date(1582, 10, 15, 0, 0, 0, 0).getTime();
  	var dc = new Date().getTime();
  	var t = (dg < 0) ? Math.abs(dg) + dc : dc - dg;
  	var h = '-';
  	var tl = XERO.utils.Guid.getIntegerBits(t, 0, 31);
  	var tm = XERO.utils.Guid.getIntegerBits(t, 32, 47);
  	var thv = XERO.utils.Guid.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
  	var csar = XERO.utils.Guid.getIntegerBits(Math.randRange(0, 4095), 0, 7);
  	var csl = XERO.utils.Guid.getIntegerBits(Math.randRange(0, 4095), 0, 7);
  
  	// since detection of anything about the machine/browser is far too buggy, 
  	// include some more random numbers here
  	// if nic or at least an IP can be obtained reliably, that should be put in
  	// here instead.
  	var n = XERO.utils.Guid.getIntegerBits(Math.randRange(0, 8191), 0, 7) + 
  			XERO.utils.Guid.getIntegerBits(Math.randRange(0, 8191), 8, 15) + 
  			XERO.utils.Guid.getIntegerBits(Math.randRange(0, 8191), 0, 7) + 
  			XERO.utils.Guid.getIntegerBits(Math.randRange(0, 8191), 8, 15) + 
  			XERO.utils.Guid.getIntegerBits(Math.randRange(0, 8191), 0, 15); // this last number is two octets long
  	return tl + h + tm + h + thv + h + csar + csl + h + n; 
}

Guid.newGuid = function() {
	return new Guid();
}

//
// GENERAL METHODS (Not instance specific)
//

// Pull out only certain bits from a very large integer, used to get the time
// code information for the first part of a GUID. Will return zero's if there 
// aren't enough bits to shift where it needs to.
Guid.getIntegerBits = function(val, start, end) {
    var base16 = XERO.utils.Guid.returnBase(val, 16);
    var quadArray = base16.split('');
    var quadString = '';
    var i = 0;
    for(i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
        if(!quadArray[i] || quadArray[i] == '') quadString += '0';
        else quadString += quadArray[i];
    }
    return quadString;
}

// In base 16: 0=0, 5=5, 10=A, 15=F
Guid.returnBase = function(number, base) {
    return number.toString(base).toUpperCase();
}

