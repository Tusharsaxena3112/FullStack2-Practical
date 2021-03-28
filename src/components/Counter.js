import React, { Component } from 'react'
import '../counter.css';

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            value:0
        }
    }
    increase = () =>{
        this.setState({
            value : this.state.value + 1
        })
    }
    decrease = () =>{
        this.setState({
            value: this.state.value - 1
        })
    }
    reset = () =>{
        this.setState({
            value : this.props.value
        })
    }
    render() {
        return (
            <>
             <h1>Ques-1</h1>
             <hr/>
             <h2>{this.state.value}</h2>
             <div className="btn">
                 <button onClick={this.increase}>
                    Increase
                 </button>
                 <button onClick={this.reset}>
                    Reset
                 </button>
                 <button onClick={this.decrease}>
                    Decrease
                 </button>
             </div>
            </>
        )
    }
}
