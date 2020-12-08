import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap/";
import CurrencyRow from "./components/CurrencyRow";
import Conversion from "./components/Conversion";
import Deneme from "./components/Deneme";

function App() {
  const [currency, setCurrency] = useState([{ id: "", amount: "" }]);
  const [base, setBase] = useState();
  const [date, setDate] = useState();
  console.log("curency", currency);

  useEffect(() => {
    const fetctData = async () => {
      const { data } = await axios.get("https://api.ratesapi.io/api/latest");
      const { GBP, USD, TRY, JPY, DKK, NOK } = data.rates;
      console.log(data.rates);
      // { gbp: [GBP, "GBP"], usd: [USD, "USD"], try: TRY, jpy: JPY, dkk: DKK, nok: NOK },

      setCurrency([...currency, { id: "GBP", amount: GBP }]);
      setDate(data.date);
      setBase(data.base);
    };

    fetctData();
  }, []);
  return (
    <div className="pt-5 pr-5 pl-5">
      <Row>
        <Col lg className="m-2 column">
          {/* {currency?.map((cur, index) =>
            // <CurrencyRow key={index} name={cur} amount={cur[1]} />
            console.log(cur)
          )} */}

          {currency?.map((cur) => console.log("sa", cur.GBP))}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button className="button">Detaylı Bilgi</Button>
          </div>
        </Col>

        <Col lg className="m-2">
          2 of 3
        </Col>

        <Col lg className="m-2">
          <Conversion />
          <Deneme />
        </Col>
      </Row>
    </div>
  );
}

export default App;
