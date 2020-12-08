import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap/";
import Conversion from "./components/Conversion";
import CurrencyRow from "./components/CurrencyRow";
import Deneme from "./components/Deneme";

const BASE_URL = "https://api.ratesapi.io/api/latest";

function App() {
  const [date, setDate] = useState();
  const [currencies, setCurrencies] = useState([
    { id: "GBP", name: "İngiliz Sterlini" },
    { id: "USD", name: "Amerikan Doları" },
    { id: "EUR", name: "Avrupa Para Birimi" },
    { id: "JPY", name: "Japon Yeni" },
    { id: "DKK", name: "Danimarka Kronu" },
    { id: "NOK", name: "Norveç Kronu" },
  ]);
  const [currency, setCurrency] = useState([{ id: "", amount: "" }]);
  console.log("son", currency);

  const fetchData = async (currencies) => {
    let sonuc = [{ id: "", amount: "" }];
    let date;
    for (let x = 0; x < currencies.length; x++) {
      const { data } = await axios.get(
        `${BASE_URL}?base=${currencies[x].id}&symbols=TRY`
      );
      sonuc = [
        ...sonuc,
        {
          id: currencies[x].id,
          name: currencies[x].name,
          amount: Object.values(data.rates)[0].toFixed(4),
        },
      ];
      date = data.date;
    }
    setCurrency(sonuc);
    setDate(date);
  };

  useEffect(() => {
    fetchData(currencies);
  }, []);

  // useEffect(() => {
  //   const fetctData = async () => {
  //     const { data } = await axios.get("https://api.ratesapi.io/api/latest");
  //     const { GBP, USD, TRY, JPY, DKK, NOK } = data.rates;
  //     console.log(Object.keys(data.rates));

  //     setCurrency([
  //       ...currency,
  //       { id: "GBP", amount: GBP },
  //       { id: "USD", amount: USD },
  //       { id: "JPY", amount: JPY },
  //       { id: "DKK", amount: DKK },
  //       { id: "NOK", amount: NOK },
  //     ]);
  //     setCurrency([data.rates]);
  //     setDate(data.date);
  //     setBase(data.base);
  //   };

  //   fetctData();
  // }, []);
  return (
    <div className="pt-5 pr-5 pl-5">
      <Row>
        <Col lg className="m-2 column">
          {/* {currency?.map((cur, index) =>
            // <CurrencyRow key={index} name={cur} amount={cur[1]} />
            console.log(cur)
          )} */}
          {currency
            ?.filter((cur) => cur.id != "")
            .map((cur) => (
              <CurrencyRow
                key={cur.id}
                name={cur.name}
                amount={cur.amount}
                id={cur.id}
              />
            ))}

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
