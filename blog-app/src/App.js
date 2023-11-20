import logo from './logo.svg';
import './App.css';

export default function App(){
  return(
    <div className = "login">
      <div className = "content">
        <center>
        <h1>Welcome back!</h1>
        </center>
        <Login />
      </div>
    </div>
  );
}

function Login(){
  return(
    <div>
      <center>
        <form>
        <label>
          Email:
        <input type = "text" name = "email"/>
        <br></br>
        <br></br>
          Password:
        <input type = "text" name = "password"/>
        <br></br>
        <br></br>
        </label>
        <SigninButton></SigninButton>
      </form>
      </center>
    </div>
  );
}

function SigninButton() {
  return(
    <div>
    <button type = "button">Sign in</button>
    </div>

  );

}