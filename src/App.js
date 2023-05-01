import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // assuming this is the CSS file for your App component

document.body.style.backgroundColor = 'black';


function Dashboard() {
  const [calendarData, setCalendarData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch calendar data
    fetch('https://api.calendar.com/events')
      .then(response => response.json())
      .then(data => setCalendarData(data));

    // Fetch weather data
    fetch('https://api.weather.com/forecast')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <div>
      <h1>My Fitness Dashboard</h1>
      {calendarData && (
        <div>
          <h2>Upcoming Events</h2>
          <ul>
            {calendarData.map(event => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        </div>
      )}
      {weatherData && (
        <div>
          <h2>Current Weather</h2>
          <p>{weatherData.current.temperature}°F</p>
          <p>{weatherData.current.conditions}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

 