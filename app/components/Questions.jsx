'use client';

import React, { useState, useEffect, useRef } from 'react';
import Timer from './Timer';
import Link from 'next/link';
import Image from 'next/image';
import { usePlayersState, usePlayersDispatch } from '../context/playersContext';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

const Questions = ({ categoryId }) => {
  const [questionData, setQuestionData] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasFetched = useRef(false); // a variable that doesn't trigger a re-render when changed
  const dispatch = usePlayersDispatch();
  const [correctAnswers, setCorrectAnswers] = useState(0) //variable to track the number of correct answers in a row (effects amount of time on timer)
  const router = useRouter();
  const [isCorrect, setIsCorrect] = useState(false);

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
        <div className="text-2xl font-bold text-black">
          {isCorrect
            ? 'Correct!'
            : `Incorrect! The correct answer was ${questionData.data.answers[questionData.data.correctAnswerIndex]}`}
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              !isCorrect && nextTurn(); // if the answer is incorrect, next players turn
              router.push('/score-board');
            }}
          >
            Contiue
          </button>
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
          <Timer questionAnswered={questionAnswered} />
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
