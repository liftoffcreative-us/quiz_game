'use client';
import localFont from 'next/font/local';
import Form from 'next/form';
import Image from 'next/image';
import { usePlayersDispatch } from '../../context/playersContext';
import { AVATARS } from '@/app/constants';
import { usePlayersState } from '../../context/playersContext';

import { useState } from 'react';
import Link from 'next/link';

const playerFont = localFont({
  src: '../../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

export default function PlayerPage() {
  const dispatch = usePlayersDispatch();
  const [selectedAvatarId, setSelectedAvatarId] = useState(0);
  const [playerName, setPlayerName] = useState('');
  // disable avatars based on index that corresponds to (id - 1) in AVATARS constant
  // ex: selected avatar with id 4 will have index 3 of this array to true
  const [disabledAvatars, setDisabledAvatars] = useState(
    Array(AVATARS.length).fill(false)
  );
  const { players, currentTurn } = usePlayersState();

  // set avatar choice
  const handleSelectedAvatar = (e) => {
    setSelectedAvatarId(parseInt(e.target.value));
  };

  // set player name value
  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  //submit the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(players.length);
    dispatch({
      type: 'ADD_USER',
      payload: {
        name: playerName,
        avatarName: AVATARS.find((avatar) => avatar.id === selectedAvatarId)
          .name,
      },
    });

    // disable selected avatar with temp array
    const tmpVar = disabledAvatars;
    tmpVar[selectedAvatarId - 1] = true;

    setDisabledAvatars(tmpVar);

    // reset input field after adding player
    setPlayerName('');
    setSelectedAvatarId(0);
  };

  return (
    <div
      className={`${playerFont.className} flex items-center justify-center min-w-[75%] w-full h-full text-white`}
    >
      <div
        id="container"
        className="flex flex-col gap-4 w-11/12 h-5/6 bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-[3rem] px-20 py-12 "
      >
        <h1 className="text-[3vw] ">Add A Player</h1>
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
            <h2 className="text-[2vw]">Choose an avatar:</h2>
            <div id="avatarOptions" className="flex gap-4 flex-wrap">
              {AVATARS.map((avatar, index) => {
                const isDisabledAvatar = disabledAvatars[avatar.id - 1]; // get disabled status of avatar
                return (
                  <label key={index} className="flex" htmlFor={avatar.id}>
                    <input
                      name="avatar"
                      id={avatar.id}
                      type="radio"
                      value={avatar.id}
                      className="appearance-none"
                      checked={selectedAvatarId === avatar.id}
                      onChange={handleSelectedAvatar}
                      disabled={isDisabledAvatar}
                    />
                    <div
                      className={
                        isDisabledAvatar
                          ? 'flex items-center justify-center'
                          : 'flex items-center justify-center cursor-pointer'
                      }
                    >
                      <div
                        className={
                          selectedAvatarId === avatar.id
                            ? 'static w-[15vw] h-[15vw] md:w-[7vw] md:h-[7vw] bg-white rounded-full border-4 border-green-600 ring-4 ring-green-400/80'
                            : 'static w-[7vw] h-[7vw] bg-white rounded-full border-2 border-black  '
                        }
                      ></div>
                      <Image
                        src={`/avatars/${avatar.name}.jpg`}
                        alt="Player Avatar"
                        width={100}
                        height={100}
                        className={
                          isDisabledAvatar
                            ? 'absolute md:w-[6vw] md:h-[6vw] w-[14vw] h-[14vw] rounded-full overflow-hidden opacity-35'
                            : 'absolute md:w-[6vw] md:h-[6vw] w-[14vw] h-[14vw] rounded-full overflow-hidden'
                        }
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <button
              type="submit"
              className="max-w-[40%] px-4 py-4 rounded-[1rem] bg-red-700 border-2 border-red-900 text-[2vw]"
            >
              ADD PLAYER
            </button>
            <Link
              href="/score-board"
              alt="Play Game!"
              className={
                players.length > 1
                  ? 'max-w-[40%] px-4 py-4 rounded-[1rem] bg-green-700 border-2 border-green-900 text-[2vw]'
                  : 'max-w-[40%] px-4 py-4 rounded-[1rem] bg-gray-700 border-2 border-gray-900 text-gray-500 text-[2vw]'
              }
            >
              Play the Game!
            </Link>
          </div>
        </Form>
        <Image
          width={275}
          height={300}
          src="/stars.png"
          alt="stars"
          className="w-[15%] h-[25%] relative ml-[89%] -mt-[17%]"
        />
      </div>
    </div>
  );
}
