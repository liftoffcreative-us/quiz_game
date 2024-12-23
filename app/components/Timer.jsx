import React from 'react'
import localFont from 'next/font/local'

const digitalFont = localFont({
    src: '../static-fonts/digital-7.ttf',
    display: 'swap',
})
const Timer = () => {
  return (
    <container className={digitalFont.className}>
    <div id='timer' className='flex items-center justify-center w-full h-full text-[9rem] text-clock-blue'>
        <div className='static text-clock-blue opacity-15'>88</div>
        <div className='absolute text-clock-blue '>30</div>             
    </div>

    </container>
  )
}

export default Timer