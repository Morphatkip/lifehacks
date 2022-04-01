import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  console.log({ context: useUserContext() });
  const { signInUser, forgotPassword, isValid } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      signInUser(email, password);
    }
    if (isValid) {
      navigate("/Account");
    }
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;
