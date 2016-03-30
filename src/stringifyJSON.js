// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var JSON = {};
	
	if (obj === null)
		return null;

	if (obj === undefined)
		return undefined; 

	if (obj === boolean)
		return String(obj);

	if (typeof obj === 'number')
		return String(obj);

	if (typeof obj === 'string')
		return '"' + obj + '"';

};
