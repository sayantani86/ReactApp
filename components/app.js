// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
	baseUrl: 'lib',
    paths: {
    	react: 'react',
		reactDOM: 'react-dom'
    }
});

require(['react', 'react-dom'], function(React, ReactDOM) {

    const element = (
  		<h1 className="greeting">
    		Hello, AAAAAAAAAAAAAA!
  		</h1>
	);

    var Application = React.createClass({
		
		render : function () {
			return (<div className='test'>{element}</div>);
		}
	});

    ReactDOM.render(
			<Application />,
			document.getElementById('wrapper')
	);
	

});