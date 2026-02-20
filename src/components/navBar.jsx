import { CiDark, CiLight, CiGlobe } from "react-icons/ci";
import { RiChatDeleteLine } from "react-icons/ri";

function NavBar({handleClear, allClear, theme, setTheme,getCity}) {
    return (
      <section className="w-full flex flex-col items-center justify-center">
        <header className={`w-full px-4 md:px-10 py-1 md:py-2 flex flex-col items-center justify-center shadow-md ${theme === "light" ? 'bg-gray-200' : 'bg-gray-800'}`}>
        <nav className="w-full h-10 flex items-center justify-between">
          <h1 className="font-mono font-bold text-2xl md:text-3xl">
            <span className="text-blue-600">Weather</span>
            <span>IQ</span>
          </h1>
          <div className="w-auto flex gap-0.5">
            <button onClick={allClear?handleClear:getCity} className={`w-10 h-7 flex items-center justify-center text-black rounded-l-md border-blue-500 hover:border-2 hover:border-r-0 ${allClear?'bg-red-500':'bg-green-500'}`}>
              {allClear ? <RiChatDeleteLine/> : <CiGlobe size={19} />}
            </button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`w-10 h-7 flex items-center justify-center rounded-r-md border-blue-500 hover:border-2 hover:border-l-0 ${theme === "light" ? 'bg-gray-800 text-white' : 'bg-amber-500 text-black'}`}>
              {theme === "light" ? <CiDark size={19} /> : <CiLight size={19} />}
            </button>
          </div>
        </nav>
      </header>
    </section>
    );
}

export default NavBar;