import { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import SearchBar from "./components/SearchBar";
import BeforeSearch from "./components/beforeSearch";
import { CountryFlag, getForecast, getLocation, RanDomCity } from "./api/ApiData";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastList";

function WeatherApp() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    const [cityName, setCityName] = useState(null);
    const [location, setLocation] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        if (!cityName) return;
        const fetchLocation = async () => {
            try {
                const result = await getLocation(cityName);
                if (result.data && result.data.length > 0) {
                    const location = (result.data[0]);
                    setLocation(location);
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, [cityName]);

    useEffect(() => {
        if (!location) return;
        const fetchForecast = async () => {
            try {
                const result = await getForecast(location);
                setForecast(result.data);
            } catch (error) {
                console.error("Error fetching forecast:", error);
            }
        }

        fetchForecast();
    }, [location]);

    useEffect(() => {
    if (!location) return; 

    const fetchCountryFlag = async () => {
        try {
            const result = await CountryFlag(location);
            setFlag(result.data[0].flags?.png);
        } catch (error) {
            console.error("Error fetching country flag:", error);
        }
    };
    fetchCountryFlag();
}, [location]);

    const randomCity = async () => {
        const offsetNumber = Math.floor(Math.random() * 30859);
        const result = await RanDomCity(offsetNumber);
        if (result.data.length === 0) {
            console.log("!Empty response retry...");
            return randomCity();
        }
        const city = result.data[0].city;
        if (!city) {
            console.log("!Missing city retry...");
            return randomCity();
        }
        setCityName(city);
    };

    const handleClear =()=> {
        setCityName(null);
        setForecast(null);
        setLocation(null);
        setFlag(null);
    }

    return (
        <main className="w-screen h-screen flex flex-col">
            <header className="w-full flex flex-col fixed top-0 left-0 z-50">
                <NavBar handleClear={handleClear} allClear={forecast} theme={theme} setTheme={setTheme} getCity={randomCity} />
            </header>
            <div className="w-full mt-12">
                <SearchBar theme={theme} setCityName={setCityName} />
            </div>
            {!forecast && (<BeforeSearch theme={theme} setCityName={setCityName} />)}
            {forecast && (
                <div className="flex flex-col items-center justify-center">
                    <WeatherCard theme={theme} weather={location} forecast={forecast} flag={flag} />
                    <ForecastCard theme={theme} forecast={forecast}/>
                </div>
            )}
        </main>
    );
}

export default WeatherApp;
