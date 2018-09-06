import axios from 'axios';

const API_KEY = '54ff9bbb9e525ce5cd1378a01d234571';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATHER_WEATHER';

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us`;

  // returns a promise here
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
