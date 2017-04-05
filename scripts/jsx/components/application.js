
define(['react'], function(React){

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

	var App = React.createClass({
  		render: function(){
    		return (
    			<div>{element}</div>
    		);
    	}
  	});

	return App
})