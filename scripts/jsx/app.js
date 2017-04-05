requirejs.config({
	  baseUrl: 'scripts/lib',

    paths: {
    	react: 'react',
		  reactDOM: 'react-dom',
      app: '../jsx/components'
    }
});

require(['react', 'react-dom', 'app/application'], function(React, ReactDOM, App) {

const user = {
  firstName: 'Sayantani',
  lastName: 'Dasgupta'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  	<h1 className="greeting">
    		Hello {formatName(user)}!
  	</h1>
);

class HelloMessage extends React.Component {
  	render() {
    		return <div>{element}</div>;
  	};
}

ReactDOM.render(
		<HelloMessage />,
		document.getElementById('wrapper')
);
	

});