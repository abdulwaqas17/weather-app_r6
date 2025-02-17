import { useEffect, useState } from "react";
import { Search, Sun, Cloud, Droplets, Wind } from "lucide-react";

export default function WeatherApp() {
  const [city, setCity] = useState("Karachi");
  const [data,setData] = useState(null);

  console.log('hellow');
  // useEffect(()=> {
  //   const fetchApi = async ()=> {

  //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c8d16e18b885bdb398c3a87f54fd6df`;
  //     let response = await fetch(url);
  //     let responseJson = await response.json();

  //     console.log('response',responseJson);

  //   }
  //   fetchApi();
  // },[city])

  const fetchApi = async ()=> {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c8d16e18b885bdb398c3a87f54fd6df`;
    let response = await fetch(url);
    let responseJson = await response.json();

    console.log('response',responseJson);
    console.log('response',responseJson.cod);

    setData(responseJson);

  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center transform transition duration-500 hover:scale-105">
        {/* Search Input */}
        <div className="flex items-center bg-gray-200 p-3 rounded-xl mb-6 shadow-inner">
          <input
            type="text"
            placeholder="Enter city..."
            className="flex-grow bg-transparent outline-none px-3 text-gray-700 text-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Search className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" onClick={fetchApi} />
        </div>


        {
          data && data.cod == 200 ? (

            <div className="data">
          
        {/* Weather Info */}
        <div className="flex flex-col items-center">
          <Sun className="text-yellow-500 w-20 h-20 mb-3 animate-pulse" />
          <h2 className="text-5xl font-bold text-gray-900">{data.main.temp}°C</h2>
          <p className="text-gray-600 text-xl mt-1">{data.name}</p>
        </div>

        {/* Extra Info */}
        <div className="flex justify-between mt-6 bg-gray-200 p-5 rounded-xl shadow-inner">
          <div className="flex items-center space-x-3">
            <Droplets className="text-blue-500 w-8 h-8" />
            <span className="text-gray-800 font-semibold text-lg">Humidity: {data.main.humidity}%</span>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="text-gray-500 w-8 h-8" />
            <span className="text-gray-800 font-semibold text-lg">Wind: {data.wind.speed} km/h</span>
          </div>
        </div>

        </div>

          ) : <p>No Data Found</p>
        }



        



      </div>
    </div>
  );
}





/* 

google fonts
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>

.raleway-<uniquifier> {
  font-family: "Raleway", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}


.roboto-<uniquifier> {
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}*/


