import { NextResponse } from 'next/server';
import { mockCategories } from '../test-data/mockData';

export async function GET() {
    try{
        //use mock data
        if(process.env.USE_TEST_DATA) return NextResponse.json(mockCategories);
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to fetch data', error: error.message },
            {status: 500 }
        );
    }
}