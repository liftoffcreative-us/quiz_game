'use client';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const digitalFont = localFont({
  src: '../static-fonts/Digital Dismay.otf',
  display: 'swap',
});
const Timer = ({ questionAnswered, correctAnswers}) => {
  // const initialTime = 30;
  const [time, setTime] = useState([30,25,20,15,10])  //sets the starting amount of time based 
  const [timeRemaining, setTimeRemaining] = useState(time[correctAnswers]);
  
  // Handle timer countdown
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (questionAnswered == false) {
        setTimeRemaining((prevTime) => {
          const timesUp = document.getElementById('timesUp');
          if (prevTime === 0) {
            clearInterval(timerInterval);
            timesUp.style.visibility = 'visible';
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      } else {
        return;
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [questionAnswered]);

  return (
    <div className={digitalFont.className}>
      <div
        id="timer"
        className="flex items-center justify-center w-full h-[100%] text-[9rem] text-game-green"
      >
        <div
          className={
            timeRemaining > 5
              ? 'static text-game-green opacity-10 '
              : 'static text-game-red opacity-10 text-[11rem]'
          }
        >
          88
        </div>
        <div
          className={
            timeRemaining > 5
              ? 'absolute text-game-green '
              : 'absolute text-game-red animate-pulse-fast text-[11rem]'
          }
        >
          {timeRemaining > 9 ? timeRemaining : '0' + timeRemaining}
        </div>
      </div>
    </div>
  );
};

export default Timer;
