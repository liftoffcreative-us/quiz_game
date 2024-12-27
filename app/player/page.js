'use client';
import localFont from 'next/font/local';
import Form from 'next/form';
import Image from 'next/image';

import { useState } from 'react';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

export default function PlayerPage() {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [playerName, setPlayerName] = useState('');

  const avatars = [
    'cleopatra',
    'curie',
    'davinci',
    'degrasse',
    'douglass',
    'einstein',
    'newton',
  ];

  // set avatar choice
  const handleSelectedAvatar = (e) => {
    setSelectedAvatar(e.target.value);
    console.log(e.target.value);
  };

  // set player name value
  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  //submit the form data
  const handleSubmit = () => {
    alert('Hello ' + playerName + ' You have selected ' + selectedAvatar);
  };

  return (
    <div
      className={`${playerFont.className} flex items-center justify-center w-screen h-screen`}
    >
      <div
        id="container"
        className="flex flex-col gap-4 w-5/6 h-5/6 bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-[3rem] px-20 py-12 "
      >
        <h1 className="text-[3vw] ">Create Your Character</h1>
        <Form
          className="flex flex-col gap-4 h-full w-full "
          onSubmit={handleSubmit}
        >
          {/* Player Name Input */}
          <input
            name="playerName"
            id="playerName"
            value={playerName}
            type="text"
            className="w-1/2 mb-4 py-4 pl-12 text-[2vw] text-blue-950 placeholder:text-slate-300 border-4 border-black rounded-[1em]"
            placeholder="Enter name"
            onChange={handlePlayerName}
          />
          {/* Avatar Selection */}
          <div className="h-[40vh] flex flex-col gap-4">
            <h2 className="text-[2vw]">Choose your avatar:</h2>
            <div id="avatarOptions" className="flex gap-4 flex-wrap">
              {avatars.map((avatar, index) => {
                return (
                  <label
                    key={index}
                    className="flex cursor-pointer"
                    htmlFor={avatar}
                  >
                    <input
                      name="avatar"
                      id={avatar}
                      type="radio"
                      value={avatar}
                      className="appearance-none"
                      checked={selectedAvatar === avatar}
                      onChange={handleSelectedAvatar}
                    />
                    <div className="flex items-center justify-center checked:border-2 checked:border-green-600">
                      <div
                        className={
                          selectedAvatar === avatar
                            ? 'static w-[15vw] h-[15vw] md:w-[9vw] md:h-[9vw] bg-white rounded-full border-4 border-green-600 ring-4 ring-green-400/80'
                            : 'static w-[9vw] h-[9vw] bg-white rounded-full border-2 border-black '
                        }
                      ></div>
                      <Image
                        src={`/avatars/${avatar}.jpg`}
                        alt="Player Avatar"
                        width={100}
                        height={100}
                        className="absolute md:w-[8vw] md:h-[8vw] w-[14vw] h-[14vw] rounded-full overflow-hidden"
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="max-w-[30%] py-4 rounded-[1rem] bg-red-700 border-2 border-red-900 text-[2vw]"
          >
            SUBMIT
          </button>
        </Form>
        <Image
          width={275}
          height={300}
          src="/stars.png"
          alt="stars"
          className="w-[12vw] absolute ml-[65vw] mt-[30vw]"
        />
      </div>
    </div>
  );
}
