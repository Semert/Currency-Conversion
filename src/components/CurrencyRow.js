import "./CurrencyRow.css";

const CurrencyRow = ({ id, name, amount, date }) => {
  return (
    <div className="main">
      <div className="context">
        <img
          className="image"
          alt={id.toLowerCase()}
          src={`/images/${id.toLowerCase()}.png`}
        />{" "}
        <div>
          <div>
            <b> {id}</b>
          </div>
          <p>{name}</p>
        </div>
      </div>

      <div>
        <div className="detail">ALIŞ</div>
        <div style={{ fontSize: 21 }}>{amount}</div>
      </div>

      <div>
        {" "}
        <div className="detail"> TARİH</div>
        <div style={{ fontSize: 18 }}>{date}</div>
      </div>
    </div>
  );
};

export default CurrencyRow;
