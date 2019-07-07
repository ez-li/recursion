// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var str = '';
  var type = typeof obj;

  if (obj === null) {
  	str += 'null';
  }
  else if (type === 'boolean') {
  	str += (obj ? 'true' : 'false');
  }
  else if (type === 'number') {
  	str += obj;
  }
  else if (type === 'string') {
  	str += '"' + obj + '"';
  }
  // if array
  else if (Array.isArray(obj)) {
	str += '[';
	for (var i = 0; i < obj.length; i ++) {
		str += stringifyJSON(obj[i])
		if (i < obj.length - 1) {
			str += ',';
		}
	};
	str += ']';
  }
  // if object
  else if (type === 'object') {
  	var keysCount = Object.keys(obj).length;
  	str += '{';
  	for (var key in obj) {
  		if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
  			continue;
  		}
  		str += '"' + key + '"' + ':';
  		str += stringifyJSON(obj[key]);
  		keysCount -= 1;
  		if (keysCount > 0) {
  			str += ',';
  		}
  	}
  	str += '}';

  }

  return str;

};
