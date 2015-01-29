'use strict';

var contentful = require('../../services/contentfulService');

module.exports = function(req, reply) {
	var locale = 'en-US';
	var client = contentful.createClient();
	var promise;

	if (!client) {
		console.log('Localized Text cannot create Contentful client');
		reply.code(500);
	}

	promise = contentful.getDictionary(client, locale);

	promise.then(function (resp) {
		var json = {};
		resp.forEach(function (obj) {
			var field = {};
			field.displayText = obj.fields.displayText;
			json[obj.fields.slug] = field;
		});
		return reply(json);
	}).catch(function (err) {
		console.log(err);
		return reply.code(500);
	});
};
