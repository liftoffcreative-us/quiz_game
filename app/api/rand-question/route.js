import { NextResponse } from 'next/server';

// Handle the GET request
export async function GET() {
  try {
    // Replace with your external API URL
    const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple';

    // Fetch data from the external API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`External API Error: ${response.statusText}`);
    }

    const data = await response.json();

    console.log(extractQuestionElements(data));

    // Return the data as JSON
    return NextResponse.json({
      message: 'Data fetched successfully',
      data: extractQuestionElements(data)
    });
  } catch (error) {
    // Handle errors and return an appropriate response
    return NextResponse.json(
      { message: 'Failed to fetch data', error: error.message },
      { status: 500 }
    );
  }
}

const extractQuestionElements = (data) => {

  const firstQuestionInfo = data.results[0];

  return {question: firstQuestionInfo.question, answers: [...firstQuestionInfo.incorrect_answers, firstQuestionInfo.correct_answer]};
};
