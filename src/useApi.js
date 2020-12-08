import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.ratesapi.io/api/latest";

const useApi = () => {
  const [currencies, setCurrencies] = useState([
    { id: "GBP", name: "İngiliz Sterlini" },
    { id: "USD", name: "Amerikan Doları" },
    { id: "EUR", name: "Avrupa Para Birimi" },
    { id: "JPY", name: "Japon Yeni" },
    { id: "DKK", name: "Danimarka Kronu" },
    { id: "NOK", name: "Norveç Kronu" },
  ]);
  const [currency, setCurrency] = useState();
  const [loading, setLoading] = useState(false);

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
  return { currency, fetchData, loading };
};

export default useApi;
