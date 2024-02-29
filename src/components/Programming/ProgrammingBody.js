import React from "react";
import programmingCover from "../../images/programming/programmingCover.png";
import "../../styles/ProgrammingBody.css";
import OrderModal from "../Modal/OrderModal";
import UseModal from "../Modal/UseModal";

function ProgrammingBody() {
  const { isShowing, toggle } = UseModal();
  return (
    <div className="background-image programming">
      <div className="image-container">
        <div className="text">
          <h1>Programming Corner</h1>
          <p>
            In need of quality, affordable and classic programming services. We
            got you covered. Click the order button below and fill your
            specifics. We will reach you via email address provided
          </p>
          <div>
            <button className="order-button" onClick={toggle}>
              Order now
            </button>
            <OrderModal isShowing={isShowing} hide={toggle} />
          </div>
        </div>
        <div className="image">
          <img src={programmingCover} />
        </div>
      </div>
    </div>
  );
}

export default ProgrammingBody;
