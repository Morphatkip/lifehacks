import React, { useState, useEffect } from "react";
import { db, auth } from "../utils/firebase";

function Profile() {
  const [order, setOrder] = useState([]);
  const [completedOrder, setCompletedOrder] = useState();

  useEffect(() => {
    Fetchdata();
  });
  // Fetch the required data using the get() method
  /** */
  const Fetchdata = async () => {
    await db
      .collection("orders")
      .orderBy("date", "asc")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var orders = element.data();
          setOrder((arr) => [...arr, orders]);

          setCompletedOrder = order.filter(
            (userss) => userss.id == auth.currentUser.uid
          ).length;
        });
      });
  };

  return (
    <div>
      <br />
      <div className="row m-2">
        <div className="col-md-4">
          <label>Completed Orders</label>
          <label>
            {completedOrder}
            {console.log(completedOrder + " here")}
          </label>
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
