import React from "react";
import { Button } from "react-bootstrap";
import "./Conversion.css";

export default function ConversionRows({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  isDisabled,
}) {
  return (
    <div className="conversion">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />

      {isDisabled && <Button className="rowbutton"> TL </Button>}
      <select
        className="select"
        style={{
          display: isDisabled ? "none" : "",
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
