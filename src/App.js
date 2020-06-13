import React from 'react';
import './App.css';
import Keypad from './Keypad'

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      currentNum:''
    };
    this.updateNum = this.updateNum.bind(this);
  }

  evaluate() 
  {
    try {
    const val = this.state.currentNum;
    // eslint-disable-next-line
    const result = eval(val);
    console.log(result);
    this.setState({currentNum:result});
  }
  catch(e)
  {
    this.setState({currentNum:"ERROR"});
  }
  }

  updateNum(num)
  {   
      console.log("hello");
      if(num==="=")
      {
          console.log(this.state.currentNum);
          this.evaluate();
      }
      else if(num==="C")
      {
        console.log(this.state.currentNum);
        this.setState({currentNum:''});
      }
      else if(num=="CE")
      {
        this.setState({currentNum:this.state.currentNum.slice(0,-1)});
      }
      else
      {
        const val = this.state.currentNum + num;
        this.setState({currentNum:val});
      }
  }

  render()
  {
    return (
        <div className="calci">
          <div className="calci-head">
            <form id="calci-form">
              <input type="text" value={this.state.currentNum}></input>
            </form>
          </div>
          <Keypad updateNum={this.updateNum}></Keypad>
        </div>
      );
  }
}

export default App;
