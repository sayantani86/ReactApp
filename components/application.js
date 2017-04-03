
define(['react'], function(React){

	const element = (
  		<h1 className="greeting">
    		Hello, AAAAAAAAAAAAAA!
  		</h1>
	);


	var App = React.createClass({
		
		render : function () {
			return (element);
		}
	});
	return App
})