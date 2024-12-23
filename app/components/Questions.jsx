import Image from 'next/image'
import React from 'react'
import Timer from './Timer'
import hpimage from '../images/harry-potter.jpg'

const Questions = () => {
  return (
    <container className='flex flex-col items-center justify-center w-3/4 h-full'>
        <section id="topSection" className='flex items-center w-full h-1/2  overflow-hidden'>
         <div className='mt-4 ml-2 bg-question-bg bg-cover w-[55%] h-full rounded-md '></div>
        </section>
        <section id="bottomSection" className='flex w-full h-1/2 '>
            <div id="timerSection" className='flex flex-col w-1/4 h-full '>
                <Timer />
            </div>
            <div id="questionSection" className='flex flex-col items-start justify-center w-3/4 h-full  p-8'>
                <div id="question" className='text-2xl w-full h-1/3 '>Question would go here?</div>
                <div id="answers" className='flex items-center justify-start h-2/3 w-full   flex-wrap text-lg'>
                    <button className='flex items-center   w-[47%] h-[30%] mr-2 text-xl bg-answer-bg rounded-md overflow-hidden'>
                        <div id='letter' className='flex items-center justify-center w-1/6 h-full  bg-blue-400 font-bold'>A</div>
                        <div className='font-bold  pl-6'>Answer #1</div>
                    </button>
                    <button className='flex items-center  w-[47%] h-[30%] mr-2 text-xl bg-answer-bg rounded-md overflow-hidden'>
                        <div id='letter' className='flex items-center justify-center w-1/6 h-full bg-blue-400 font-bold'>B</div>
                        <div className='font-bold  pl-6 '>Answer #2</div>
                    </button>
                    <button className='flex items-center  w-[47%] h-[30%] mr-2 text-xl bg-answer-bg rounded-md overflow-hidden'>
                        <div id='letter' className='flex items-center justify-center w-1/6 h-full bg-blue-400 font-bold'>C</div>
                        <div className='font-bold  pl-6 '>Answer #3</div>
                    </button>
                    <button className='flex items-center  w-[47%] h-[30%] mr-2 text-xl bg-answer-bg rounded-md overflow-hidden'>
                        <div id='letter' className='flex items-center justify-center w-1/6 h-full  bg-blue-400 font-bold'>D</div>
                        <div className='font-bold  pl-6 '>Answer #4</div>
                    </button>
                </div>

            </div>
        </section>
    </container>
  )
}

export default Questions