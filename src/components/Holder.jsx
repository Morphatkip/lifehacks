import React from "react";
import ReactGA from "react-ga";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/styles.css";

function Holder(props) {
  const handleDownload = () => {
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
              "AadABTe-JZ6ek7fq4BlRKO8EpGhAFEOENsUgPzCPBpSrMXonkcG5PDG2kCHdWh2PagPJ6M6SFMQZAImL",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "10.00", // Correct currency format
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              // Handle the payment success
              handleDownload();
            }}
            onError={(err) => console.log(err)}
          />
        </PayPalScriptProvider>
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary" onClick={handleDownload}>
          Download
        </button>
        {props.previewLink && (
          <a
            className="m-2"
            href="https://movie-streaming-app-teal.vercel.app/"
            target="_blank"
          >
            <button className="btn btn-primary">Preview</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Holder;
