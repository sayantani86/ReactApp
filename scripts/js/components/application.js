'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['react'], function (React) {

	function formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	var UserPanel = function (_React$Component) {
		_inherits(UserPanel, _React$Component);

		function UserPanel() {
			_classCallCheck(this, UserPanel);

			return _possibleConstructorReturn(this, (UserPanel.__proto__ || Object.getPrototypeOf(UserPanel)).apply(this, arguments));
		}

		_createClass(UserPanel, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'col-md-4' },
					React.createElement(
						'h4',
						{ className: 'greeting' },
						'Welcome ',
						formatName(this.props.user),
						'!'
					)
				);
			}
		}]);

		return UserPanel;
	}(React.Component);

	var Button = function (_React$Component2) {
		_inherits(Button, _React$Component2);

		function Button(props) {
			_classCallCheck(this, Button);

			var _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

			_this2.state = { isToggleOn: true };
			_this2.handleClick = _this2.handleClick.bind(_this2);
			return _this2;
		}

		_createClass(Button, [{
			key: 'handleClick',
			value: function handleClick(e) {
				e.preventDefault();
				this.setState(function (prevState) {
					return {
						isToggleOn: !prevState.isToggleOn
					};
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ type: 'button', className: 'btn btn-primary', onClick: this.handleClick },
						this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'
					)
				);
			}
		}]);

		return Button;
	}(React.Component);

	var Clock = function (_React$Component3) {
		_inherits(Clock, _React$Component3);

		function Clock(props) {
			_classCallCheck(this, Clock);

			var _this3 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

			_this3.state = { date: new Date().toLocaleTimeString() };
			return _this3;
		}

		_createClass(Clock, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this4 = this;

				this.timerID = setInterval(function () {
					return _this4.tick();
				}, 1000);
			}
		}, {
			key: 'tick',
			value: function tick() {
				this.setState({
					date: new Date().toLocaleTimeString()
				});
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearInterval(this.timerID);
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'h4',
						null,
						this.state.date
					)
				);
			}
		}]);

		return Clock;
	}(React.Component);

	var DatePanel = function (_React$Component4) {
		_inherits(DatePanel, _React$Component4);

		function DatePanel(props) {
			_classCallCheck(this, DatePanel);

			var _this5 = _possibleConstructorReturn(this, (DatePanel.__proto__ || Object.getPrototypeOf(DatePanel)).call(this, props));

			_this5.state = { showClock: true, isToggleOn: true };
			_this5.handleClick = _this5.handleClick.bind(_this5);
			return _this5;
		}

		_createClass(DatePanel, [{
			key: 'handleClick',
			value: function handleClick(e) {
				e.preventDefault();
				this.setState(function (prevState) {
					return {
						isToggleOn: !prevState.isToggleOn,
						showClock: !prevState.showClock
					};
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'col-md-8' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-md-4' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary', onClick: this.handleClick },
								this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'
							)
						),
						React.createElement(
							'div',
							{ className: 'col-md-4' },
							this.state.showClock ? React.createElement(Clock, null) : 'Hide Clock'
						)
					)
				);
			}
		}]);

		return DatePanel;
	}(React.Component);

	var Header = function (_React$Component5) {
		_inherits(Header, _React$Component5);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(UserPanel, { user: this.props.data.user }),
					React.createElement(DatePanel, null)
				);
			}
		}]);

		return Header;
	}(React.Component);

	var Content = function (_React$Component6) {
		_inherits(Content, _React$Component6);

		function Content() {
			_classCallCheck(this, Content);

			return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
		}

		return Content;
	}(React.Component);

	var App = React.createClass({
		displayName: 'App',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(Header, { data: data })
			);
		}
	});

	var data = {
		user: {
			firstName: 'Sayantani',
			lastName: 'Dasgupta'
		}
	};

	var element1 = React.createElement(App, { data: data });
	return element1;
});