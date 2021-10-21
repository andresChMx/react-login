import './App.css';
import { BrowserRouter,Link,NavLink,Route ,Redirect} from 'react-router-dom';
import Login from './components//login/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import { getToken, getUser, removeUserSession, setUserSession } from './utils/Common';


function App(props) {
  const [user, setUser]=useState(null);

  const [authLoading,setAuthLoading]=useState(true);

  useEffect(() => {
    const token=getToken();
    if(!token){
      return;
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserSession(user.providerData[0],user.accessToken)
        setAuthLoading(false);
      } else {
        removeUserSession();
        setAuthLoading(false);
      }
    });
  }, [])

  if(getToken() && authLoading){
    return <div className="content">Checking Authentication...</div>
  }

  return (
      <div className="App">
        <BrowserRouter>
          {/* <div className="header">
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login <small>Access without token only</small></NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard <small>Acess with token only</small></NavLink>
          </div>
          <div className="content">
            
          </div> */}

          <Route exact path="/" component={Home}>
            <Redirect to="/login"/>
          </Route>
          <PublicRoute path="/login" component={Login}></PublicRoute>
          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        </BrowserRouter>
      </div>

  );
}

export default App;
