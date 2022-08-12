import React from "react";
import "../Reklam/reklam.scss";
function Reklam() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="exam">
            <img
              className="exam1"
              style={{ width: "100%" }}
              src={require("../../img/1.webp")}
              alt=""
            />

            <button className="btn1">Shop now</button>
          </div>
        </div>
        <div className="col-4">
          <div className="exam">
            <img
              className="exam1"
              style={{ width: "100%" }}
              src={require("../../img/1.webp")}
              alt=""
            />
          </div>
        </div>

        <div className="col-4">
          <div className="exam">
            <img
              className="exam1"
              style={{ width: "100%" }}
              src={require("../../img/1.webp")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reklam;
