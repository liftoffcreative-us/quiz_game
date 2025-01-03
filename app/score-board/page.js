'use client';
import Image from 'next/image';
import localFont from 'next/font/local';
import { mockPlayers } from './mockPlayers';
import { usePlayersState } from '../context/playersContext';
import PlayerReady from '../components/PlayerReady';
import { useEffect, useState } from 'react';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

export default function ScoreBoardPage() {
  // get player and turn info from state
  const { players, currentTurn } = usePlayersState();
  const [playerReady, setPlayerReady] = useState(false);

  const getReady = () => {
    setPlayerReady(true);
  };
  setTimeout(getReady, 3000);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-game-bg ">
      {playerReady ? <PlayerReady className="fixed " /> : null}
      <div
        id="scoreBoard"
        className="w-full h-full flex items-center justify-start p-12 flex-col flex-wrap gap-6"
      >
        <Image
          src="/scoreBoardBanner.png"
          width={1045}
          height={260}
          alt="Score Board Banner"
          className="w-1/3 mb-4"
        />
        <div id="players" className="w-full h-auto flex gap-6 flex-wrap">
          {players.map((player, index) => {
            return (
              <div
                key={index}
                id="playerCard"
                className="flex w-[30.5vw] h-[10vw] mt-2 items-center"
              >
                <div
                  style={{ backgroundColor: player.color }}
                  className={
                    player.position === currentTurn
                      ? 'static  w-[30.5vw] h-[8vw] rounded-[2rem] border-4 border-black ring-4 ring-green-500 shadow-glow shadow-green-500'
                      : 'static  w-[30.5vw] h-[8vw] rounded-[2rem] border-4 border-black'
                  }
                ></div>

                <div className="absolute  ml-8 flex flex-col">
                  <div
                    className={`${playerFont.className} text-[2.2em] justify-self-start -mt-2 `}
                  >
                    {player.name}
                  </div>
                  <div id="stars" className="flex w-[15vw] gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[0].achieved
                          ? 'fill-game-purple stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[1].achieved
                          ? 'fill-game-blue stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[2].achieved
                          ? 'fill-game-red stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[3].achieved
                          ? 'fill-game-orange stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[4].achieved
                          ? 'fill-game-pink stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116.3 111.19"
                      className={
                        player.rings[5].achieved
                          ? 'fill-game-green stroke-[#fff] stroke-[8px] w-[15%]'
                          : 'fill-[#b3b3b3] stroke-[#fff] stroke-[8px] w-[15%]'
                      }
                    >
                      {' '}
                      <path d="m60.8 4.64 13.9 27.75a7.223 7.223 0 0 0 5.39 3.91l30.69 4.65c2.41.37 3.38 3.33 1.64 5.04L90.33 67.78a7.253 7.253 0 0 0-2.06 6.33l5.06 30.62c.4 2.41-2.12 4.24-4.29 3.12L61.48 93.57a7.25 7.25 0 0 0-6.66 0l-27.56 14.28c-2.17 1.12-4.69-.71-4.29-3.12l5.06-30.62c.38-2.32-.38-4.68-2.06-6.33L3.89 45.99c-1.74-1.71-.78-4.68 1.64-5.04l30.69-4.65a7.258 7.258 0 0 0 5.39-3.91l13.9-27.75c1.09-2.18 4.21-2.18 5.3 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-center ml-[19vw]">
                  <div className="static w-[10vw] h-[10vw] bg-white rounded-full border-2 border-black "></div>
                  <Image
                    src={player.avatar}
                    alt="Player Avatar"
                    width={100}
                    height={100}
                    className="absolute w-[9vw] h-[9vw]  rounded-full overflow-hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
