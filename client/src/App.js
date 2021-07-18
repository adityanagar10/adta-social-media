import {Switch , Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import Home from './pages/home/home.component'
import Profile from './pages/profile/profile.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Register from "./pages/signup/signup.component"


function App() {
  const {user} = useContext(AuthContext)

  return (
   <Router>
      <Switch>
    
    <Route exact path = "/">
    {user ? <Home /> :<Register /> }
    </Route>
    <Route exact path ="/login">
    {user ? <Redirect to="/"/> : <Login /> }
    </Route>
    <Route exact path ="/signup">
    {user ? <Redirect to="/"/> : <SignUp /> }      
    </Route>
    <Route exact path ="/profile/:username">
      <Profile />
    </Route>
    </Switch>
   </Router>

    );
}

export default App;