import React, { useState } from "react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
  db,
} from "../../utils/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import ReactDOM from "react-dom";
import "../../styles/Modal.css";
const OrderModal = ({ isShowing, hide }) => {
  const storage = getStorage();
  const [state, setState] = useState({
    language: "",
    files: "",
    dueDate: "",
    otherInformation: "",
    email: "",
  });
  const [fileUrl, setFileUrl] = useState("");

  const uploadToDatabase = async () => {
    await addDoc(collection(db, "assignment"), {
      language: state.language,
      file: fileUrl,
      dueDate: state.dueDate,
      otherInformation: state.otherInformation,
      email: state.email,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadToDatabase();
    hide();
  };

  const handleFile = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    //const name = file[0].name;
    console.log(file.name);
    if (!file) return;

    const metadata = {
      contentType: "image/jpeg/pdf",
    };

    const storageRef = ref(storage, "assignment/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const languages = [
    { key: "java", label: "Java" },
    { key: "python", label: "Python" },
    ,
    { key: "c++", label: "C++" },
    { key: "c", label: "C" },
    { key: "matlab", label: "Matlab" },
    { key: "javascript", label: "JavaScript" },
    { key: "web", label: "WEB" },
  ];
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="container mt-2">
            <div className="fixed-top box">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className=" form-group row component-wrapper">
                    <label className="col-sm-4 ">Language</label>
                    <div className="col-sm-8">
                      <select onChange={handleChange} name="language">
                        {languages.map((language) => (
                          <option key={language.key}>{language.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className=" form-group row component-wrapper">
                    <label className="col-sm-4 ">Files</label>
                    <div className="col-sm-8">
                      <input type="file" onChange={handleFile} name />
                    </div>
                  </div>

                  <div className=" form-group row component-wrapper">
                    <label className="col-sm-4 ">Hours Due</label>
                    <div className="col-sm-8">
                      <input
                        name="dueDate"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>

                  <div className=" form-group row component-wrapper">
                    <label className="col-sm-4 ">Other Information</label>
                    <div className="col-sm-8">
                      <textarea
                        name="otherInformation"
                        type="text"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className=" form-group row component-wrapper">
                    <label className="col-sm-4 ">Email</label>
                    <div className="col-sm-8">
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    Close
                  </button>
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default OrderModal;
