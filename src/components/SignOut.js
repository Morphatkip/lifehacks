import React from "react";
import { auth } from "../utils/firebase.js";

function SignOut() {
  return (
    <div>
      <button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
