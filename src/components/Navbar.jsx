import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='text-center py-2 bg-green-400 flex md:justify-between justify-center items-center px-6'>
            <h1 className='text-3xl font-semibold'>WeatherNaut</h1>
            {/* <p>Weather intelligence for every journey</p> */}
            <p className='hidden md:block'>Powered by <a className='underline' href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
        </nav>
    </div>
  )
}

export default Navbar
