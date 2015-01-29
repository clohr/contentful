'use strict';

var contenfulService = require('../../server/services/contentfulService');
var should = require('chai').should();

suite('Contentful Service createClient', function() {
	test('Contentful client is unsuccessfully created', function() {
		var client = contenfulService.createClient({
			accessToken: 123
		});
		return client.entries.should.not.be.a.Function;
    });
	test('Contentful client is successfully created', function() {
		var client = contenfulService.createClient();
		return client.entries.should.be.a.Function;
    });
});

suite('Contentful Service getContent', function () {
	test('Contentful promise returns null when client is null', function() {
		var client = null;
		var promise = contenfulService.getContent(client);
		return should.equal(promise, null);
    });
	test('Contentful content returned', function() {
		var client = contenfulService.createClient();
		var promise = contenfulService.getContent(client, 'en-US');
		promise.then(function (resp) {
			return resp.should.be.a.Object;
		});
    });
});

suite('Contentful Service getDictionary', function () {
	test('Contentful dictionary content returned', function() {
		var client = contenfulService.createClient();
		var promise = contenfulService.getDictionary(client, 'en-US');
		promise.then(function (resp) {
			return resp.should.be.a.Object;
		});
    });
    test('Contentful dictionary content returned using default localization', function() {
		var client = contenfulService.createClient();
		var promise = contenfulService.getDictionary(client);
		promise.then(function (resp) {
			return resp.should.be.a.Object;
		});
    });
});