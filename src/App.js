import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'; // assuming this is the CSS file for your App component



document.body.style.backgroundColor = 'black';


function Dashboard() {
  const [calendarData, setCalendarData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch calendar data
    fetch('GET https://www.googleapis.com/calendar/v3/calendars/calendarId')
      .then(response => response.json())
      .then(data => setCalendarData(data));

    // Fetch weather data
    fetch('"https://api.openuv.io/api/v1/uv?lat=51.5&lng=-0.11&alt=100&dt=')
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

 