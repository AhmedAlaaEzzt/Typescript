const todayWeather = {
    date: new Date(),
    weather: "sunny",
  };
  
  const logWeather = (forecast: {date:Date, weather: string} ): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
  };
  
  
  logWeather(todayWeather)