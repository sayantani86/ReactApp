'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

requirejs.config({
  baseUrl: 'scripts/lib',

  paths: {
    react: 'react',
    reactDOM: 'react-dom',
    app: '../jsx/components'
  }
});

require(['react', 'react-dom'], function (React, ReactDOM) {

  var user = {
    firstName: 'Sayantani',
    lastName: 'Dasgupta'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  function display() {

    var element = React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello ',
        formatName(user),
        '!'
      ),
      React.createElement(
        'h2',
        null,
        new Date().toLocaleTimeString()
      )
    );

    var Clock = function (_React$Component) {
      _inherits(Clock, _React$Component);

      function Clock() {
        _classCallCheck(this, Clock);

        return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));
      }

      _createClass(Clock, [{
        key: 'render',
        value: function render() {
          return React.createElement(
            'div',
            null,
            React.createElement(
              'h1',
              { className: 'greeting' },
              'Hello ',
              formatName(this.props.data.user),
              '!'
            ),
            React.createElement(
              'h2',
              null,
              this.props.data.date
            )
          );
        }
      }]);

      return Clock;
    }(React.Component);

    var data = {
      date: new Date().toLocaleTimeString(),
      user: {
        firstName: 'Punki',
        lastName: 'Dasgupta'
      }
    };

    var element1 = React.createElement(Clock, { data: data });

    ReactDOM.render(element1, document.getElementById('wrapper'));
  }

  setInterval(display, 1000);
});