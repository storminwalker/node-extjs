
Ext.applyIf(Math, {
    /**
     * extend Math class with a randRange method
     * @return {Number} A random number greater than or equal to min and less than or equal to max.
     */
    randRange : function(min, max) {
      	return Math.max(Math.min(Math.round(Math.random() * max), max), min);
    },
    
    /**
     * extend Math class with a sign method
     * @return {Number} The correctly signed number
     */
    sign: function(x) {
		if(x == 0) {
			return 0;
		}
		return x / Math.abs(x);
	}
});
