// src/components/Weather.js

import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Remplacez 'YOUR_API_KEY' par votre véritable clé API
        const apiKey = "c4e331aa2cf32152d2b0e023ffd177cb";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric&lang=fr`
        );
        if (!response.ok) throw new Error("Weather fetch failed");
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="weather">
      {weather && (
        <div className="weather">
          <div className="weather-details">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p>
              <strong>{weather.name}</strong> {/* Nom de la ville */}
            </p>
          </div>
          <div className="weather-details">
            <p>
              {Math.round(weather.main.temp)}°C <br />{" "}
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
