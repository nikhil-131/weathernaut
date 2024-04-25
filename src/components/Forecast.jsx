import React from 'react'
import partialCloudy from "../assets/images/partialCloudy.png"
import cloudy from "../assets/images/cloudy.png"
import sunny from "../assets/images/sunny.png"
import lightRain from "../assets/images/lightRain.png"
import snow from "../assets/images/snow.png"

const Forecast = ({ location }) => {
    const getFullDate = (localtime) => {
        let timeStamp = localtime;
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let userDay = new Date(timeStamp).getDay();
        let userDate = new Date(timeStamp).getDate();
        let userMonth = new Date(timeStamp).getMonth();
        let userFullDate = weekdays[userDay - 1] + ", " + userDate + " " + months[userMonth];
        return userFullDate
    }

    return (
        <div className='foreCastContainer xl:px-16 lg:px-10 md:px-8 flex lg:flex-row flex-col justify-center gap-8'>
            <div className="3dayForecast lg:w-[28vw] w-full flex flex-col justify-center items-center shadow-[3px_3px_10px_2px_gray] rounded-xl font-semibold">
                <h2 className='text-xl font-semibold py-2'>3 Days ForeCast:</h2>
                <div className="D1 w-full flex xl:justify-around justify-evenly items-center xl:gap-4 gap-2">
                    <img className='w-11' src={location.forecast.forecastday[0].day.condition.icon} alt="" />
                    <p>{location.forecast.forecastday[0].day.avgtemp_c}&deg;C</p>
                    <p>{getFullDate(location.forecast.forecastday[0].date)}</p>
                </div>

                <div className="D2 w-full flex xl:justify-around justify-evenly items-center xl:gap-4 gap-2">
                    <img className='w-11' src={location.forecast.forecastday[1].day.condition.icon} alt="" />
                    <p>22&deg;C</p>
                    <p>{getFullDate(location.forecast.forecastday[1].date)}</p>
                </div>

                <div className="D3 w-full flex xl:justify-around justify-evenly items-center xl:gap-4 gap-2">
                    <img className='w-11' src={location.forecast.forecastday[2].day.condition.icon} alt="" />
                    <p>27&deg;C</p>
                    <p>{getFullDate(location.forecast.forecastday[2].date)}</p>
                </div>
            </div>
            <div className="hourlyForecast md:min-w-[500px] w-full lg:w-[52vw] flex flex-col justify-center items-center py-2 shadow-[3px_3px_10px_2px_gray] rounded-xl px-4 font-semibold md:mb-0 mb-4">
                <h2 className='text-xl font-semibold py-1 pb-2'>Hourly Forecast:</h2>
                <div className="hourly flex md:flex-row flex-col gap-4">
                    <div className="H1 px-2 py-3 bg-gradient-to-b from-[#F49B37] to-[#E5D3B6] rounded-lg md:w-fit w-[80vw] flex md:flex-col flex-row items-center justify-center">
                        <p>{location.forecast.forecastday[0].hour[9].time.split(" ")[1]}</p>
                        <img src={location.forecast.forecastday[0].hour[9].condition.icon} alt="sunny" />
                        <p>{location.forecast.forecastday[0].hour[9].temp_c}&deg;C</p>
                        <p>{location.forecast.forecastday[0].hour[9].wind_kph}km/h</p>
                    </div>

                    <div className="H2 px-2 py-3 bg-gradient-to-b from-[#F49B37] to-[#E5D3B6] rounded-lg md:w-fit w-[80vw] flex md:flex-col flex-row items-center justify-center">
                        <p>{location.forecast.forecastday[0].hour[12].time.split(" ")[1]}</p>
                        <img src={location.forecast.forecastday[0].hour[12].condition.icon} alt="sunny" />
                        <p>{location.forecast.forecastday[0].hour[12].temp_c}&deg;C</p>
                        <p>{location.forecast.forecastday[0].hour[12].wind_kph}km/h</p>
                    </div>

                    <div className="H3 px-2 py-3 bg-gradient-to-b from-[#F49B37] to-[#E5D3B6] rounded-lg md:w-fit w-[80vw] flex md:flex-col flex-row items-center justify-center">
                        <p>{location.forecast.forecastday[0].hour[15].time.split(" ")[1]}</p>
                        <img src={location.forecast.forecastday[0].hour[15].condition.icon} alt="sunny" />
                        <p>{location.forecast.forecastday[0].hour[15].temp_c}&deg;C</p>
                        <p>{location.forecast.forecastday[0].hour[15].wind_kph}km/h</p>
                    </div>

                    <div className="H4 px-2 py-3 bg-gradient-to-b from-[#58557B] to-[#9BA0BA] rounded-lg md:w-fit w-[80vw] flex md:flex-col flex-row items-center justify-center">
                        <p>{location.forecast.forecastday[0].hour[18].time.split(" ")[1]}</p>
                        <img src={location.forecast.forecastday[0].hour[18].condition.icon} alt="sunny" />
                        <p>{location.forecast.forecastday[0].hour[18].temp_c}&deg;C</p>
                        <p>{location.forecast.forecastday[0].hour[18].wind_kph}km/h</p>
                    </div>

                    <div className="H5 px-2 py-3 bg-gradient-to-b from-[#58557B] to-[#9BA0BA] rounded-lg md:w-fit w-[80vw] flex md:flex-col flex-row items-center justify-center">
                        <p>{location.forecast.forecastday[0].hour[21].time.split(" ")[1]}</p>
                        <img src={location.forecast.forecastday[0].hour[21].condition.icon} alt="sunny" />
                        <p>{location.forecast.forecastday[0].hour[21].temp_c}&deg;C</p>
                        <p>{location.forecast.forecastday[0].hour[21].wind_kph}km/h</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast
