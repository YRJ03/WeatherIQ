import { PiCity } from "react-icons/pi";
import rain from "../assets/rain-unscreen.gif";
import website from "../assets/website-unscreen.gif"
import arrow from "../assets/arrow-unscreen.gif"

export default function BeforeSearch({theme, setCityName}) {
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "London", "New York", "Tokyo", "Sydney"];
  const handleClick =(city)=>{
      setCityName(city);
  }
  return (
    <div className="w-full flex flex-col items-center justify-start px-6">
      <div className="w-40 h-40 md:w-48 md:h-48">
        <img src={rain} alt="Rain" className="w-full h-full" />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-blue-500">
        <span className="typing-text">Search weather for your city</span>
      </h1>
      <p className="px-3 py-2 font-mono font-semibold text-center text-xl">
        The future of the weather is in your hands.
      </p>
      <p className="px-3 py-2 font-mono font-extralight text-sm mb-4 text-center">
        Type a city name or pick one from below.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {cities.map((city) => (
          <button key={city} onClick={() => handleClick(city)} className={`text-sm font-light px-2 md:px-4 py-1 md:py-2 rounded-xl md:rounded-full border ${theme === 'light' ? 'hover:bg-gray-200 hover:border-blue-500' : 'hover:bg-gray-800 hover:border-blue-500'}`}>
            <span className="flex items-center gap-1 drop-shadow-blue-400 drop-shadow-xl">
              <PiCity /> {city}
            </span>
          </button>
        ))}
      </div>
      <div className="flex-col text-xs text-gray-500 flex items-center justify-center mt-5">
        <div className="flex items-center justify-center">
          <span className="hidden md:flex items-center gap-1 text-sm whitespace-nowrap">
            Tip: You can visit my website 
            <kbd className={`rounded border flex items-center justify-center ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
              <img src={website} alt="web" className="w-8 h-8" />
            </kbd>
            and contact me anytime
          </span>
          <span className="flex md:hidden items-center gap-1 text-sm whitespace-nowrap">
            Tip: visit my website and contact me anytime
          </span>
          <svg className="w-5 h-5 animate-bounce text-red-600 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="https://yuvitech.netlify.app/" className="flex items-center text-lg md:text-xl text-blue-500 font-mono font-bold rounded-md transition duration-300 relative group overflow-visible"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YuviTech website">
          <img src={arrow} alt="arrow" className="w-8 h-8" />YuviTech
          <span className="absolute top-0 -left-1 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border-blue-500"></span>
          <span className="absolute top-0 -right-2 w-2 h-2 border-t border-r opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border-blue-500"></span>
          <span className="absolute bottom-0 -left-1 w-2 h-2 border-b border-l opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border-blue-500"></span>
          <span className="absolute bottom-0 -right-2 w-2 h-2 border-b border-r opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border-blue-500"></span>
        </a>
      </div>
      <style>{`
        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #555;
          width: 0;
          animation: typing 4s steps(26) infinite, blink 0.7s step-end infinite;
        }

        @keyframes typing {
          0% { width: 0; }
          50% { width: 24ch; }
          100% { width: 0; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
}
