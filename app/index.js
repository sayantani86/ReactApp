var React = require('react')
var ReactDOM = require('react-dom')

const element = (
  		<h1 className="greeting">
    		Hello, World!
  		</h1>
);

var Main = React.createClass({
	render: function() {
		return (
			element
		)
	}

});

ReactDOM.render(<Main />, document.getElementById('app'))