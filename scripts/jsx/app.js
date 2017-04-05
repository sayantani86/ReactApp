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
              <h1 className="greeting">
                  Hello {formatName(this.props.data.user)}!
              </h1>
              <h2>{this.state.date}</h2>
          </div>
        );
    };
  }

  var data = {
    user: {
      firstName: 'Punki',
      lastName: 'Dasgupta'
    }
  }

  const element1 = <Clock data={data} />;

  ReactDOM.render(
    element1,
    document.getElementById('wrapper')
  );
}

setInterval(display, 1000);

});