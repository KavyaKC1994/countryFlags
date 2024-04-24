import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const imageStyle = {
    width: "100px",
    height: "100px",
  };
  return (
    <div style={containerStyle}>
      {countries.map((country) => {
        return (
          <div key={country.cca3} style={cardStyle}>
            <img src={country.flags.png} alt="flag" style={imageStyle} />
            <h2>{country.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}
