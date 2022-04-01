import { Navigate, useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../services/firebase";
import React, { useRef, useState, useEffect } from "react";
import { useUserContext } from "../services/userContext";

function Chatstrial() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/");
      return;
    }
  }, [user, navigate]);
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichata</div>
        <div className="logout-tab"> Logout</div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px"
        projectId="7aa105f9-e84c-4edf-ba8b-b4c20f511b5b"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chatstrial;
