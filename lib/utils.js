var fs = require("fs");

var extBasePath = __dirname;

var prepareFileList = function(fileList) {
	return fileList.map(function(file) {
		return extBasePath + file;
	});
};

var utils = module.exports = {

	injectExtJS: function(fileList) {
		fileList = prepareFileList(fileList); 
	
		fileList.forEach(function(file) {
			require(file);
		});
	}
};
