import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Counter(){
    //count variable and setter
    var [count, setCount] = useState(0); 
    //color variable and setter
    var [color, setColor]=useState("Black");

    //the setter will re-render the page everytime the variable changes! This is what allows the website to change after we do anything on it :D!


    //updates the value of count to be +1 of the last value
    function increaseCount() {
        setCount(count+1);
    } 

    //updates the value of count to be +1 of the last value
    function decreaseCount(){
        setCount(count-1);
    }

    //updates the value of color to be whatever the value of the "target" is
    //the target is whatever html component the function is inside of, in our case the radii
    function onColorChange(event){
        setColor(event.target.value);
    }

    //react function return statement
    return (
        <>
        <div className='App'>
        <h1>Simple React counter :)!</h1>
        {/*onClick happens whever the button is clicked, and trigged the function in curly brackets*/}
        <Button variant="success" onClick={increaseCount}>Increase Count</Button>

        {/*Syntax that allows the color of our count text to be whatever the variable "color" currently is*/}
        <h1 style={{ color: color }}>{count}</h1>

        {/*onClick happens whever the button is clicked, and trigged the function in curly bracket*/}
        <Button variant="danger" onClick={decreaseCount}>Decrease Count</Button>

        {/*Writting a variable name inside of {} allows you to display that variable in your website*/}
        <h3>Counter color: {color}</h3>
        <form>
        {/*html table to organize our options*/}
        <table class='center'>
            {/*tr stands for table rowand td for table data cell*/}
            <tr>
                <td>
                {/*the label tag allows us to write text next to the radio*/}
                <label><input 
                type="radio" 
                value="Red" 
                name= "Color"
                onChange={onColorChange}></input> Red</label>
                </td>

                <td>
                <label><input 
                type="radio" 
                value="Blue"
                name= "Color"
                onChange={onColorChange}></input> Blue</label>
                </td>

                <td>
                <label><input 
                type="radio" 
                value="Green"
                name= "Color"
                onChange={onColorChange}></input> Green</label>
                </td>
            </tr>
        </table>
        </form>
        </div>
        </>
    )
}

export default Counter;
