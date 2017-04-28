
var modify = require('modify-babel-preset');

module.exports = modify('stage-0', {
	'transform-async-to-generator': false,
});
