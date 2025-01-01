'use client'
import React from 'react'
import localFont from 'next/font/local';
import Image from 'next/image';
import { usePlayersState } from '../context/playersContext';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

const PlayerReady = () => {
    // get player and turn info from state
    const { players, currentTurn } = usePlayersState();
    //identify the Current Player
    const currentPlayer = players.filter((player) => player.position === currentTurn)
    
  return (
    <div className={`${playerFont.className} fixed w-screen h-screen flex items-center justify-center z-40`}>
        <div className='fixed bg-slate-900 opacity-80 w-full h-full'></div>
        <div className='flex flex-col items-center justify-center z-50 w-3/4 h-3/4 bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-2xl'>
            <h3 className='text-[2.5rem]'>It's Now Your Turn</h3>
            {currentPlayer.map((player) => {
                return (
                    <h2 key={player.playerId} className='text-[6rem]'>{player.name}</h2>  
                )
            })}
            
            
            <p className='text-[2.8rem]'>Are you Ready?</p>
            <Link href="/categories" className='flex items-center justify-center mt-12'>
                <Image src="/buttonBG.svg" alt="Button Background" width={600} height={200} className='static w-[80%]'/>
                <h2 className='absolute text-[1.8rem]'>READY</h2>
            </Link>
        </div>

    </div>
  )
}

export default PlayerReady