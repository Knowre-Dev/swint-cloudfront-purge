# swint-cloudfront-purge

[![Greenkeeper badge](https://badges.greenkeeper.io/Knowre-Dev/swint-cloudfront-purge.svg)](https://greenkeeper.io/)
AWS Cloudfront purge function for Swint batch task manager(swint-task)

**Warning: This is not the final draft yet, so do not use this until its official version is launched**

## Installation
```sh
$ npm install --save swint-cloudfront-purge
```

## Options
* `code` : `String`, default: `''`
* `paths` : `Array`, default: `[]`
* `awsInfo`
  * `key` : `String`, default: `''`
  * `secret` : `String`, default: `''`

## Usage
```javascript
swintCloudfrontPurge({
	code: 'AAAAAAAAAAAAAA',
	paths: ['/foo/*', '/bar/*'],
	awsInfo: {
		key: 'myKey',
		secret: 'mySecret'
	}
}, function(err, results) {
	// ...
});
```
