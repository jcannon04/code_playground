// Not used in application yet. Work in progress.
import { NextResponse } from 'next/server'


export async function POST(request) {
    
    const { languageId, input } = request.body;

    const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
    method: "POST",
    headers: {
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY, // Replace this with your RapidAPI key
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      source_code: input,
      language_id: languageId,
    }),
  });
   
    return NextResponse.json({ response })
  }
