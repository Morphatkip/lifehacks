import React from "react";
import { db, auth } from "../utils/firebase";

function Profile() {
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db
      .collection("orders")
      .orderBy("date", "asc")
      .get()
      .filter((users) => users.id == auth.currentUser.uid).then;
  };

  return (
    <div>
      <br />
      <div className="row m-2">
        <div className="col-md-4">
          <label>Completed Orders</label>
        </div>
        <div className="col-md-4">
          <label>Pending orders</label>
        </div>
        <div className="col-md-4">
          <label>Account Balance</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
