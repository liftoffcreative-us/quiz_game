export default function AddPlayers() {
  return null;
  // const dispatch = usePlayersDispatch();
  // const [selectedAvatar, setSelectedAvatar] = useState('');
  // const [playerName, setPlayerName] = useState('');
  // const [disabled, setDisabled] = useState(false);

  // const avatars = [
  //   {
  //     id: 1,
  //     name: 'cleopatra',
  //     selected: false,
  //   },
  //   {
  //     id: 2,
  //     name: 'curie',
  //     selected: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'davinci',
  //     selected: false,
  //   },
  //   {
  //     id: 4,
  //     name: 'degrasse',
  //     selected: false,
  //   },
  //   {
  //     id: 5,
  //     name: 'douglass',
  //     selected: false,
  //   },
  //   {
  //     id: 6,
  //     name: 'einstein',
  //     selected: false,
  //   },
  //   {
  //     id: 7,
  //     name: 'newton',
  //     selected: false,
  //   },
  // ];

  // // set avatar choice
  // const handleSelectedAvatar = (e) => {
  //   setSelectedAvatar(e.target.value);
  //   console.log(e.target.value);
  // };

  // // set player name value
  // const handlePlayerName = (e) => {
  //   setPlayerName(e.target.value);
  // };

  // //submit the form data
  // const handleSubmit = () => {
  //   dispatch({
  //     type: 'ADD_USER',
  //     payload: { name: playerName, avatarName: selectedAvatar },
  //   });

  //   // reset input field after adding player
  //   setPlayerName('');
  //   setSelectedAvatar('');
  // };

  // return (
  //   <div
  //     className={`${playerFont.className} flex items-center justify-center w-screen h-screen text-white`}
  //   >
  //     <div
  //       id="container"
  //       className="flex flex-col gap-4 w-5/6 h-5/6 bg-gradient-to-b from-grad-lt-blue to-grad-dk-blue rounded-[3rem] px-20 py-12 "
  //     >
  //       <h1 className="text-[3vw] ">Add A Player</h1>
  //       <Form
  //         className="flex flex-col gap-4 h-full w-full "
  //         onSubmit={handleSubmit}
  //       >
  //         {/* Player Name Input */}
  //         <input
  //           name="playerName"
  //           id="playerName"
  //           value={playerName}
  //           type="text"
  //           className="w-1/2 mb-4 py-4 pl-12 text-[2vw] text-blue-950 placeholder:text-slate-300 border-4 border-black rounded-[1em]"
  //           placeholder="Enter name"
  //           onChange={handlePlayerName}
  //         />
  //         {/* Avatar Selection */}
  //         <div className="h-[40vh] flex flex-col gap-4">
  //           <h2 className="text-[2vw]">Choose an avatar:</h2>
  //           <div id="avatarOptions" className="flex gap-4 flex-wrap">
  //             {avatars.map((avatar, index) => {
  //               return (
  //                 <label key={index} className="flex" htmlFor={avatar.name}>
  //                   <input
  //                     name="avatar"
  //                     id={avatar.name}
  //                     type="radio"
  //                     value={avatar.name}
  //                     className="appearance-none"
  //                     checked={selectedAvatar === avatar.name}
  //                     onChange={handleSelectedAvatar}
  //                     disabled={avatar.selected}
  //                   />
  //                   <div
  //                     className={
  //                       avatar.selected
  //                         ? 'flex items-center justify-center'
  //                         : 'flex items-center justify-center cursor-pointer'
  //                     }
  //                   >
  //                     <div
  //                       className={
  //                         selectedAvatar === avatar.name
  //                           ? 'static w-[15vw] h-[15vw] md:w-[9vw] md:h-[9vw] bg-white rounded-full border-4 border-green-600 ring-4 ring-green-400/80'
  //                           : 'static w-[9vw] h-[9vw] bg-white rounded-full border-2 border-black  '
  //                       }
  //                     ></div>
  //                     <Image
  //                       src={`/avatars/${avatar.name}.jpg`}
  //                       alt="Player Avatar"
  //                       width={100}
  //                       height={100}
  //                       className={
  //                         avatar.selected
  //                           ? 'absolute md:w-[8vw] md:h-[8vw] w-[14vw] h-[14vw] rounded-full overflow-hidden opacity-35'
  //                           : 'absolute md:w-[8vw] md:h-[8vw] w-[14vw] h-[14vw] rounded-full overflow-hidden'
  //                       }
  //                     />
  //                   </div>
  //                 </label>
  //               );
  //             })}
  //           </div>
  //         </div>
  //         <button
  //           type="submit"
  //           className="max-w-[30%] py-4 rounded-[1rem] bg-red-700 border-2 border-red-900 text-[2vw]"
  //         >
  //           ADD PLAYER
  //         </button>
  //       </Form>
  //       <Image
  //         width={275}
  //         height={300}
  //         src="/stars.png"
  //         alt="stars"
  //         className="w-[15%] h-[25%] relative ml-[87%] -mt-[15%]"
  //       />
  //     </div>
  //   </div>
  // );
}
