import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function Dashboard() {
  const [calendarData, setCalendarData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch calendar data
    fetch('https://www.googleapis.com/calendar/v3/calendars/calendarId/events')
      .then(response => response.json())
      .then(data => setCalendarData(data));

    // Fetch weather data
    fetch('https://api.openuv.io/api/v1/uv?lat=51.5&lng=-0.11&alt=100&dt=&apikey=openuv-qletsgrlh4tuops-io')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <div>
      <h1>My Fitness Dashboard</h1>
      {calendarData && calendarData.items && (
        <div>
          <h2>Upcoming Events</h2>
          <ul>
            {calendarData.items.map(event => (
              <li key={event.id}>{event.summary}</li>
            ))}
          </ul>
        </div>
      )}
      {weatherData && (
        <div>
          <h2>Current UV Index</h2>
          <p>{weatherData.uv}</p>
        </div>
      )}
    </div>
  );
}
