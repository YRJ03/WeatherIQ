export default function ForecastCard({ forecast, theme }) {
  const days = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h3 className="text-xl mt-3 mb-3 font-semibold px-3">
        5-Day Forecast
      </h3>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 overflow-x-auto pb-3">
        {days.map((day, index) => (
          <div key={index}
            className={`p-2 md:p-3 rounded-xl shadow-lg flex flex-col items-center justify-center border ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}>
            <p className="font-medium text-teal-500">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="icon"
              className="colorful w-12 h-12 "/>
            <p className="text-lg font-semibold text-indigo-800">
              {Math.round(day.main.temp)}°C
            </p>
            <span className="text-xs opacity-70">
              Min {Math.round(day.main.temp_min)}° | Max {Math.round(day.main.temp_max)}°
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
