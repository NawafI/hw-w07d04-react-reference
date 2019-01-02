import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LyfeCycleInfo from './LyfeCycleInfo';
import JSXInfo from './JSXInfo';


class ComponentInfo extends Component {
    render(){
        return(
<div>

<h1 className="compon">Components Info</h1>
            <h6 className ="Content">
            Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
            Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
            </h6>
           <div class="container">
               
            <PropsInfo/>
            <StateInfo/>
            <LyfeCycleInfo/>
               </div> 
            <JSXInfo/>
        
</div>
            
        )
    }
}

export default ComponentInfo;