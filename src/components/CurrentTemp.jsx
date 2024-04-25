import React from 'react'
import sunrise from "../assets/images/sunrise.svg"
import sunset from "../assets/images/sunset.svg"
import sunny from "../assets/images/sunny.svg"
import humidity from "../assets/images/humidity.svg"
import windSpeed from "../assets/images/windSpeed.svg"
import pressure from "../assets/images/pressure.svg"
import uv from "../assets/images/uv.svg"

const CurrentTemp = ({location}) => {
    console.log(location);
    // console.log(location.forecast.forecastday[0].day.avgtemp_c);
    let timeStamp = location.location.localtime.split(" ")[0];
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let userDay = new Date(timeStamp).getDay();
    let userDate = new Date(timeStamp).getDate();
    let userMonth = new Date(timeStamp).getMonth();
    let userYear = new Date(timeStamp).getFullYear();
    let userFullDate = weekdays[userDay - 1] + ", " + userDate + " " + months[userMonth] + " " + userYear;
    // console.log(userFullDate);
    
    return (
        <div className='currentTemperatureContainer xl:px-16 lg:px-8 md:px-4 flex md:flex-row flex-col justify-center lg:gap-8 gap-4 py-8'>
            <div className="currentContainer bg-white md:w-[25vw] w-full rounded-xl shadow-[5px_5px_11px_2px_gray] flex flex-col items-center justify-center py-6">
                <h2 className='text-4xl font-semibold'>{location.location.name}</h2>
                <h1 className='text-6xl py-3 font-semibold'>{location.location.localtime.split(" ")[1]}</h1>
                <p className='text-sm'>{userFullDate}</p>
            </div>
            <div className="temperatureContainer bg-white md:w-[70%] xl:w-[700px] w-full rounded-xl shadow-[5px_5px_11px_2px_gray] px-8 py-4 flex md:flex-row flex-col text-center justify-between">
                <div className="tempDetails">
                    <div className="temp py-3">
                        <p className='text-6xl font-bold'>{location.current.temp_c}&deg;C</p>
                        <p className='flex items-center justify-center gap-1 font-semibold text-sm'>Feels like: <span className='text-xl'>{location.current.feelslike_c}&deg;C</span></p>
                    </div>
                    <div className="sunRiseSunSet flex flex-col gap-4">
                        <div className="sunRise flex justify-center gap-2">
                            <img className='w-10' src={sunrise} alt="sunrise" />
                            <div className="sunriseTime">
                                <h2 className='font-bold'>Sunrise</h2>
                                <p className='font-semibold text-sm'>{location.forecast.forecastday[0].astro.sunrise}</p>
                            </div>
                        </div>
                        <div className="sunSet flex justify-center gap-2">
                            <img className='w-10' src={sunset} alt="seunset" />
                            <div className="sunsetTime">
                                <h2 className='font-bold'>Sunset</h2>
                                <p className='font-semibold text-sm'>{location.forecast.forecastday[0].astro.sunset}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tempIconD pb-4 md:pb-0 flex flex-col items-center justify-center px-8">
                    <img className='w-[350px] max-w-40' src={location.current.condition.icon} alt="sunny" />
                    <p className='font-semibold text-3xl text-center'>{location.current.condition.text}</p>
                </div>
                <div className="tempMoreDetails flex gap-4 flex-wrap justify-evenly">
                    <div className="humidity flex flex-col items-center w-[90px]">
                        <div className="humLogo flex flex-col justify-center items-center">
                            <img className='w-14' src={humidity} alt="humidity" />
                            <p className='font-semibold'>{location.current.humidity}%</p>
                        </div>
                        <p className='text-sm font-semibold'>Humidity</p>
                    </div>

                    <div className="windSpeed flex flex-col items-center w-[90px]">
                        <div className="windLogo flex flex-col justify-center items-center">
                            <img className='w-14' src={windSpeed} alt="humidity" />
                            <p className='font-semibold'>{location.current.wind_kph}km/h</p>
                        </div>
                        <p className='text-sm font-semibold'>Wind Speed</p>
                    </div>

                    <div className="pressure flex flex-col items-center w-[90px]">
                        <div className="pressureLogo flex flex-col justify-center items-center">
                            <img className='w-14' src={pressure} alt="humidity" />
                            <p className='font-semibold'>{location.current.pressure_mb}hPa</p>
                        </div>
                        <p className='text-sm font-semibold'>Pressure</p>
                    </div>

                    <div className="uv flex flex-col items-center w-[90px]">
                        <div className="uvLogo flex flex-col justify-center items-center">
                            <img className='w-14' src={uv} alt="humidity" />
                            <p className='font-semibold'>{location.current.uv}</p>
                        </div>
                        <p className='text-sm font-semibold'>UV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentTemp
