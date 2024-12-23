'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'

const digitalFont = localFont({
    src: '../static-fonts/digital-7.ttf',
    display: 'swap',
})
const Timer = ({questionAnswered, setQuestionAnswered}) => {
   
    const initialTime = 30 
    const [timeRemaining, setTimeRemaining] = useState(initialTime)
    

    useEffect( () => {
        const timerInterval = setInterval(() => {
            if (questionAnswered ==false){
            setTimeRemaining((prevTime) => {
                const timesUp = document.getElementById('timesUp')
                if (prevTime === 0) {
                    clearInterval(timerInterval)
                    timesUp.style.visibility = "visible"
                    return 0
                } else {
                    return prevTime -1
                }
            })
            } else {
                return
            }
        }, 1000)
        
        return() => clearInterval(timerInterval)
    }, [questionAnswered]) 

   
   
  return (
    <div className={digitalFont.className}>
    <div id='timer' className='flex items-center justify-center w-full h-full text-[9rem] text-clock-blue'>
        
        <div className=' text-clock-blue '>{timeRemaining}</div>             
    </div>

    </div>
  )
}

export default Timer