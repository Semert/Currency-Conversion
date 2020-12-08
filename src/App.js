import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap/";
import CurrencyRow from "./components/CurrencyRow";

function App() {
  return (
    <div className="pt-5 pr-5 pl-5">
      <Row>
        <Col
          lg
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="m-2"
        >
          <CurrencyRow />
          <CurrencyRow />
          <CurrencyRow />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                width: "352px",
                height: "48px",
                textAlign: "center",
                backgroundColor: "#2b3b48",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "0.94px",
              }}
            >
              Detaylı Bilgi
            </Button>
          </div>
        </Col>

        <Col lg style={{ border: "1px solid black" }} className="m-2">
          2 of 3
        </Col>
        <Col lg style={{ border: "1px solid black" }} className="m-2">
          3 of 3
        </Col>
      </Row>
    </div>
  );
}

export default App;
