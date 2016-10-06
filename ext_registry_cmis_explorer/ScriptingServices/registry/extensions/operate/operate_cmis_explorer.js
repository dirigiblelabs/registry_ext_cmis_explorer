/*eslint-env node */

exports.getItem = function() {
	var item = {
		image: "sign-in",
		color: 'red',
		path: "#/content/cmis",
		title: "CMIS Explorer",
		description: "Upload and Download Documents"
	};
	return item;
};

exports.getOrder = function() {
	return 4;
};
