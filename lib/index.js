'use strict';

var cloudfront = require('cloudfront'),
	swintHelper = require('swint-helper'),
	defaultize = swintHelper.defaultize;

module.exports = function(options, callback) {
	defaultize({
		code: '',
		paths: [],
		awsInfo: {
			key: '',
			secret: ''
		}
	}, options);

	return proceed(options, callback);
};

var proceed = function(options, callback) {
	if(callback === undefined) {
		var msg = 'swint-cloudfront-purge function needs callback';
		print(4, msg);
		throw new Error(msg);
	}

	var cf = cloudfront.createClient(options.awsInfo.key, options.awsInfo.secret);

	cf.createInvalidation(options.distID, new Date() - 1, options.paths, function(err, res) {
		if(err) {
			print(4, err);
			return;
		}

		callback(null, res);
	});
};
