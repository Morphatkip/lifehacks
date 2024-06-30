import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Holder(props) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleDownload = () => {
    if (paymentCompleted || props.price === "Free") {
      // Google Analytics event tracking
      ReactGA.event({
        category: "Downloads",
        action: "Component Downloaded",
        label: props.title,
      });
      const link = document.createElement("a");
      link.href = props.downloadSrc; // Use props.downloadSrc for the download link
      link.download = "your_zip_file.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Please complete the payment to download the file.");
    }
  };

  return (
    <div className="container border m-3 p-2 holder-container bg-light ">
      <div className="m-2">
        <Link to={`/single-template/${props.id}`} state={{ id: props.id }}>
          <h3>{props.title}</h3>
        </Link>
      </div>
      <div className="m-3 border p-2">
        <img src={props.image} alt="" className="border img-fluid m-2" />
      </div>

      <div className="col-md-6">{props.children}</div>
      <div className="col-md-3">
        <h4 className="m-2">Pricing: ${props.price}</h4>
        <h4 className="m-2">Rating: {props.rating} </h4>
      </div>
      <div className="col-md-3">
        <Link to={`/single-template/${props.id}`} state={{ id: props.id }}>
          <button className="btn btn-primary">Download</button>
        </Link>
        {/*  <button className="btn btn-primary" onClick={handleDownload}>
          Download
        </button> */}
        {props.previewLink && (
          <a
            className="m-2"
            href={props.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">Preview</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Holder;

export const SingleTemplateHolder = (props) => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleDownload = () => {
    if (paymentCompleted || props.price === "Free") {
      // Google Analytics event tracking
      ReactGA.event({
        category: "Downloads",
        action: "Component Downloaded",
        label: props.title,
      });
      const link = document.createElement("a");
      link.href = props.downloadSrc; // Use props.downloadSrc for the download link
      link.download = props.downloadSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (paymentCompleted === false) {
    }
  };

  return (
    <div className="container border m-3 p-2 holder-container bg-light ">
      <div className="m-2">
        <h3>{props.title}</h3>
      </div>
      <div className="m-3 border p-2">
        <img src={props.image} alt="" className="border img-fluid m-2" />
      </div>

      <div className="col-md-6">{props.children}</div>
      <div className="col-md-3">
        <h4 className="m-2">Pricing: ${props.price}</h4>
        <h4 className="m-2">Rating: {props.rating} </h4>

        <PayPalScriptProvider
          options={{
            clientId:
              "AUjaX_AbcDSRxihm7vUgR1RneEZ7aevDakIpxzQTsYBZ5VbfJ8Q7p7JN74Om9rSSQ9I-xN8Lp0A-2rX7",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: props.price,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                setPaymentCompleted(!paymentCompleted);

                setTimeout(handleDownload, 10);
              });
            }}
            onError={(err) => console.log({ err })}
          />
        </PayPalScriptProvider>
      </div>
      <div className="col-md-3">
        {props.price === "Free" ? (
          <button className="btn btn-primary" onClick={handleDownload}>
            Download
          </button>
        ) : paymentCompleted ? (
          <button className="btn btn-primary" onClick={handleDownload}>
            Download
          </button>
        ) : (
          <label className="border m-3 bg-dark text-light">
            <span className="p-3">
              Complete payment to begin download automatically
            </span>
          </label>
        )}

        {props.previewLink && (
          <a
            className="m-2"
            href={props.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">Preview</button>
          </a>
        )}
      </div>
    </div>
  );
};
