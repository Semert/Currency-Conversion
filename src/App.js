import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Spinner, Container } from "react-bootstrap/";
import Conversion from "./components/Conversion";
import CurrencyRow from "./components/CurrencyRow";
import useApi from "./useApi";

function App() {
  const { loading, currency, currencySecond } = useApi();

  return (
    <div className="contain">
      <h2 className="m-4">
        <b className="header"> Piyasalar </b>
      </h2>
      {loading ? (
        <Container fluid>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <Row>
          {" "}
          <Col lg className="m-4 mr-5 ">
            {currency
              ?.filter((cur) => cur.id !== "")
              .map((cur) => (
                <CurrencyRow
                  key={cur.id}
                  name={cur.name}
                  amount={cur.amount}
                  id={cur.id}
                  date={cur.date}
                />
              ))}

            <div className="btn-div">
              <Button className="button">Detaylı Bilgi</Button>
            </div>
          </Col>
          <Col lg className="m-4 mr-5">
            {currencySecond
              ?.filter((cur) => cur.id !== "")
              .map((cur) => (
                <CurrencyRow
                  key={cur.id}
                  name={cur.name}
                  amount={cur.amount}
                  id={cur.id}
                  date={cur.date}
                />
              ))}
            <div className="btn-div">
              <Button className="btnPiyasa">Tüm Piyasalar</Button>
            </div>
          </Col>
          <Col lg className="m-2">
            <Conversion />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default App;
