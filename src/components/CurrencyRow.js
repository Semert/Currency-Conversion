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
            <b className="id"> {id}</b>
          </div>
          <p className="name">{name}</p>
        </div>
      </div>

      <div>
        <div className="detail">ALIŞ</div>
        <div className="detail-alıs">{amount}</div>
      </div>

      <div>
        {" "}
        <div className="detail"> TARİH</div>
        <div className="detail-tarih">{date}</div>
      </div>
    </div>
  );
};

export default CurrencyRow;
