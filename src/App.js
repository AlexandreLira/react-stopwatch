import React, { Component } from 'react'
import stopwatch from './assets/cronometro.png'
import './App.css'
class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            number: 0,
            button: 'Start'
        }
        this.timer = null

        this.start = this.start.bind(this)
        this.clean = this.clean.bind(this)
    }

    start(){
        if(this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null
            this.setState({button: 'Start'})
        } else {
            this.timer = setInterval( () => {
                let state = this.state
                state.number += 0.1
                this.setState(state)
            }, 100)
            this.setState({button: 'Stop'})
        }
    }

    clean(){
        if(this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null
        }
        let state = this.state
        state.number = 0
        state.button = 'Start'
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <img src={stopwatch}/>
                <span className="timer">{this.state.number.toFixed(1)}</span>
                <div className>
                    <Button title={this.state.button} onClick={this.start}/>
                    <Button title="Clean" onClick={this.clean}/>
                </div>
            </div>
        )
    }
}

class Button extends Component {
    render() {
        return (
            <button className="button" onClick={this.props.onClick}>{this.props.title}</button>
        )
    }
}

export default App