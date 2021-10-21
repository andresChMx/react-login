import React, { Component } from 'react'
import { withRouter } from 'react-router';

import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { setUserSession } from '../../utils/Common';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './styles.css';
import heroImage from "../../assets/img/signin-flat.png";
import heroImage2 from "../../assets/img/signup-flat.png";
import logo from "../../assets/img/logo.png"

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            activeView:"signup"
        }
    }
    handleViewChange(){
        this.setState((state, props) => ({
            activeView: state.activeView==="signup"?"signin":"signup"
        }));
    }
    render() {
        return (
            <>
            <div className="filter">
                <div className="main-container">
                    <div className="scrollable-view--form" style={{left:this.state.activeView==="signup"?0:-43+"%"}}>
                        <div className="signup-container">
                            <SignUp></SignUp>
                        </div>
                        <div className="banner-container">
                            <button className="banner__button" onClick={this.handleViewChange.bind(this)}>{this.state.activeView==="signup"?"Iniciar Sesion": "Registrarse"}</button>
                        </div>
                        <div className="signin-container">
                            <SignIn></SignIn> 
                        </div>
                    </div>
                    <div className="scrollable-view--data" style={{left:this.state.activeView==="signin"?0:-43+"%"}}>
                        <div className="sign-view-data" style={{opacity:this.state.activeView==="signup"?0:1}}>
                            <div className="sign-view__logo signin">
                                <img src={logo} alt="" />
                            </div>
                            <div className="sign-view__greeting signin">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div className="sign-view__question signin">
                                <p>¿Aun no tiene una cuenta?</p>
                            </div>
                            <div className="sign-view__hero signin">
                                <img src={heroImage} alt="" />
                            </div>
                        </div>
                        <div className="sign-view-data signup" style={{opacity:this.state.activeView==="signin"?0:1}}>
                            <div className="sign-view__logo signup">
                                <img src={logo} alt="" />
                            </div>
                            <div className="sign-view__greeting signup">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div className="sign-view__question signup">
                                <p>Si ya tienes una cuenta</p>
                            </div>
                            <div className="sign-view__hero signup">
                                <img src={heroImage2} alt="" />
                            </div>
                        </div>

                    </div>


                </div>
                </div>
            </>
        )
    }
}
export default withRouter(Login);