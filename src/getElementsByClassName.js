// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	var body = document.body;
	var result = [];
	if (body != null) {
		if (body.classList.contains(className)) {
			result.push(body);
		}
		var childNodes = body.childNodes;
		var result = result.concat(getElementsArray(childNodes, className));
	}
	return result;
};

var getElementsArray = function(nodes, className) {
	if (!nodes || nodes.length <= 0) {
		return [];
	} else {
		var classElemsArray = [];
		var len = nodes.length;
		for (var i=0; i < len; i++) {
			var node = nodes[i];
			if (node.nodeName !== "#text" && node.classList.contains(className)) {
				classElemsArray.push(node);
			}
			classElemsArray = classElemsArray.concat(getElementsArray(node.childNodes, className));
		}
		return classElemsArray;
	}
};

