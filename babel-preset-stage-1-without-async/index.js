
var modify = require('modify-babel-preset');

module.exports = modify('stage-1', {
	'transform-async-to-generator': false,
});
