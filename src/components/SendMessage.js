/* import React, { useState } from "react";
import firebase from "firebase/compat/app";
import {
  auth,
  db,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../services/firebase";

function SendMessage({}) {
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState("");

  const upload = () => {
    // create a reference to the file
    const fileRef = ref(storage, `${file.name}`);
    // create a reference to 'users/file'
    const fileFullRef = ref(storage, `users/${file.name}`);
    //'file' come from the blob or file api
    uploadBytes(fileFullRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    db.collection("messages").add({
      date: firebase.firestore.FieldValue.serverTimestamp(),
      file: `users/${file.name}`,
      text: file.name,
      type: this.props.type,
      id: auth.currentUser.uid,
    });
    setMsg("");
  };

  async function sendMessage(e) {
    e.preventDefault();

    await db.collection("messages").add({
      date: firebase.firestore.FieldValue.serverTimestamp(),
      file: "null",
      text: msg,
      type: true,
      id: auth.currentUser.uid,
    });
    setMsg("");
  }
  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          sendMessage(event);
        }}
      >
        <input
          className=" span6 input-large search-query col-xs-4 "
          type="text"
          placeholder="message"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Send
        </button>
        <form>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </form>

        <button onClick={upload}>Upload</button>
      </form>
    </div>
  );
}

export default SendMessage;
 */
