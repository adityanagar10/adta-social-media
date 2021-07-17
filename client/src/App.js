import {Switch , Route, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/home/home.component'
import Profile from './pages/profile/profile.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'


function App() {
  return (
 
   <Router>
      <Switch>
    <Route exact path ="/" component={Home} />
    <Route exact path ="/login" component={Login} />
    <Route exact path ="/signup" component={SignUp} />
    <Route exact path ="/profile/:username" component={Profile} />
    </Switch>
   </Router>

    );
}

export default App;
