// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
	baseUrl: 'lib',
	paths: {
		react: 'react',
		reactDOM: 'react-dom'
	}
});

require(['react', 'react-dom'], function (React, ReactDOM) {

	const element = React.createElement(
		'h1',
		{ className: 'greeting' },
		'Hello, AAAAAAAAAAAAAA!'
	);

	var Application = React.createClass({
		displayName: 'Application',


		render: function () {
			return React.createElement(
				'div',
				{ className: 'test' },
				element
			);
		}
	});

	ReactDOM.render(React.createElement(Application, null), document.getElementById('wrapper'));
});