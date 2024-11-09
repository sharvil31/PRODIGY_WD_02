
// import React, { useState } from 'react'

const Controls = ({ exit, setExit, setTime, handleLaps, setBtnText, btnText }) => {


    const resetStopwatch = () => {
        setExit(false);
        setTime({ minutes: 0, seconds: 0, miliseconds: 0 });
        setBtnText("Start 🏁")
    }

    const handleTimeState = () => {
        if(btnText === "Pause ⏸️") {
            setExit(!exit);
            setBtnText("Resume ▶️")
        } else {
            setExit(!exit);
            setBtnText("Pause ⏸️")
        }
    }

  return (
    <div>
        <div className="flex flex-row gap-4 items-center justify-center">
            <div onClick={handleLaps} className="h-10 w-[85px] lg:w-24 inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded-md font-semibold cursor-pointer">Lap ⏱️</div>
            <div onClick={handleTimeState} className="h-10 w-24 lg:w-28 inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-md font-semibold cursor-pointer">{btnText}</div>
            <div onClick={resetStopwatch} className=" h-10 w-24 lg:w-28 inline-flex items-center justify-center bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-md font-semibold cursor-pointer">Reset ⏹️</div>
        </div>
    </div>
  )
}

export default Controls