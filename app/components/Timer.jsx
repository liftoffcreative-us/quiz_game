'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'

const digitalFont = localFont({
    src: '../static-fonts/digital-7.ttf',
    display: 'swap',
})
const Timer = () => {
   
    const initialTime = 30 
    const [timeRemaining, setTimeRemaining] = useState(initialTime)

    useEffect( () => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval)
                    return 0
                } else {
                    return prevTime -1
                }
            })
        }, 1000)
        return() => clearInterval(timerInterval)
    }, []) 

   
   
  return (
    <div className={digitalFont.className}>
    <div id='timer' className='flex items-center justify-center w-full h-full text-[9rem] text-clock-blue'>
        <div id="currentTime" className='static text-clock-blue opacity-15'>88</div>
        <div className='absolute text-clock-blue '>{timeRemaining}</div>             
    </div>

    </div>
  )
}

export default Timer