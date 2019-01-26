//in order to show something in the react app

//Step 1) import the react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//we have to import every library that we want to use in the prooject
//diagram on how to use it:
//import(we want to get code from some other file or dependency) React(the variable we want to assign this import to) from( we are aabout to specify the name of the library or file we are importing from) 'react'(the name of the dependency or path to the file we are importing)




//Step 2) Create a react component
//a react component is a function or a class
//that produces HTML to show to the user
//and to handle feedback from the user(use event handlers)

const App = () => { //arrow function instead of the function keyword
    //classes and component always start with capital leters
    return <div>Hi there!</div>;
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