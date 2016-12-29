'use strict';

module.exports = function (config) {
	return function (props, context, flow) {
		// Send something to the console log
		console.log(
			'@@@ Running example logger policy @@@',
			'\nURI:\n' + context.request.uri,
			'\nHeaders:\n',
			context.request.headers
		);

		// Continue on with the request / response
		flow.proceed();
	}
}
