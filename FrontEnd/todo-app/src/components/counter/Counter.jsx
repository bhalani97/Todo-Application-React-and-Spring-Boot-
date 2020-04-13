import React,{Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(){
        super(); //Error 1  if you want to use this then call super()
        this.state={
            counter : 0
 
        }
        this.increment = this.increment.bind(this) //if you want to use this in method you have to first bind it to class
        this.decrement = this.decrement.bind(this) //if you want to use this in method you have to first bind it to class
        this.reset = this.reset.bind(this) //if you want to use this in method you have to first bind it to class
    }

    render() {
        return (
          <div className="counter"> 
           <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
           <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
           <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
           <div><button className="reset" onClick={this.reset}>Reset</button></div>
           <span className="count">{this.state.counter }</span>
          </div>
        );
      }

      reset(){
          this.setState(
              () =>{
                  return {counter:0}
              }
          )
      }
      increment(by){ //Update state counter ++
     
        this.setState(
            (prevState)=> {
        return {counter : prevState.counter+ by}
        });
    }  

    decrement(by){ //Update state counter ++
        
        this.setState(
            (prevState)=> {
        return {counter : prevState.counter- by}
        });
    }  
}

class  CounterButton extends Component{

    //Define the initial state in constructor
    //state => counter 0
    // constructor(){
        // super(); //Error 1  if you want to use this then call super()
        // this.state={
        //     counter : 0
 
        // }
        // this.increment = this.increment.bind(this) //if you want to use this in method you have to first bind it to class
        // this.decrement = this.decrement.bind(this) //if you want to use this in method you have to first bind it to class
    // }
    render(){
        // const style = {fontSize:"50px",padding: "15px 30px"}; Inline Style
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }

    // increment(){ //Update state counter ++
    //     //console.log('Increment')
    //     this.setState({
    //         counter : this.state.counter+ this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);
    // }  
      
    
    // decrement(){ //Update state counter ++
    //     //console.log('Increment')
    //     this.setState({
    //         counter : this.state.counter- this.props.by
    //     });
    //     this.props.decrementMethod(this.props.by);
    // }  
      
}

Counter.defaultProps = {
    by : 1
}
Counter.propsTypes = {
    by : PropTypes.number
}

export default Counter