import { NextResponse } from 'next/server';
import { mockQuestionData } from '../test-data/mockData';
import he from 'he';

// Handle the GET request
export async function GET() {
  try {
    // use mock data if enabled
    if(process.env.USE_TEST_DATA == "TRUE") return NextResponse.json(mockQuestionData);
    
    const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple';

    // Fetch data from the external API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`External API Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Return the data as JSON
    return NextResponse.json({
      message: 'Data fetched successfully',
      data: formatQuestionData(data)
    });
  } catch (error) {
    // Handle errors and return an appropriate response
    return NextResponse.json(
      { message: 'Failed to fetch data', error: error.message },
      { status: 500 }
    );
  }
}

const formatQuestionData = (data) => {
  const firstQuestionInfo = data.results[0];

  // decode question data
  const decodedQuestion = he.decode(firstQuestionInfo.question);

  //decode answers
  let decodedAnswers = [];
  firstQuestionInfo.incorrect_answers.forEach(element => {
    decodedAnswers.push(he.decode(element))
  });
  decodedAnswers.push(he.decode(firstQuestionInfo.correct_answer));

  return {question: decodedQuestion, answers: decodedAnswers};
};