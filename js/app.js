'use strict';

// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
	baseUrl: 'lib',
	paths: {
		react: 'react',
		reactDOM: 'react-dom'
	}
});

require(['react', 'react-dom'], function (React, ReactDOM) {

	ReactDOM.render(React.createElement(
		'h1',
		null,
		'Hello, world!'
	), document.getElementById('wrapper'));
});