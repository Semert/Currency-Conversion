import React from "react";
import { Button } from "react-bootstrap";

export default function ConversionRows(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    isDisabled,
  } = props;
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
            height: 50,
            color: "grey",
            backgroundColor: "white",
            border: "none",
          }}
        >
          {" "}
          TRY{" "}
        </Button>
      )}
      <select
        style={{
          display: isDisabled ? "none" : "",
          width: 70,
          height: 48,
          borderRadius: ".3em",
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
