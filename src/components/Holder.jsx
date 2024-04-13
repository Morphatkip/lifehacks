import React from "react";
import "../styles/styles.css";
function Holder(props) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = props.downloadSrc; // Use props.downloadSrc for the download link
    link.download = "your_zip_file.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container border m-3 p-2 holder-container">
      <div className="m-2">
        <h3>{props.title}</h3>
      </div>
      <img src={props.image} alt="" className="border img-fluid m-2" />
      <div className="col-md-6">{props.children}</div>
      <div className="col-md-3">
        <h4 className="m-2">Pricing: ${props.price}</h4>
        <h4 className="m-2">Rating: {props.rating} </h4>
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
}

export default Holder;
