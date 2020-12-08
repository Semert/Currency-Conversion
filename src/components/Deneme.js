import React, { useEffect, useState } from "react";

const Deneme = () => {
  const [result, setResult] = useState();
  const [base, setBase] = useState("EUR");
  const [convertTo, setConvertTo] = useState("TRY");
  const [date, setDate] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then((res) => res.json())
      .then((data) => {
        const date = data.date;
        const result = (data.rates[convertTo] * amount).toFixed(4);
        setResult(result);
        setDate(date);
      });
  }, []);

  return <div></div>;
};

export default Deneme;
