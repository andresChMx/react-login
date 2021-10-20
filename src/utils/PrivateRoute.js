import React, { Component } from 'react'
import { Redirect, Route } from 'react-router';
import { getToken } from './Common';

class PrivateRoute extends Component {
    constructor(props){
        super(props);

    }
    render() {
        /*simulando destructuracion en function ({component:Component, ...rest})*/
        let Component=this.props.component;
        let rest={...this.props};
        delete rest.component

        return (
            <Route
                {...rest}
                render={props=>{
                    return getToken()?<Component {...props}/>: 
                     <Redirect to={{pathname:'/login', state:{from:props.location}}}/>
                }}
            />
        );
    }
}
export default  PrivateRoute