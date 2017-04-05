'use strict';

define(['react'], function (React) {

  var user = {
    firstName: 'Sayantani',
    lastName: 'Dasgupta'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  var element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    formatName(user),
    '!'
  );

  var App = React.createClass({
    displayName: 'App',

    render: function render() {
      return React.createElement(
        'div',
        null,
        element
      );
    }
  });

  return App;
});