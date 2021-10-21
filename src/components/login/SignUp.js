import React, { Component } from 'react'
import { withRouter } from 'react-router';

import { getAuth,  createUserWithEmailAndPassword } from "firebase/auth";
import { setUserSession } from '../../utils/Common';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            country:"",
            phone:"",
            error:null,
            loading:false
        }
    }
    handleSignUp(){
        this.setState({
            error:null,
            loading:true
        })
        const auth = getAuth();
        let self=this;
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
            this.setState({loading:false});
            // Signed in
            const user = userCredential.user;
            //storing informacion
            setUserSession(user.providerData[0],user.accessToken)
            //redirecting
            console.log(self.props.history);
            self.props.history.push("/dashboard");
            // ...
        })
        .catch((error) => {
            self.setState({loading:false});
            const errorCode = error.code;
            const errorMessage = error.message;
            self.setState({
                error:errorMessage
            })
        });
    }
    render() {
        return (
            <div className="helper-form-centered">
                <p className="form-title">Registrarse</p>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" value={this.state.email} onChange={e=>{this.setState({email:e.target.value})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" value={this.state.country} onChange={e=>{this.setState({country:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" value={this.state.phone} onChange={e=>{this.setState({phone:e.target.value})}}/>
                </div>
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                <div className="form-group">
                    <button className="btn-submit"
                        type="submit" 
                        disabled={this.state.loading}
                        onClick={this.handleSignUp.bind(this)}
                        >
                            {this.state.loading?"Loading...": "Enviar"}
            
                    </button>
                </div>
            </div>
        )
    }
}
export default withRouter(SignUp);