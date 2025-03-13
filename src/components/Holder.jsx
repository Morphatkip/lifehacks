import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Holder(props) {
  return (
    <div className="container p-3 holder-container bg-light d-flex flex-column h-100">
      {/* Image Container */}
      <div className="image-container border d-flex align-items-center justify-content-center">
        <img src={props.image} alt="" className="img-fluid" />
      </div>

      {/* Title Below Image */}
      <div className="text-center mt-3">
        <Link to={`/single-template/${props.id}`} state={{ id: props.id }}>
          <h5 className="title">{props.title}</h5>
        </Link>
      </div>

      {/* Description */}
      <div
        className="text-truncate flex-grow-1 px-2"
        style={{ maxHeight: "60px", overflow: "hidden" }}
      >
        {props.children}
      </div>

      {/* Pricing & Rating */}
      <div className="mt-auto text-center">
        <h6 className="m-2"> {props.price} $</h6>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-2">
        {/*  <Link to={`/single-template/${props.id}`} state={{ id: props.id }}>
          <button className="btn btn-primary">Download</button>
        </Link> */}
        {props.previewLink && (
          <a href={props.previewLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary">Preview</button>
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
      ReactGA.event({
        category: "Downloads",
        action: "Component Downloaded",
        label: props.title,
      });

      const link = document.createElement("a");
      link.href = props.downloadSrc;
      link.download = props.downloadSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container p-4 my-4 border rounded shadow-lg bg-white">
      <div className="row">
        {/* Left: Product Image */}
        <div className="col-md-6">
          <img
            src={props.image}
            alt={props.title}
            className="img-fluid border rounded"
          />
        </div>

        {/* Right: Product Details */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h2 className="mb-3">{props.title}</h2>
            <p className="text-muted">{props.description}</p>{" "}
            {/* New Description Section */}
            <h4 className="mt-3">Price: ${props.price}</h4>
            <h4>Rating: {props.rating} ⭐</h4>
          </div>

          {/* Payment and Download Section */}
          <div className="mt-4 text-center">
            <PayPalScriptProvider
              options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}
            >
              <div className="d-flex justify-content-center gap-3">
                {/* PayPal Button */}
                <div style={{ width: "160px" }}>
                  <PayPalButtons
                    style={{ layout: "horizontal", height: 40 }}
                    fundingSource="paypal" // Show only PayPal
                    createOrder={(data, actions) =>
                      actions.order.create({
                        purchase_units: [{ amount: { value: props.price } }],
                      })
                    }
                    onApprove={(data, actions) =>
                      actions.order.capture().then(() => {
                        setPaymentCompleted(true);
                        setTimeout(handleDownload, 10);
                      })
                    }
                    onError={(err) => console.log(err)}
                  />
                </div>

                {/* Credit/Debit Card Button */}
                <div style={{ width: "160px" }}>
                  <PayPalButtons
                    style={{ layout: "horizontal", height: 40 }}
                    fundingSource="card" // Show only Credit/Debit Card
                    createOrder={(data, actions) =>
                      actions.order.create({
                        purchase_units: [{ amount: { value: props.price } }],
                      })
                    }
                    onApprove={(data, actions) =>
                      actions.order.capture().then(() => {
                        setPaymentCompleted(true);
                        setTimeout(handleDownload, 10);
                      })
                    }
                    onError={(err) => console.log(err)}
                  />
                </div>
              </div>
            </PayPalScriptProvider>

            {/* Payment Message */}
            {props.price === "Free" || paymentCompleted ? (
              <button
                className="btn btn-success mt-3 px-4"
                onClick={handleDownload}
              >
                Download Now
              </button>
            ) : (
              <p className="text-danger mt-3 fw-bold">
                🔒 Please complete payment to unlock download.
              </p>
            )}

            {/* Preview Button */}
            {props.previewLink && (
              <a
                href={props.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-primary mt-2 px-4">
                  Preview
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
