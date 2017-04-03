// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
	baseUrl: 'lib',
    paths: {
    	react: 'react',
		reactDOM: 'react-dom'
    }
});

require(['react', 'react-dom'], function(React, ReactDOM) {

    ReactDOM.render(
			<h1>Hello, Sayantani!</h1>,
			document.getElementById('wrapper')
	);
	

});