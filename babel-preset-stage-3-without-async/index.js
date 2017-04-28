
var modify = require('modify-babel-preset');

module.exports = modify('stage-3', {
	'transform-async-to-generator': false,
});
