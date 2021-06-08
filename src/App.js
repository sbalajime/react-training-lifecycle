import React, {Component} from 'react';

class App extends Component {
  constructor(){
    console.log('inside constructor')
    super();
    this.state = {
      temperature: '',
      value: 0,
    }
  }

  componentDidMount() {
    console.log('inside componentDidMount')
    //Add event listener
    //Api fetch
    //Url params
    fetch('https://goweather.herokuapp.com/weather/thoothukudi')
    .then(res => res.json())
    .then(res => {
      // console.log('data', res);
      this.setState({temperature: res.temperature})
    })
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    console.log('window.innerWidth', window.innerWidth)
  }

  componentDidUpdate(prevProps, prevState){
    console.log('inside componentDidUpdate', prevState, 'current', this.state)
    if(prevState.temperature !== this.state.temperature) {
      alert('State updated')
      this.setState({value: 10})
    }

  }

  componentWillUnmount () {
    //Show alert to user
    //Remove event listener
    window.removeEventListener('resize', this.resize)
  }

  handleClick = () => {

    
  }



  render(){
    console.log('inside render')
    return(<div>
      <Temperature temperature={this.state.temperature}/>
      <button onClick={this.handleClick}>Submit</button>
      <button onClick={() => this.setState({value: 20})}>Update Value</button>
      </div>)
  }
}

class Temperature extends Component {
  render(){
    // console.log('state', this.state, 'props')
    return <div>{this.props.temperature}</div>
  }
}

export default App;


//constructor
//render
//componentDidMount
//render
// componentDidUpdate
// componentWillUnmount