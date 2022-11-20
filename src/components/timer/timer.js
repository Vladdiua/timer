import React, {Component} from "react";
import "./timer.css";

class Timer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            pause: false,
            stop: false,
            started: false,
            milliseconds: '0000',
            seconds: '00',
            minutes: '00',
        };

        this.onTimerStart = this.onTimerStart.bind(this);
        this.onTimerStop = this.onTimerStop.bind(this);
        this.onTimerPause = this.onTimerPause.bind(this);

    }

    runTimer(){
        setInterval(() => {
            if(this.state.pause === false && this.state.stop === false){

                if(this.state.seconds === 60){
                    if(this.state.minutes < 9){
                        this.setState(prevState => ({
                            seconds: '00',
                            minutes: `0${this.state.minutes*1+1}`
                        }));
                    } else {
                        this.setState(prevState => ({
                            seconds: '00',
                            minutes: this.state.minutes+1
                        }));
                    }

                }

                if(this.state.milliseconds === 1000){
                    if(this.state.seconds < 9){
                        this.setState(prevState => ({
                            milliseconds: '0000',
                            seconds: `0${this.state.seconds*1+1}`
                        }));
                    } else {
                        this.setState(prevState => ({
                            milliseconds: '0000',
                            seconds: this.state.seconds * 1 + 1
                        }));
                    }
                }

                if(this.state.milliseconds === 1000){
                    this.setState(prevState => ({
                        milliseconds: '0000'
                    }));
                } else if(this.state.milliseconds < 9){
                    this.setState(prevState => ({
                        milliseconds: `000${this.state.milliseconds*1+1}`
                    }));

                } else if (this.state.milliseconds > 9 && this.state.milliseconds < 99){
                    this.setState(prevState => ({
                        milliseconds: `00${this.state.milliseconds*1+1}`
                    }));
                } else if (this.state.milliseconds > 90 && this.state.milliseconds < 999){
                    this.setState(prevState => ({
                        milliseconds: `0${this.state.milliseconds*1+1}`
                    }));
                } else {
                    this.setState(prevState => ({
                        milliseconds: this.state.milliseconds*1+1
                    }));
                }


            }

        }, 1)
    }

    onTimerStart(){

        this.setState(prevState => ({
            started: true
        }));

        this.runTimer();

        if(this.state.stop === true || this.state.pause === true){
            this.setState(prevState => ({
                stop: false,
                pause: false
            }));
        }

    }

    onTimerStop(){

        this.setState(prevState => ({
            milliseconds: '0000',
            seconds: '00',
            minutes: '00',
            stop: true,
            started: false
        }));
    }

    onTimerPause(){
        this.setState(prevState => ({
            pause: true,
            started: false
        }));
    }

    render() {
        return (
            <div className="timerContainer">
                Timer
                <div className="timer">
                    <div className="minutes">{this.state.minutes}</div>
                    :
                    <div className="seconds">{this.state.seconds}</div>
                    :
                    <div className="seconds">{this.state.milliseconds}</div>
                </div>
                <div className="buttons">
                    {this.state.started === false ? <button onClick={this.onTimerStart}>Start</button> : ""}
                    {this.state.started === true ? <button onClick={this.onTimerStop}>Stop</button> : ""}
                    <button onClick={this.onTimerPause}>Pause</button>
                </div>
            </div>
        );
    }

}

export default Timer;
