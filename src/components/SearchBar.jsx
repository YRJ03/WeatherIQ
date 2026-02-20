import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({theme, setCityName}) {
  const [city, setCity] = useState('');

  const getInput =(e)=> {
    setCity(e.target.value);
  }

  const setInput =(e)=> {
    e.preventDefault();
    setCityName(city);
    setCity('');
  }
  return (
    <section className="w-full mt-5 flex items-center justify-center">
        <form onSubmit={setInput} className="w-60 h-10 md:w-65 flex items-center justify-between border overflow-hidden rounded-md shadow-md">
          <input type="text"
          value={city}
          onChange={getInput} 
          placeholder='Enter Your City Name...' 
          className={`w-[90%] p-5 text-sm outline-none ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-600 text-white'}`} />
          <button type="submit" className="w-auto p-3 bg-blue-500"><BiSearch size={20} /></button>
        </form>
    </section>
  )
}
