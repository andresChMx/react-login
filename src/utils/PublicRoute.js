import React, { Component } from 'react'
import { Redirect, Route } from 'react-router';
import { getToken } from './Common';

/*============================================*/
/*=======USANDO COMPONENTE DE FUNCION=========*/
/*============================================*/
// const PublicRoute = ({component:Component, ...rest})=>{
//     return (
//         <Route
//             {...rest}
//             render={props=>{
//                 return !getToken()?<Component {...props}/>: 
//                 <Redirect to={{pathname:'/dashboard', state:{from:props.location}}}/>
//             }}
//         />
//     );
// }
// * Component : alias para el campo component del props
// * {component:Component, ...rest} : destructurando props en dos objetos: Component (propiedad component) y rest (propiedades restantes)
// * render= : sobreescribiendo el metodo render

/*============================================*/
/*===EQUIVALENTE USANDO COMPONENTE DE CLASE====*/
/*============================================*/

class PublicRoute extends Component {
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
                    return !getToken()?<Component {...props}/>: 
                     <Redirect to={{pathname:'/dashboard', state:{from:props.location}}}/>
                }}
            />
        );
    }
}
export default  PublicRoute