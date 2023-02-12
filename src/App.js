import "./App.css";
import WeatherWild from "./components/WeatherWild";
import { useState } from "react";
import axios from "axios";

const api_key = `94f4a2bd0ba647d0a86170858230902`;
const api_url = `http://api.weatherapi.com/v1`;
const api_method = `/current.json`;
const api = `${api_url}${api_method}?key=${api_key}&q=`;

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    switch (e.keyCode) {
      case 13:
        axios
          .get(`${api}${search}`)
          .then((response) => setData(response.data))
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
        e.target.value = "";
        break;
      default:
    }
  };

  return (
    <div className="App">
      <input
        type={"search"}
        placeholder="Search country/city"
        onKeyUp={handleSearch}
        style={{
          width: "300px",
          textAlign: "center",
          padding: "13px",
          border: "none",
          borderRadius: "10px",
          marginTop: "10px",
          borderColor: "gray",
          fontSize: "15px",
          outline: "none",
        }}
      />
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        data && <WeatherWild data={data} />
      )}
    </div>
  );
}

export default App;
