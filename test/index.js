var path = require('path'),
	fs = require('fs'),
	os = require('os'),
	assert = require('assert'),
	swintCloudfrontPurge = require('../lib');

global.swintVar.printLevel = 5;

describe('Cloudfront purge', function() {
	this.timeout(20000);
	
	it('Error when no callback', function() {
		assert.throws(function() {
			swintCloudfrontPurge({});
		});
	});

	it('Simple case', function(done) {
		var credPath = path.join(process.env.HOME, '.swint', 'swint-cloudfront-purge-test.json'),
			cred;

		try {
			fs.accessSync(credPath);
			cred = JSON.parse(fs.readFileSync(credPath));
		} catch(e) {
			cred = {
				key: process.env.SWINT_CLOUDFRONT_PURGE_TEST_KEY,
				secret: process.env.SWINT_CLOUDFRONT_PURGE_TEST_SECRET,
				distID: process.env.SWINT_CLOUDFRONT_PURGE_TEST_DISTID,
			};
		}

		swintCloudfrontPurge({
			distID: cred.distID,
			paths: ['/*'],
			awsInfo: {
				key: cred.key,
				secret: cred.secret
			}
		}, function(err, res) {
			assert.equal(res.status, 'InProgress');
			done();
		});
	});
});
