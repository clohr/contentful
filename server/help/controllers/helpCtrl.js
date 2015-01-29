'use strict';

var contentful = require('../../services/contentfulService');
var markdown = require('markdown').markdown;

module.exports = function(req, reply) {
	var client = contentful.createClient();
	var promise;

	if (!client) {
		console.log('Help and Info could not create Contentful client');
		reply.code(500);
	}

	promise = contentful.getContent(client, {
		'sys.id': '2eiKwPdGpqMWo0S6Mc04Q6',
		'locale': 'en-US',
		'include': 1
	});

	promise.then(function (resp) {
		reply.view('./help/views/index', {
			sectionTitle: resp[0].fields.sectionTitle,
			sectionBody: markdown.toHTML(resp[0].fields.sectionBody, 'Maruku')
		});
	}).catch(function (err) {
		console.log(err);
		reply.code(500);
	});
};
