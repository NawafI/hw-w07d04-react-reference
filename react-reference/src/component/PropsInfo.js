import React, { Component } from 'react';

class PropsInfo extends Component {
    render(){
        return(
<div>

<h1 className="title">ReactJS - Props Overview</h1>
            <h4 className ="Content">
            The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.</h4>
</div>
            
        )
    }
}








export default PropsInfo;

