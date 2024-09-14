import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("London");

  const apiKey = "5fca141baf1740edb3d185929241409";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <input
        type="text"
        placeholder="London"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={fetchData}>Search</button>
      <br />
      <br />
      {/* Check if weather and its nested properties are defined before rendering */}
      {weather && weather.location && weather.current ? (
        <>
          <p>Name: {weather.location.name}</p>
          <p>Region: {weather.location.region}</p>
          <p>Country: {weather.location.country}</p>
          <p>Latitude: {weather.location.lat}</p>
          <p>Longitude: {weather.location.lon}</p>
          <p>
            Temp: {weather.current.temp_c}*C or {weather.current.temp_f}*F
          </p>
          <p>
            Feels Like: {weather.current.feelslike_c}*C or{" "}
            {weather.current.feelslike_f}*F
          </p>
          <p>Day: {weather.current.is_day}</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Wind: {weather.current.wind_kph} Kph</p>
          <p>Pressure: {weather.current.pressure_in}</p>
          <p>Humidity: {weather.current.humidity}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
