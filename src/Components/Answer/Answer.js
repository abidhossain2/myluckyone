import React from 'react';

const Answer = () => {
    return (
        <div>
            <h3>How react works</h3>
            <p>React creates a DOM like a browser's dome called a virtual dome. But basically it is a JavaScript object. When the user makes a change in the DOM, React compares the original dome with the virtual DOM and sees what has changed. React does not render the whole DOM but only changes certain things.
            </p>
            <h3>How usestate works</h3>
            <p>Usestate returns two values. The first is the initial value and the second is a function. The function of this function is to change the initial value. If we call this function on a button, the initial value will change every time the button is clicked.</p>
        </div>
    );
};

export default Answer;