import React, { useState } from "react";
import { Card } from "react-bootstrap/";
import usa from "../usa.png";
import "./CurrencyRow.css";

const CurrencyRow = ({ name, amount }) => {
  console.log("aaaaaaaa", name, amount);
  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <img className="image" src={usa} />{" "}
        <div>
          <div>
            <b> {name}</b>
          </div>
          <div>Amerika Doları</div>
        </div>
      </div>

      <div>
        <div style={{ textAlign: "end", color: "grey", marginRight: 3 }}>
          ALIŞ
        </div>
        <div style={{ fontSize: 16, marginRight: 3 }}>{amount}</div>
      </div>

      <div>
        {" "}
        <div style={{ textAlign: "end", color: "grey" }}> SATIŞ</div>
        <div style={{ fontSize: 16 }}>6.3848</div>
      </div>
    </div>
  );
};

export default CurrencyRow;
