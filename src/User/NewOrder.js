/* import React, { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  db,
  storage,
  auth,
} from "../services/firebase";
import firebase from "firebase/compat/app";
import { v4 as uuid } from "uuid";

function NewOrder() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [format, setFormat] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescprition] = useState("");
  const [file, setFile] = useState("");
  const [time, setTime] = useState("");
  const [timeh, setTimeh] = useState("");
  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    await db.collection("order").add({
      description: description,
      file: file,
      format: format,
      id: auth.currentUser.uid,
      major: major,
      orderid: small_id,
      pages: pages,
      payment: payment,
      status: status,
      time: time,
      timeh: timeh,
      timesubmitted: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <div>
      <br />
      <form
        onSubmit={(event) => {
          sendMessage(event);
        }}
      >
        {/** Major}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Major
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="eg Business Administration"
            onChange={(e) => {
              setMajor(e.target.value);
            }}
          />
        </div>
        {/** Format}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Format
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Mla, APA"
            onChange={(e) => {
              setFormat(e.target.value);
            }}
          />
        </div>

        {/** pages}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Pages
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder=""
            onChange={(e) => {
              setPages(e.target.value);
            }}
          />
        </div>

        {/** description}
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            onChange={(e) => {
              setDescprition(e.target.value);
            }}
          ></textarea>
        </div>

        {/** choose a file}
        <br></br>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile02"
              onChange={(e) => {
                setFormat(e.target.files[0]);
              }}
            ></input>

            <div className="input-group-append">
              <span className="input-group-text" id="">
                Upload
              </span>
            </div>
          </div>
        </div>

        {/** time}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Time
            </label>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          ></input>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => {
              setTimeh(e.target.value);
            }}
          >
            <option selected>Choose...</option>
            <option value="1">Hours</option>
            <option value="2">Days</option>
          </select>
        </div>
        <button
          className="btn btn-secondary btn-m active float-right"
          type="submit"
          onClick={console.log(
            description,
            file,
            format,
            id,
            major,
            small_id,
            pages,
            payment,
            status,
            time,
            timeh
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewOrder;
 */
