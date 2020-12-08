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
        style={{ marginRight: 5 }}
      />

      {isDisabled && (
        <Button variant="secondary" style={{ width: 70, height: 35 }}>
          {" "}
          TRY{" "}
        </Button>
      )}
      <select
        style={{ display: isDisabled ? "none" : "", width: 70, height: 35 }}
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
