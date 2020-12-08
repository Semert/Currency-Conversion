import "./CurrencyRow.css";

const CurrencyRow = ({ id, name, amount, date }) => {
  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <img className="image" src={`/images/${id.toLowerCase()}.png`} />{" "}
        <div>
          <div>
            <b> {id}</b>
          </div>
          <div>{name}</div>
        </div>
      </div>

      <div>
        <div style={{ textAlign: "end", color: "grey", marginRight: 3 }}>
          ALIŞ
        </div>
        <div style={{ fontSize: 16, marginRight: 3 }}>{amount}</div>
      </div>

      <div>
        {" "}
        <div style={{ textAlign: "end", color: "grey" }}> TARİH</div>
        <div style={{ fontSize: 16 }}>{date}</div>
      </div>
    </div>
  );
};

export default CurrencyRow;
