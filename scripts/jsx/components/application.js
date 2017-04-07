
define(['react'], function(React){

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class UserPanel extends React.Component {
	render () {
		return (
			<div className="col-md-4">
				<h4 className="greeting">
	                    Welcome {formatName(this.props.user)}!
	            </h4>
			</div>
		);
	}
}

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault()
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn
		}));
		
	}

	render() {
		return (
			<div>
				<button type="button" className="btn btn-primary" onClick={this.handleClick}>
					{this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'}
				</button>
			</div>
		);
	}
}

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

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
          <div>
			<h4>{this.state.date}</h4>
          </div>
        );
      };

  }

class DatePanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {showClock: true, isToggleOn: true}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault()
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
			showClock: !prevState.showClock
		}));
	}

	render () {
		return (
			<div className="col-md-8">
				<div className="row">

					<div className="col-md-4">
						<button type="button" className="btn btn-primary" onClick={this.handleClick}>
							{this.state.isToggleOn ? 'Show Clock' : 'Hide Clock'}
						</button>
					</div>

					<div className="col-md-4">
						{this.state.showClock ? <Clock /> : 'Hide Clock'}
					</div>
				</div>
			</div>
		);
	}
}


class Header extends React.Component {
	render () {
		return (
			<div>
				<UserPanel user={this.props.data.user} />
				<DatePanel />
			</div>
		);
	}
}

class Content extends React.Component {
	
}


var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Header data={data} />
			</div>
		);
	}
});



  var data = {
    user: {
      firstName: 'Sayantani',
      lastName: 'Dasgupta'
    }
  }

  const element1 = <App data={data} />;
  return element1

});