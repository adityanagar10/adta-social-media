import "./login.styles.css";
import {useContext, useRef} from 'react'
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls"
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef()
  const password= useRef()

  const {user, isFetching, error , dispatch} = useContext(AuthContext)

  const handleClick = (e) =>{
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch )
  }

  console.log(user);
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
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" ref={email} required type="email" className="loginInput" />
            <input placeholder="Password" ref={password} required type="password" minLength = "6" className="loginInput" />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}