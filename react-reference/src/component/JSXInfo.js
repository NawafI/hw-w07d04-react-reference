import React, { Component } from 'react';

class JSXInfo extends Component {
    render(){
        return(
<div>

<h1 className="title">JSX</h1>
            <h4 className ="Content">
            The first part of a JSX tag determines the type of the React element.
Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX expression, Foo must be in scope.</h4>
</div>
            
        )
    }
}








export default JSXInfo;