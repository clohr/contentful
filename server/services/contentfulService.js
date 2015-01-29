'use strict';

var contentful = require('contentful');
var localizedTextId = '7cTN6xPprqSUwiOca068IW';
var defaultLocalization = 'en-US';
var _assign = require('lodash-node/modern/objects/assign');

var _defaults = {
	// @TODO: you will need to sign up for a free contentful account and pass these into your app or load them via bash
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	space: process.env.CONTENTFUL_SPACE_KEY
};

var contentfulService = {
	/**
	 * Returns an instance of Contentful client
	 * @memberof: fp/services/contentfulService
	 * @public
	 * @method
	 * @param {Object} opts: options to filter Contentful results
	 * @returns {Object} Promise
	 */
	createClient: function createClient(opts) {
		var _opts = _assign({}, _defaults, opts);
		return contentful.createClient(_opts);
	},
	/**
	 * Returns a promise with either an array of entries on success or an error on failure
	 * @memberof: fp/services/contentfulService
	 * @public
	 * @method
	 * @param {Object} client: instance of Contentful client
	 * @param {Object} opts: options to filter Contentful results
	 * @returns {Object} Promise
	 */
	getContent: function getContent(client, opts) {
		var promise = null;
		if (client && typeof client.entries === 'function') {
			promise = client.entries(opts);
		} else {
			console.log('Contentful client is not a function');
		}
		return promise;
	},
	/**
	 * Returns a promise with either an array of localized text entries on success or an error on failure
	 * @memberof: fp/services/contentfulService
	 * @public
	 * @method
	 * @param {Object} client: instance of Contentful API client
	 * @param {String} locale: localization string to determine version of the dictionary
	 * @returns {Object} Promise
	 */
	getDictionary: function getDictionary(client, locale) {
		var _locale = defaultLocalization || locale;
		return this.getContent(client, {
			'content_type': localizedTextId,
			'locale': _locale
		});
	}
};

/**
 * Free People Contentful Service
 * @module fp/services/contentfulService
 */
module.exports = contentfulService;
