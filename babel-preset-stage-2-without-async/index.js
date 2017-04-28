
var modify = require('modify-babel-preset');

module.exports = modify('stage-2', {
	'transform-async-to-generator': false,
});
