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
  const [currencies, setCurrencies] = useState([
    { id: "GBP", name: "İngiliz Sterlini" },
    { id: "USD", name: "Amerikan Doları" },
    { id: "EUR", name: "Avrupa Para Birimi" },
    { id: "JPY", name: "Japon Yeni" },
    { id: "DKK", name: "Danimarka Kronu" },
    { id: "NOK", name: "Norveç Kronu" },
  ]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState([{ id: "", amount: "" }]);
  console.log("son", currency);

  const fetchData = async (currencies) => {
    setLoading(true);
    let sonuc = [{ id: "", amount: "" }];
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
          date: data.date,
        },
      ];
    }
    setCurrency(sonuc);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(currencies);
  }, []);

  return (
    <div className="pt-5 pr-5 pl-5">
      {loading ? (
        "loading"
      ) : (
        <Row>
          {" "}
          <Col lg className="m-2 column">
            {currency
              ?.filter((cur) => cur.id != "")
              .map((cur) => (
                <CurrencyRow
                  key={cur.id}
                  name={cur.name}
                  amount={cur.amount}
                  id={cur.id}
                  date={cur.date}
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
            {/* <Conversion />
            <Deneme /> */}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default App;
