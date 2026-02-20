import axios from "axios";

const ApiKey = "a020c8b4fab16c5ecce5b73dbb4681e8";

export const getLocation = (city) => {
    return axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`
    );
}

export const getForecast = (location) => {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${ApiKey}`
    );
}

export const RanDomCity = async (Offset) => {
  const res = await axios.get(
    `https://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&types=CITY&offset=${Offset}`
  );

  return res.data; 
};

export const CountryFlag = async (location) => {
  return await axios.get(
    `https://restcountries.com/v3.1/alpha/${location.country}`
  );
};