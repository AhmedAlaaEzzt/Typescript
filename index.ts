const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};


logWeather(todayWeather)