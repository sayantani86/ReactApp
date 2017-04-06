
define(['react'], function(React){

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {isToggleOn: true};
		this.buttonText = this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn
		}));
		this.buttonText = this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'
	}

	render() {
		return (
			<div>
				<button type="button" className="btn btn-primary" onClick={this.handleClick}>
					{this.buttonText}
				</button>
			</div>
		);
	}
}

class UserInfo extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<h4 className="greeting">
	                    Welcome {formatName(this.props.user)}!
	            	</h4>
				</div>
				<div className="col-md-4">
					<Button />
				</div>
			</div>
		);
	}
}

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<UserInfo user={this.props.data.user} />
			</div>
		);
	}
});

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    tick() {
        this.setState({
           date: new Date().toLocaleTimeString()
        });
    }

    handleClick(e) {
        e.preventDefault()
        console.log('clicked')
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
          <div className="container">

          	<UserInfo user={this.props.data.user} />

            <h2>{this.state.date}</h2>

            <Button buttonText="Change Message" />
            <a href="#" onClick={this.handleClick}>Click Me</a>

          </div>
        );
      };

  }

  var data = {
    user: {
      firstName: 'Sayantani',
      lastName: 'Dasgupta'
    }
  }

  const element1 = <App data={data} />;
  return element1

});