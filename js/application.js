'use strict';

define(['react'], function (React) {

	var App = React.createClass({
		displayName: 'App',


		render: function render() {
			return React.createElement(
				'div',
				null,
				'Hello World'
			);
		}
	});
	return App;
});