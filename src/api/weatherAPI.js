import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnLocation = (location) => {
  return apiClient
    .get(
      `/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_key}`
    )
    .then((res) => res.data);
};

const getForecast = (lat, lon) => {
  return apiClient
    .get(
      `/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_key}`
    )
    .then((res) => res.data);
};

export { getWeatherBasedOnLocation, getForecast };
