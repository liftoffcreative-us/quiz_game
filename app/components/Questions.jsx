'use client';

import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Link from 'next/link';
import Image from 'next/image';

const Questions = () => {
  const [questionData, setQuestionData] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [sortedAnswers, setSortedAnswers] = useState([]);
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    fetch('/api/rand-question')
      .then((res) => res.json())
      .then((questionData) => {
        setQuestionData(questionData);
        setLoading(false);
        // setRandomNumber(Math.random() - 0.5)
        setSortedAnswers(
          questionData.data.answers.sort(() => Math.random() - 0.5)
        );
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!questionData) return <p>No profile data</p>;

  const answerChoice = (index) => {
    setQuestionAnswered(true);
    setSelected(index);
  };
  console.log(questionData.data.question);

  return (
    <div className="flex flex-col items-center  justify-center w-3/4 h-3/4 px-4 py-2">
      <Link
        href="/categories"
        id="timesUp"
        className="fixed z-50  h-full w-full flex items-center justify-center"
        style={{ visibility: 'hidden' }}
      >
        <div className="static w-screen h-screen bg-black opacity-80"></div>
        <div className="absolute w-1/2 h-1/2 bg-times-up-bg bg-contain bg-no-repeat "></div>
      </Link>
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
            {sortedAnswers.map((answer, index) => {
              const letter = ['A', 'B', 'C', 'D'];
              return (
                <button
                  key={index}
                  id={index}
                  className={
                    selected === index
                      ? ' flex items-center overflow-hidden  w-[45%] h-[40%] mr-2 text-xl bg-answer-bg rounded-md border-2  border-game-green'
                      : ' flex items-center overflow-hidden  w-[45%] h-[40%] mr-2 text-xl bg-answer-bg rounded-md'
                  }
                  onClick={() => answerChoice(index)}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
