//in order to show something in the react app

//Step 1) import the react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//we have to import every library that we want to use in the prooject
//diagram on how to use it:
//import(we want to get code from some other file or dependency) React(the variable we want to assign this import to) from( we are aabout to specify the name of the library or file we are importing from) 'react'(the name of the dependency or path to the file we are importing)


function getFunctionText() {
    return 'Click on me!'
}

//Step 2) Create a react component
//a react component is a function or a class
//that produces HTML to show to the user
//and to handle feedback from the user(use event handlers)

const App = () => { //arrow function instead of the function keyword
    //classes and component always start with capital leters

    const buttonText = 'click me!'; //you can reference js variables inside of jsx by setting them between {}

    return (
    <div>
        <label className="label" htmlFor="name">
            Enter Name:
        </label> {/*in jsx whne creating a class it should be callesd 'className' not just 'class' */}
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white', fontSize: '20px'}}>
            {buttonText}
        </button>
    </div>
    );
};
//this is a function component


//Step 3)Take the react component and show it on the screen

ReactDOM.render(

    <App />,
    document.querySelector('#root') //thia is the second argument
    //the second argument is a reference of a DOM element that exist in the html file
);


/**
 * jsx is not html but a special dialect of js
*/