import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Clock from "./Clock";



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deadline: "December 25, 2017",
      newDeadLine: ""
    }
  }

  changeDeadLine(){

    if(this.state.newDeadLine.length > 0){
      this.setState({deadline: this.state.newDeadLine})
    }
  }
  render() {
    return (
      <div className="App">
        <div>

          <div className="App-title">Count Down to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline} />
        </div>
        <div >
          <input type="text" placeholder="new time"
              onChange={(event)=>this.setState({newDeadLine: event.target.value})}
          />
          <button onClick={()=>this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById("root"))
