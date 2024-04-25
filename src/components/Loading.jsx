import React from 'react'
import Navbar from './Navbar'


const Loading = () => {
  return (
    <div>
      <Navbar />
      <div className="loadingMain flex justify-center items-center min-h-[calc(100vh) - 36px]">
        <div className="loadingAnimation w-9 h-9 border-[5px] border-[rgba(189,189,189 ,0.25)] absolute top-0 left-0 right-0 bottom-0 m-auto border-l-green-500 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading
