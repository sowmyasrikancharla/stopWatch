// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isPlaying: false,
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {isPlaying, minutes, seconds} = this.state
    if (isPlaying === true) {
      if (seconds === 60) {
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          seconds: 0,
        }))
      }
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  onTogglePlay = () => {
    this.setState(prevState => {
      const {isPlaying} = prevState
      return {
        isPlaying: !isPlaying,
      }
    })
  }

  start = () => {
    const {isPlaying} = this.state
    this.setState({isPlaying: true})
  }

  reset = () => {
    this.setState({minutes: 0, seconds: 0, isPlaying: false})
  }

  stop = () => {
    this.setState({isPlaying: false})
  }

  render() {
    const {minutes, seconds, isPlaying} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="main-con">
        <h1 className="head">StopWatch</h1>
        <div className="shadow-con">
          <div className="con1">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-head">Timer</p>
          </div>
          <h3 className="head">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h3>
          <div className="con1">
            <button className="but-start" onClick={this.start}>
              Start
            </button>
            <button className="but-stop" onClick={this.stop}>
              Stop
            </button>
            <button className="but-reset" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
