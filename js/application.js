
define(['react'], function (React) {

	const element = React.createElement(
		"h1",
		{ className: "greeting" },
		"Hello, AAAAAAAAAAAAAA!"
	);

	var App = React.createClass({
		displayName: "App",


		render: function () {
			return element;
		}
	});
	return App;
});