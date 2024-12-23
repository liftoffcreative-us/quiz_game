import { NextResponse } from 'next/server';
import { mockCategories } from '../test-data/mockData';

export async function GET() {
    try{
        console.log(process.env.USE_TEST_DATA);
        //use mock data
        if (process.env.USE_TEST_DATA == "TRUE") return NextResponse.json(mockCategories);

        const apiUrl = "https://opentdb.com/api_category.php";

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`External API Error: ${response.statusText}`);
        }

        const data = await response.json();

        return NextResponse.json({
            message: "Data fetched successfully",
            data: data
        });
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to fetch data', error: error.message },
            {status: 500 }
        );
    }
}