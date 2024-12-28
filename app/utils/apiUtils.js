import he from "he";

export const formatQuestionData = (data) => {
  const firstQuestionInfo = data.results[0];

  // decode question data
  const decodedQuestion = he.decode(firstQuestionInfo.question);

  //decode answers
  let decodedAnswers = [];
  firstQuestionInfo.incorrect_answers.forEach((element) => {
    decodedAnswers.push(he.decode(element));
  });
  decodedAnswers.push(he.decode(firstQuestionInfo.correct_answer));

  return { question: decodedQuestion, category: firstQuestionInfo.category, answers: decodedAnswers };
};