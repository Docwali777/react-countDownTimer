import React, { Component } from "react";
import "./App.css"
class Clock extends Component {
  constructor(props){
    super(props)
    this.state ={
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0

    }
  }
  componentWillMount(){
    this.getTimeuntil(this.props.deadline)

  }
  componentDidMount(){
  setInterval(()=>{this.getTimeuntil(this.props.deadline)}, 1000)

  }
    getTimeuntil(deadline){
const time = Date.parse(deadline) - Date.parse(new Date())
const seconds = Math.floor((time/1000) % 60);
const minutes = Math.floor((time/(1000 *60)) % 60)
const hours = Math.floor((time/(1000 * 60 * 60 ))% 24);
const days = Math.floor(time/(1000 * 60 * 60 *24))


this.setState({
  days, hours: hours < 10 & hours >0 ? `0${hours}`: hours, minutes: minutes < 10 && minutes > 0 ? `0${minutes}` : minutes, seconds: seconds < 10 && seconds > 0 ? `0${seconds}` : seconds

})

  }


  render(){
    return (
      <div>
        <div className="Class-days"> {this.state.days} Days</div>
        <div className="Class-hours">{this.state.hours} Hours</div>
        <div className="Class-minutes">{this.state.minutes} min</div>
        <div className="Class-seconds">{this.state.seconds} sec</div>
      </div>
    )
  }
}
export default Clock;
