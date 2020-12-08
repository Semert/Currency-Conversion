import React from "react";
import { Card } from "react-bootstrap/";
import usa from "../usa.png";

const CurrencyRow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid grey",
        paddingBottom: "20px",
        paddingTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={usa}
          style={{
            width: "20%",
            height: "20%",
            objectFit: "contain",
            marginRight: 15,
          }}
        />{" "}
        <div>
          <div>
            {" "}
            <b> USD</b>{" "}
          </div>
          <div>Amerika Doları</div>
        </div>
      </div>

      <div>
        {" "}
        <div style={{ textAlign: "end", color: "grey", marginRight: 3 }}>
          ALIŞ{" "}
        </div>
        <div style={{ fontSize: 16, marginRight: 3 }}>6.3848</div>
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
