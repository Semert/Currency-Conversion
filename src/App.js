import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap/";
import Conversion from "./components/Conversion";
import CurrencyRow from "./components/CurrencyRow";
import Deneme from "./components/Deneme";
import useApi from "./useApi";

const BASE_URL = "https://api.ratesapi.io/api/latest";

function App() {
  const { loading, fetchData, currency } = useApi();

  return (
    <div className="pt-5 pr-5 pl-5">
      <h2>
        <b className="header"> Piyasalar </b>
      </h2>
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
