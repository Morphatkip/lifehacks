import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../services/userContext";
import Chat from "../components/Chat";
import Chatstrial from "../trial/Chatstrial";

function Account({ authorize }) {
  const { isValid } = useUserContext();
  const navigate = useNavigate();

  if (!isValid()) {
    navigate("/Login");
  }
  return (
    <div>
      <Chatstrial />
      <p>
        i have reached this point and so far it is a great milestone. a call for
        celebrations
      </p>
    </div>
  );
}

export default Account;
