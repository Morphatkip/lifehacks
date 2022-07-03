import { QuerySnapshot } from "firebase/firestore";
import React from "react";
import { db } from "./firebase";

const sendToDatabase = (Date, File, Text, Type) => {
  e.preventDefault();
  // add data to the store
  db.collection("messages")
    .add({
      date: Date,
      file: File,
      text: Text,
      type: Type,
    })
    .then((docRef) => {
      console.log("DAta successfully submitted");
    })
    .catch((erro) => {
      console.error("Error addin gdocument:", error);
    });
};

const Read = () => {
  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("data")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
};
export { sendToDatabase, info };
