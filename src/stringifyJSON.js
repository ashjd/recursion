// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var JSON = {};
	
	if (obj === null)
		return 'null' ;

	if (typeof obj === undefined)
		return undefined; 

	if (typeof obj === 'boolean')
		return String(obj);

	if (typeof obj === 'number')
		return String(obj);

	if (typeof obj === 'string')
		return '"' + obj + '"';

	if (typeof obj === 'object') {

		if (Object.prototype.toString.call(obj) === "[object Array]") {
			if (obj.length === 0) {
					return "[]";
				}
				return "[" + _.map(obj, stringifyJSON) + "]";
		}


		if (Object.prototype.toString.call(obj) === "[object Object]" ) {
			var str = [];
				_.each(obj, function(value, key){
					var valStr = stringifyJSON(value);
					if (valStr && key !== 'undefined') {
						str.push(stringifyJSON(key) + ":" + valStr);
					}
				});
				return "{" + str + "}";
		}

	}

};
