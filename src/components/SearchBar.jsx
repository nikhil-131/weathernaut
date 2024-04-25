import { React, useState, useEffect } from 'react'
import curLoc from "../assets/images/curLoc.svg"


const SearchBar = ({location, setLocation, isLoading, setIsLoading}) => {

    const [searchAuto, setSearchAuto] = useState("");
    const [visibleBox, setVisibleBox] = useState(false);
    
    const autoSearch = async (event) => {
        setSearchAuto(event.target.value);
        // console.log(event.target.value);
    }

    const handleSearch = async (event) => {
        setIsLoading(true);
        let searchAPI;
        if(searchAuto.toLowerCase() == "delhi") {
            searchAPI = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=69e811c87ddc49a985963910242404&q=${searchAuto}-india&days=3&aqi=no&alerts=no`);
        }
        else {
            searchAPI = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=69e811c87ddc49a985963910242404&q=${searchAuto}&days=3&aqi=no&alerts=no`);
        }
        let searchRes = await searchAPI.json();
        setLocation(searchRes);
        setIsLoading(false);
    }
    
    // useEffect(() => {
    //     if(searchAuto.length >0) {
    //         setVisibleBox(true);
    //     }
    //     else {
    //         setVisibleBox(false)
    //     }
    // })

    return (
        <div className='searchBarContainer'>
            <div className="search flex md:flex-row flex-col items-center gap-4 py-4 justify-center">
                <label htmlFor="search" className='relative'>
                    <input onChange={autoSearch} className='border-2 border-black md:w-[40vw] w-[90vw] px-2 py-1.5 rounded-md' type="text" name="search" id="search" value={searchAuto} placeholder='Search for your preffered city...' />
                    {/* {visibleBox &&
                        <div className="searchList bg-red-400 w-[40vw] h-[20vh] absolute bottom-[-200%]"></div>
                    } */}
                </label>
                <button onClick={handleSearch} className='bg-green-400 md:w-fit w-[60%] hover:bg-green-500 py-1.5 px-2 rounded-md'>Search</button>
            </div>
            {/* <div className="currentLocation flex justify-center">
                <button className='flex items-center bg-green-400 hover:bg-green-500 py-1.5 px-2 rounded-md gap-2'><img className='w-3' src={curLoc} alt="current location" />Current Location</button>
            </div> */}
        </div>
    )
}

export default SearchBar
