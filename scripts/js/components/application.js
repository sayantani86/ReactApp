'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['react'], function (React) {

	function formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);

		function Button(props) {
			_classCallCheck(this, Button);

			var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

			_this.state = { isToggleOn: true };
			_this.buttonText = _this.state.isToggleOn ? 'Show Clock' : 'Hide Clock';
			_this.handleClick = _this.handleClick.bind(_this);
			return _this;
		}

		_createClass(Button, [{
			key: 'handleClick',
			value: function handleClick() {
				this.setState(function (prevState) {
					return {
						isToggleOn: !prevState.isToggleOn
					};
				});
				this.buttonText = this.state.isToggleOn ? 'Show Clock' : 'Hide Clock';
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
						this.buttonText
					)
				);
			}
		}]);

		return Button;
	}(React.Component);

	var UserInfo = function (_React$Component2) {
		_inherits(UserInfo, _React$Component2);

		function UserInfo() {
			_classCallCheck(this, UserInfo);

			return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
		}

		_createClass(UserInfo, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-md-8' },
						React.createElement(
							'h4',
							{ className: 'greeting' },
							'Welcome ',
							formatName(this.props.user),
							'!'
						)
					),
					React.createElement(
						'div',
						{ className: 'col-md-4' },
						React.createElement(Button, null)
					)
				);
			}
		}]);

		return UserInfo;
	}(React.Component);

	var App = React.createClass({
		displayName: 'App',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(UserInfo, { user: this.props.data.user })
			);
		}
	});

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
			key: 'handleClick',
			value: function handleClick(e) {
				e.preventDefault();
				console.log('clicked');
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
					{ className: 'container' },
					React.createElement(UserInfo, { user: this.props.data.user }),
					React.createElement(
						'h2',
						null,
						this.state.date
					),
					React.createElement(Button, { buttonText: 'Change Message' }),
					React.createElement(
						'a',
						{ href: '#', onClick: this.handleClick },
						'Click Me'
					)
				);
			}
		}]);

		return Clock;
	}(React.Component);

	var data = {
		user: {
			firstName: 'Sayantani',
			lastName: 'Dasgupta'
		}
	};

	var element1 = React.createElement(App, { data: data });
	return element1;
});