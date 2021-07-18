import {useRef} from "react"
import axios from "axios"
import "./signup.styles.css";
import {Link} from "react-router-dom"
import { useHistory } from "react-router"

export default function Register() {
  const username = useRef()
  const email= useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useHistory()

  const handleClick = async (e) =>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("/auth/register" , user)
        history.push("/login")
      } catch (error) {
        console.log(error);
      }
    }
  }

  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ADTA Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
            <input placeholder="Password Again" minLength="6" type="password" required ref={passwordAgain} className="loginInput" />
            <button type="submit" className="loginButton">Sign Up</button>
            <Link to="/login">
            <button className="loginRegisterButton" >
              Log into Account
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}