import React from 'react';
import './Keypad.css';

function Keypad(props)
{
	return(
		<div className='keypad'>
    		<button name="7" onClick={(e)=>props.updateNum(e.target.name)}>7</button>
    		<button name="8" onClick={(e)=>props.updateNum(e.target.name)}>8</button>
    		<button name="9" onClick={(e)=>props.updateNum(e.target.name)}>9</button>
    		<button className='op' name="*" onClick={(e)=>props.updateNum(e.target.name)}>x</button>

    		<button name="4" onClick={(e)=>props.updateNum(e.target.name)}>4</button>
    		<button name="5" onClick={(e)=>props.updateNum(e.target.name)}>5</button>
    		<button name="6" onClick={(e)=>props.updateNum(e.target.name)}>6</button>
    		<button className='op' name="-" onClick={(e)=>props.updateNum(e.target.name)}>-</button>

    		<button name="1" onClick={(e)=>props.updateNum(e.target.name)}>1</button>
    		<button name="2" onClick={(e)=>props.updateNum(e.target.name)}>2</button>
    		<button name="3" onClick={(e)=>props.updateNum(e.target.name)}>3</button>
    		<button className='op' name="+" onClick={(e)=>props.updateNum(e.target.name)}>+</button>

    		<button name="0" onClick={(e)=>props.updateNum(e.target.name)}>0</button>
    		<button name="." onClick={(e)=>props.updateNum(e.target.name)}>.</button>
    		<button name="=" onClick={(e)=>props.updateNum(e.target.name)}>=</button>
    		<button className='op' name="/" onClick={(e)=>props.updateNum(e.target.name)}>/</button>

    		<button id="clear" name="C" onClick={(e)=>props.updateNum(e.target.name)}>C</button>
    		<button id="clear" name="CE" onClick={(e)=>props.updateNum(e.target.name)}>CE</button>

        </div>
		)
}

export default Keypad;