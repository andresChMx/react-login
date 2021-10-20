import React, { Component } from 'react'
import { withRouter } from 'react-router';

import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { setUserSession } from '../utils/Common';



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:null,
            loading:false
        }
    }
    handleLogin(){
        
        this.setState({
            error:null,
            loading:true
        })
        const auth = getAuth();
        let self=this;
        signInWithEmailAndPassword(auth, this.state.email,this.state.password)
        .then((userCredential) => {
            this.setState({loading:false});
            // Signed in
            const user = userCredential.user;
            //storing informacion
            //this.props.notifyUserLogged(user);
            setUserSession(user.providerData[0],user.accessToken)
            //redirecting
            this.props.history.push("/dashboard");
        })
        .catch((error) => {
            this.setState({loading:false});
            const errorCode = error.code;
            const errorMessage = error.message;
            this.setState({
                error:errorMessage
            })
        });
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" value={this.state.email} onChange={e=>{this.setState({email:e.target.value})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}}/>
                </div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <button 
                    type="submit" 
                    disabled={this.state.loading}
                    onClick={this.handleLogin.bind(this)}
                    >
                        {this.state.loading?"Loading...": "Enviar"}
        
                </button>
            </div>
        )
    }
}
export default withRouter(Login);