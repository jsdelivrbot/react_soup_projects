import axios from 'axios';

const API_KEY = 'e3172499022c3ca436704ee345f5b0be';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}