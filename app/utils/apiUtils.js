import he from "he";

export const formatQuestionData = (data) => {
  const firstQuestionInfo = data.results[0];

  // decode question string
  const decodedQuestion = he.decode(firstQuestionInfo.question);

  const availableIndices = [0, 1, 2, 3];        // Unassigned indices in decodedAnswers[]
  let decodedAnswers = new Array(4).fill(null); // Initialize empty answers array
  let randomIndex;                              // Declare random index variable
  // decode incorrect answers and assign to random index
  firstQuestionInfo.incorrect_answers.forEach((answer) => {
    randomIndex = Math.floor(Math.random() * availableIndices.length);  // get random index
    decodedAnswers[availableIndices[randomIndex]] = he.decode(answer);  // assign answer to random index
    availableIndices.splice(randomIndex, 1);  // remove index from available indices
  });

  // add correct answer with final index
  const correctAnswerIndex = availableIndices[0];
  decodedAnswers[correctAnswerIndex] = he.decode(firstQuestionInfo.correct_answer);

  return { question: decodedQuestion, category: firstQuestionInfo.category, answers: decodedAnswers, correctAnswerIndex: correctAnswerIndex };
};