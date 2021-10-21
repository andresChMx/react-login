import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { removeUserSession } from '../utils/Common';
import { signOut,getAuth } from "firebase/auth";

class Dashboard extends Component {
    handleLogout(){
        const auth = getAuth();
        signOut(auth).then(()=>{
            removeUserSession();
            this.props.history.push("/login");
        }).catch(()=>{
            alert("something went wrong");
        })

    }
    render() {
        return (
            <div className="welcome-container">
                <p className="welcome__message">Welcome to the dashboard</p> 
                <button className="welcome__button"onClick={this.handleLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}
export default withRouter(Dashboard);
