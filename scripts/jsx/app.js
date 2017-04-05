requirejs.config({
	  baseUrl: 'scripts/lib',

    paths: {
    	react: 'react',
		  reactDOM: 'react-dom',
      app: '../jsx/components'
    }
});

require(['react', 'react-dom'], function(React, ReactDOM) {

const user = {
  firstName: 'Sayantani',
  lastName: 'Dasgupta'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function display(){

  const element = (
    <div>
        <h1 className="greeting">
            Hello {formatName(user)}!
        </h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
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
}

setInterval(display, 1000);

});