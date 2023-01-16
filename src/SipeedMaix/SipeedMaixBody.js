import React from "react";
import { Link } from "react-router-dom";

function SipeedMaixBody() {
  return (
    <div>
      <div className=" d-flex row justify-content-around">
        <div className="col-sm-2">
          <Link to="">Introduction</Link>
        </div>
        <div
          className="col-sm-8"
          style={{ backgroundColor: "white", margin: 2 }}
        >
          <h1>Sipeed Maixduino</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SipeedMaixBody;
