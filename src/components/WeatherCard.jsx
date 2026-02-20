export default function WeatherCard({ theme, weather, forecast, flag }) {
  const current = forecast.list[0]; // current weather = first item

  return (
    <section className="w-full flex items-center justify-center font-mono font-bold mt-5">
      <div className={`w-[95%] md:w-[50%] p-3 rounded-2xl border ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-500">{weather.name}</h2>
            <div className="flex gap-2 items-center justify-center">
              <p className="flex justify-center text-xs opacity-70 gap-1">
              <span>{weather.state}</span>
              <span>{weather.country}</span>
            </p>
            <img src={flag} alt="" className="w-5 h-3"/>
            </div>
          </div>
          <p className="text-sm opacity-70">
            {new Date(current.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-24 h-24 colorful"/>
          <p className="text-3xl md:text-6xl text-orange-400 text-shadow-2xs text-shadow-blue-500 font-bold -mt-4">
            {Math.round(current.main.temp)}°C
          </p>
          <p className="text-lg opacity-70 -mt-2">
            {current.weather[0].description}
          </p>
        </div>
        <div className="grid grid-cols-3 text-center mt-2 gap-8">
          <div>
            <p className="text-sm opacity-70 ">Humidity</p>
            <p className="text-xl font-semibold text-green-500">
              {current.main.humidity}%
            </p>
          </div>
          <div>
            <p className="text-sm opacity-70">Wind</p>
            <p className="text-xl font-semibold text-cyan-500">
              {current.wind.speed} m/s
            </p>
          </div>
          <div>
            <p className="text-sm opacity-70">Pressure</p>
            <p className="text-xl font-semibold text-yellow-500">
              {current.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
