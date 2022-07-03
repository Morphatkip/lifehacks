import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../utils/firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../services/firebase";
function Chat() {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("messages")
      .orderBy("date", "asc")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var messages = element.data();
          setInfo((arr) => [...arr, messages]);
        });
      });
  };

  // Display the result on the page
  return (
    <div>
      <div
        className="container border border-dark rounded"
        style={{ height: 300, width: 460 }}
      >
        {info
          .filter((userss) => userss.id == auth.currentUser.uid)
          .map((messages) => (
            <Frame
              key="{messages.text}"
              Dates={messages.date}
              File={messages.file}
              Text={messages.text}
              Type={messages.type}
            />
          ))}
      </div>

      <SendMessage />
    </div>
  );
}

// Define how each display entry will be structured
const Frame = ({ Dates, File, Text, Type }) => {
  console.log(Text);

  const download = () => {
    getDownloadURL(ref(storage, File))
      .then((url) => {
        // ' url ' is the downloa url for the file
        // this can be downloaded directly
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
      })
      .catch((error) => {
        console.log("the following erro occured while downloading", error);
        console.log(File);
      });
  };

  if (File !== "null") {
    return (
      <div className="div">
        {Type ? (
          <div className="float-left">
            <div style={{ fontSize: 24 }} onClick={download}>
              <a href={File}>{Text} </a>
            </div>
          </div>
        ) : (
          <div className="float-right">
            <div style={{ fontSize: 24 }} onClick={download}>
              {Text}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="div">
        {Type ? (
          <div className="float-left">
            <div style={{ fontSize: 24 }}>{Text}</div>
          </div>
        ) : (
          <div className="float-right">
            <div style={{ fontSize: 24 }}>{Text}</div>
          </div>
        )}
      </div>
    );
  }
};

export default Chat;
