import { Navigate, useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../services/firebase";
import React, { useRef, useState, useEffect } from "react";
import { useUserContext } from "../services/userContext";
import { axios } from "axios";
function Chatstrial() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  const getfile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      Navigate("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "7aa105f9-e84c-4edf-ba8b-b4c20f511b5b ",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.displayName);
        formdata.append("secret", user.uid);
        getfile(user.photoURL)
          .then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users", formdata, {
                headers: {
                  "private-key": "a39222ad-7d9c-42ad-98e6-8be1eae0b7f9",
                },
              })
              .then(() => setLoading(false));
          })
          .catch(() => console.log(console.error));
      });
  }, [user, navigate]);

  if (!user || Loading) return "loading.....";
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichata</div>
        <div className="logout-tab"> Logout</div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px"
        projectID="7aa105f9-e84c-4edf-ba8b-b4c20f511b5b"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chatstrial;
