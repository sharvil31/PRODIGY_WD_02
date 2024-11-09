
import React from 'react'
import "../index.css"

const TimeCounter = ({time}) => {

    const {minutes, seconds, miliseconds} = time;

    const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <>
    <div  className="h-[240px] w-[240px] md:h-[305px] md:w-[305px] bg-white rounded-full flex items-center justify-center -z-50 overflow-hidden relative">
      <div className="spinning-border"></div>
    <div className="h-56 w-56 md:h-72 md:w-72 bg-stone-900 rounded-full flex items-center justify-center overflow-hidden">

        <h1 className="text-[43px] md:text-[55px] text-gray-100 text-center">
            {formatNumber(minutes)}:{formatNumber(seconds)}:{formatNumber(miliseconds)}
        </h1>
    </div>
    </div>
    </>
  )
}

export default TimeCounter