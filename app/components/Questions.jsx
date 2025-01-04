'use client';

import React, { useState, useEffect, useRef } from 'react';
import Timer from './Timer';
import Link from 'next/link';
import Image from 'next/image';
import { usePlayersState, usePlayersDispatch } from '../context/playersContext';
import Modal from './Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { INIT_TIMER_TIME, INIT_STARS } from '../constants';
import localFont from 'next/font/local';

const playerFont = localFont({
  src: '../static-fonts/That Sounds Great.otf',
  display: 'swap',
});

const Questions = ({ categoryId }) => {
  const [questionData, setQuestionData] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasFetched = useRef(false); // a variable that doesn't trigger a re-render when changed
  const dispatch = usePlayersDispatch();
  const router = useRouter();
  const [isCorrect, setIsCorrect] = useState(false);

  // get isStarQuestion from query params
  const searchParams = useSearchParams();
  const isStarQuestion = searchParams.get('isStarQuestion') === 'true';
  const starId = searchParams.get('starId');

  // get answer streak from state and apply timer penalty
  const { answerStreak } = usePlayersState();
  const initialTimerTime = INIT_TIMER_TIME - answerStreak * 5;

  useEffect(() => {
    // prevent multiple fetches on renders
    if (!hasFetched.current) {
      hasFetched.current = true;

      fetch(`/api/question/${categoryId}`)
        .then((res) => res.json())
        .then((questionData) => {
          setQuestionData(questionData);
          setLoading(false);
        });
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!questionData) return <p>No profile data</p>;

  console.log(`Correct Answer Index: ${questionData.data.correctAnswerIndex}`);

  const nextTurn = () => {
    dispatch({
      type: 'NEXT_TURN',
    });
  };
  const updateAnswerStreak = (type) => {
    dispatch({
      type: type,
    });
  };

  const grantPlayerStar = (starId) => {
    console.log(starId);
    dispatch({
      type: 'CURRENT_PLAYER_ADD_STAR',
      payload: { starId: parseInt(starId) },
    });
  };

  return (
    <div className="flex flex-col items-center  justify-center w-3/4 h-3/4 px-4 py-2">
      <Link
        href="/score-board"
        id="timesUp"
        className="fixed z-50  h-full w-full flex items-center justify-center"
        style={{ visibility: 'hidden' }}
        onClick={nextTurn}
      >
        <div className="static w-screen h-screen bg-black opacity-80"></div>
        <div className="absolute w-1/2 h-1/2 bg-times-up-bg bg-contain bg-no-repeat "></div>
      </Link>
      <Modal
        isOpen={answerSubmitted}
        onClose={() => setAnswerSubmitted(false)}
        modalHeaderText="Results"
      >
        <div className="flex flex-col items-center">
          <div>
          {isCorrect
            ? <div className='text-[4rem] font-bold text-green-400 mt-12'>Correct!</div>
            : <div className='flex flex-col items-center justify-center text-red-400 '>
              <h2 className='text-[4rem]'>Incorrect!</h2> 
              <p className='text-[2rem]'>The correct answer was "<span className='font-bold'>{questionData.data.answers[questionData.data.correctAnswerIndex]}</span>"</p>
              </div> }
          </div>
          <div
            className="flex items-center justify-center mt-12 cursor-pointer"
            onClick={() => {
              if (isCorrect) {
                if (isStarQuestion) grantPlayerStar(starId); // if question is a star question, grant player a star
                updateAnswerStreak('INCREMENT_STREAK');
              } else {
                updateAnswerStreak('RESET_STREAK');
                nextTurn(); // if the answer is incorrect, next players turn
              }
              router.push('/score-board');
            }}
          >
            <Image
              src='/buttonBG.svg'
              alt='Button Background'
              width={600}
              height={200}
              className='static w-[80%]'
            />
            <h2 className='absolute text-[1.8rem] text-white'>CONTINUE</h2>
          </div>
        </div>
      </Modal>
      <section
        id="topSection"
        className="flex items-center w-full h-1/2  overflow-hidden"
      >
        <Image
          src="/9.jpg"
          alt="Category Image"
          width={1300}
          height={900}
          className="mt-4 ml-2 bg-question-bg bg-cover w-[55%] h-full rounded-md "
        />
      </section>
      <section id="bottomSection" className="flex w-full h-1/2 ">
        <div
          id="timerSection"
          className="flex flex-col items-center justify-center w-1/4 h-full "
        >
          <Timer stopTimer={answerSubmitted} initialTime={initialTimerTime} />
        </div>
        <div
          id="questionSection"
          className="flex flex-col items-start justify-center w-3/4 h-full p-6"
        >
          <div id="question" className="text-2xl w-full h-1/3 ">
            {questionData.data.question}
          </div>
          <div className="flex flex-wrap w-full h-2/3 gap-4">
            {questionData.data.answers.map((answer, index) => {
              const letter = ['A', 'B', 'C', 'D'];
              return (
                <button
                  key={index}
                  id={index}
                  className={
                    selectedAnswer === index
                      ? ' flex items-center overflow-hidden  w-[45%] h-[40%] mr-2 text-xl bg-answer-bg rounded-md border-2  border-game-green'
                      : ' flex items-center overflow-hidden  w-[45%] h-[40%] mr-2 text-xl bg-answer-bg rounded-md'
                  }
                  onClick={() => setSelectedAnswer(index)}
                >
                  <div
                    id="letter"
                    className="flex items-center justify-center w-1/6 h-full  bg-blue-400 font-bold"
                  >
                    {letter[index]}
                  </div>
                  <div className="flex font-bold pl-6">{answer}</div>
                </button>
              );
            })}
            <div className="flex justify-center w-full mt-4">
              <button
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                  setAnswerSubmitted(true);
                  setIsCorrect(
                    selectedAnswer === questionData.data.correctAnswerIndex
                  );
                }}
                disabled={selectedAnswer === null}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
