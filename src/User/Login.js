/* import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  forgotPassword,
} from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const admin = "5CwVq34SteedGDqSZR8jvskITKg2";

  useEffect(() => {
    if (loading) {
      //maybe trigger a loading screen
      return;
    }
    if (user && auth.currentUser.uid != admin) {
      navigate("/Dashboard");
    } else {
      navigate("/Admin");
    }
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <button onClick={forgotPassword}>Forgot Password ?</button>
        </div>
        <div>
          Don't have an account? <Link to="/Signin">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default SignIn;
 */
