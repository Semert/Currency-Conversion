import React from "react";
import { Button } from "react-bootstrap";

export default function ConversionRows({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  isDisabled,
}) {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
        style={{
          padding: 5,
          fontSize: 18,
          width: 215,
          height: 48,
        }}
      />

      {isDisabled && (
        <Button
          style={{
            width: 70,
            height: 46.5,
            color: "grey",
            backgroundColor: "white",
            border: "none",
            marginTop: -4,
            marginLeft: -3,
            fontSize: 20,
          }}
        >
          {" "}
          TL{" "}
        </Button>
      )}
      <select
        style={{
          display: isDisabled ? "none" : "",
          width: 70,
          height: 48,
          marginLeft: -3,
          border: "1px solid #E0E0E0",
        }}
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
