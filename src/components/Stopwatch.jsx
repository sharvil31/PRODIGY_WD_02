
import React, { useEffect, useState } from 'react'
import Header from './Header';
import TimeCounter from './TimeCounter';
import Controls from './Controls';
import Laps from './Laps';
import "../App.css"

const Stopwatch = () => {

  const [time, setTime] = useState({ minutes: 0, seconds: 0, miliseconds: 0 });
  const [exit, setExit] = useState(false);
  const [laps, setLaps] = useState([]);
  const [btnText, setBtnText] = useState("Start 🏁")

  const handleLaps = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
    console.log(laps);
  }

  const clearLaps = () => {
    setLaps([]);
  }

  useEffect(() => {

    let interval = null;

    if(exit) {
    interval = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime.miliseconds >= 99) {
          return {...prevTime, miliseconds: 0, seconds:prevTime.seconds + 1 }
        }

        if(prevTime.seconds === 60) {
          return {...prevTime, seconds: 0, minutes:prevTime.minutes + 1 }
        }

        if(prevTime.minutes === 60) {
          setTime({ minutes: 0, seconds: 0, miliseconds: 0 })
        }

        return {...prevTime, miliseconds:prevTime.miliseconds + 1}
      })
    }, 10)

  } else {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
  }, [exit])

  return (
      <div className=" p-4 flex justify-center flex-col items-center gap-8 box-border relative">
      <Header />
      <TimeCounter time={time} />
      <Controls exit={exit} setExit={setExit} setTime={setTime} handleLaps={handleLaps} btnText={btnText} setBtnText={setBtnText} />
      <Laps laps={laps} />
      
      {
        laps.length > 0 &&
        <div onClick={clearLaps} className="py-2 px-8 bg-rose-700 hover:bg-rose-800 active:bg-rose-900 font-semibold text-white rounded-md absolute -bottom-2 cursor-pointer">Clear All</div>
      }
      </div>
  )
}

export default Stopwatch;